import { shopifyService } from './shopify.service';
import { mergeSort, ProductComparators, SortableProduct } from '../dsa/sorting';
import { Trie, AutocompleteResult } from '../dsa/trie';

const searchTrie = new Trie();

export class ProductService {
  private productsCache: any[] = [];

  async getProducts(whereClause: any, sortStr: string, testMode = false) {
    try {
      let baseProducts;
      if (testMode) {
        // Always fresh for test mode to ensure new demo products show up
        baseProducts = await shopifyService.fetchProducts(true);
      } else {
        if (this.productsCache.length === 0) {
          this.productsCache = await shopifyService.fetchProducts(false);
          for (const p of this.productsCache) {
            searchTrie.insert(p.title, 5);
          }
        }
        baseProducts = this.productsCache;
      }

      // Convert to SortableProduct representation
      const sortable: SortableProduct[] = baseProducts.map((p: any) => ({
        ...p,
        inventory: p.inventoryQuantity || 10,
        createdAt: new Date().toISOString(),
      }));

      const comparatorMap: Record<string, (a: SortableProduct, b: SortableProduct) => number> = {
        price_asc: ProductComparators.byPriceAsc,
        price_desc: ProductComparators.byPriceDesc,
        title_asc: ProductComparators.byTitleAsc,
        title_desc: ProductComparators.byTitleDesc,
        newest: ProductComparators.byNewest,
      };
      const comparator = comparatorMap[sortStr] || ProductComparators.byTitleAsc;
      return mergeSort(sortable, comparator);
    } catch (error) {
      console.error('Error in getProducts:', error);
      // Return empty array to prevent server crash
      return [];
    }
  }

  async searchProducts(query: string, limit: number, testMode = false) {
    try {
      let sourceProducts;
      if (testMode) {
        sourceProducts = await shopifyService.fetchProducts(true);
      } else {
        if (this.productsCache.length === 0) await this.getProducts({}, 'title_asc', false);
        sourceProducts = this.productsCache;
      }

      const suggestions = searchTrie.autocomplete(query, limit);
      const matchingProducts = sourceProducts.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
      );
      return { suggestions, products: matchingProducts };
    } catch (error) {
      console.error('Error in searchProducts:', error);
      return { suggestions: [], products: [] };
    }
  }

  async getProductById(id: string, testMode = false) {
    let sourceProducts;
    if (testMode) {
      sourceProducts = await shopifyService.fetchProducts(true);
    } else {
      if (this.productsCache.length === 0) await this.getProducts({}, 'title_asc', false);
      sourceProducts = this.productsCache;
    }
    return sourceProducts.find((p) => String(p.id) === String(id));
  }

  async getTypes() {
    return ['Apparel', 'Electronics', 'Accessories']; // Stubbed for now
  }

  async getVendors() {
    return ['Shopify', 'DemoVendor']; // Stubbed for now
  }
}

export const productService = new ProductService();
