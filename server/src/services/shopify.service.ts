import { cacheService } from './cache.service';
import { demoProducts, demoOrders } from '../data/demo-data';

export class ShopifyService {
  async fetchProducts(testMode = false): Promise<any[]> {
    if (testMode) {
      console.log('[Shopify] Test Mode Active: Forcing demo products');
      return demoProducts;
    }

    const cached = cacheService.get('shopify_products');
    if (cached) return cached;

    const shop = process.env.SHOPIFY_STORE;
    const token = process.env.SHOPIFY_ACCESS_TOKEN;

    if (!shop || !token) {
      console.log('Shopify credentials missing, using demo data for products');
      return demoProducts;
    }

    const query = `
      query GetProducts($first: Int!) {
        products(first: $first) {
          edges {
            node {
              id
              title
              variants(first: 1) {
                edges { node { price } }
              }
              images(first: 1) {
                edges { node { url } }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch(`https://${shop}/admin/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': token,
        },
        body: JSON.stringify({ query, variables: { first: 50 } }),
      });

      if (!response.ok) {
        throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
      }

      const json = (await response.json()) as any;
      if (json.errors) throw new Error(JSON.stringify(json.errors));

      const normalized = json.data.products.edges.map((edge: any) => {
        const node = edge.node;
        const price = node.variants.edges[0]?.node?.price || '0';
        const image = node.images.edges[0]?.node?.url;
        const id = node.id.split('/').pop() || node.id;
        return { id, title: node.title, price: Number(price), image };
      });

      cacheService.set('shopify_products', normalized);
      return normalized;
    } catch (error) {
      console.log('Shopify API call failed, using demo data for products:', error);
      return demoProducts;
    }
  }

  async fetchOrders(testMode = false): Promise<any[]> {
    if (testMode) {
      console.log('[Shopify] Test Mode Active: Forcing demo orders');
      return this.normalizeDemo(demoOrders);
    }

    const cached = cacheService.get('shopify_orders');
    if (cached) return cached;

    const shop = process.env.SHOPIFY_STORE;
    const token = process.env.SHOPIFY_ACCESS_TOKEN;

    if (!shop || !token) {
      return this.normalizeDemo(demoOrders);
    }

    const query = `
      query GetOrders($first: Int!) {
        orders(first: $first, sortKey: CREATED_AT, reverse: true) {
          edges {
            node {
              id
              createdAt
              totalPriceSet { shopMoney { amount } }
              lineItems(first: 5) {
                edges { node { product { id title } quantity } }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch(`https://${shop}/admin/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': token },
        body: JSON.stringify({ query, variables: { first: 250 } }),
      });

      const json = (await response.json()) as any;
      if (json.errors) throw new Error(JSON.stringify(json.errors));

      const normalized = (json.data?.orders?.edges || []).map((edge: any) => {
        const node = edge.node;
        const amount = Number(node.totalPriceSet?.shopMoney?.amount || 0);
        return {
          id: node.id,
          createdAt: node.createdAt,
          total: amount,
          items: node.lineItems.edges.map((i: any) => ({
            productId: i.node.product?.id || 'unknown',
            title: i.node.product?.title || 'Unknown Product',
            quantity: i.node.quantity,
          })),
        };
      });

      cacheService.set('shopify_orders', normalized, 1000 * 60 * 15);
      return normalized;
    } catch (error) {
      return this.normalizeDemo(demoOrders);
    }
  }

  private normalizeDemo(orders: any[]): any[] {
    return orders.map(o => ({
      id: o.id,
      createdAt: o.createdAt,
      total: o.totalPrice,
      items: (o.lineItems || []).map((item: any) => ({
        productId: item.productId,
        title: item.title,
        quantity: item.quantity
      }))
    }));
  }
}

export const shopifyService = new ShopifyService();
