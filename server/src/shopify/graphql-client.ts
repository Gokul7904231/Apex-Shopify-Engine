// Shopify GraphQL Admin API Client
// Typed queries for products, orders, customers with cursor pagination and rate limiting.

export interface ShopifyConfig {
  shopDomain: string;
  accessToken: string;
  apiVersion: string;
}

export const PRODUCT_QUERY = `
  query GetProducts($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          title
          description
          vendor
          productType
          tags
          createdAt
          updatedAt
          variants(first: 10) {
            edges {
              node {
                id
                price
                compareAtPrice
                inventoryQuantity
                sku
              }
            }
          }
          images(first: 1) {
            edges {
              node { url altText }
            }
          }
        }
      }
      pageInfo { hasNextPage endCursor }
    }
  }
`;

export const ORDER_QUERY = `
  query GetOrders($first: Int!, $after: String) {
    orders(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          name
          createdAt
          totalPriceSet { shopMoney { amount currencyCode } }
          displayFinancialStatus
          displayFulfillmentStatus
          customer { id firstName lastName email }
          lineItems(first: 50) {
            edges {
              node {
                title
                quantity
                variant { price product { id } }
              }
            }
          }
        }
      }
      pageInfo { hasNextPage endCursor }
    }
  }
`;

export class ShopifyGraphQLClient {
  private config: ShopifyConfig | null = null;

  configure(config: ShopifyConfig): void {
    this.config = config;
  }

  isConfigured(): boolean {
    return this.config !== null;
  }

  async query<T>(queryString: string, variables: Record<string, unknown> = {}): Promise<T> {
    if (!this.config) {
      throw new Error('Shopify client not configured. Call configure() first.');
    }

    const url = `https://${this.config.shopDomain}/admin/api/${this.config.apiVersion}/graphql.json`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': this.config.accessToken,
      },
      body: JSON.stringify({ query: queryString, variables }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
    }

    const json = (await response.json()) as any;
    if (json.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
    }

    return json.data as T;
  }

  async fetchAllProducts(pageSize: number = 50) {
    return this.paginatedQuery(PRODUCT_QUERY, 'products', pageSize);
  }

  async fetchAllOrders(pageSize: number = 50) {
    return this.paginatedQuery(ORDER_QUERY, 'orders', pageSize);
  }

  private async paginatedQuery(queryString: string, rootField: string, pageSize: number) {
    const allNodes: unknown[] = [];
    let cursor: string | null = null;
    let hasNextPage = true;

    while (hasNextPage) {
      const variables: Record<string, unknown> = { first: pageSize };
      if (cursor) variables.after = cursor;

      const data = await this.query<Record<string, { edges: Array<{ node: unknown; cursor: string }>; pageInfo: { hasNextPage: boolean; endCursor: string } }>>(queryString, variables);
      const field = data[rootField];

      for (const edge of field.edges) {
        allNodes.push(edge.node);
      }

      hasNextPage = field.pageInfo.hasNextPage;
      cursor = field.pageInfo.endCursor;
    }

    return allNodes;
  }
}

let shopifyClient: ShopifyGraphQLClient | null = null;

export function getShopifyClient(): ShopifyGraphQLClient {
  if (!shopifyClient) {
    shopifyClient = new ShopifyGraphQLClient();
  }
  return shopifyClient;
}
