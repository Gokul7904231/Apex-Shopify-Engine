import { Trie } from '../dsa/trie';
import { shopifyService } from './shopify.service';

const searchTrie = new Trie();
let isTrieInitialized = false;

export class SearchService {
  async initTrie() {
    if (isTrieInitialized) return;
    const products = await shopifyService.fetchProducts();
    for (const p of products) {
      searchTrie.insert(p.title, 5);
    }
    isTrieInitialized = true;
  }

  async search(query: string, limit: number = 10) {
    await this.initTrie();
    
    // Get suggestions from Trie
    const suggestions = searchTrie.autocomplete(query, limit);
    
    // Also get matching product objects for display
    const products = await shopifyService.fetchProducts();
    const matchingProducts = products.filter((p) => 
      p.title.toLowerCase().includes(query.toLowerCase())
    ).slice(0, limit);

    return { suggestions, products: matchingProducts };
  }
}

export const searchService = new SearchService();
