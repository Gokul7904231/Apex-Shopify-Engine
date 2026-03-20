import { shopifyService } from './shopify.service';
import { cacheService } from './cache.service';

export class RecommendationService {
  async buildFrequencyMap() {
    try {
      const orders = await shopifyService.fetchOrders();
      const freqMap: Record<string, Record<string, number>> = {};

      for (const order of orders) {
        if (!order.items || order.items.length < 2) continue;

        const productIds = order.items.map((i: any) => String(i.productId));

        for (let i = 0; i < productIds.length; i++) {
          for (let j = i + 1; j < productIds.length; j++) {
            const p1 = productIds[i];
            const p2 = productIds[j];
            if (p1 === p2) continue;

            if (!freqMap[p1]) freqMap[p1] = {};
            if (!freqMap[p2]) freqMap[p2] = {};

            freqMap[p1][p2] = (freqMap[p1][p2] || 0) + 1;
            freqMap[p2][p1] = (freqMap[p2][p1] || 0) + 1;
          }
        }
      }
      return freqMap;
    } catch (error) {
      console.error('Error in buildFrequencyMap:', error);
      // Return empty frequency map instead of throwing
      return {};
    }
  }

  async getRecommendations(productId?: string, limit: number = 4) {
    try {
      let freqMap = cacheService.get('recommendation_freq_map');
      if (!freqMap) {
        freqMap = await this.buildFrequencyMap();
        cacheService.set('recommendation_freq_map', freqMap, 1000 * 60 * 60); // 1 hour
      }

      const allProducts = await shopifyService.fetchProducts();

      if (!productId) {
        // Return top generally popular items if no specific product
        return {
          recommendations: allProducts.slice(0, limit),
        };
      }

      const related = freqMap[String(productId)] || {};
      const sortedIds = Object.entries(related)
        .sort((a, b) => (b[1] as number) - (a[1] as number))
        .map((entry) => entry[0])
        .slice(0, limit);

      if (sortedIds.length === 0) {
        // Fallback
        return { recommendations: allProducts.slice(0, limit) };
      }

      const recommendations = allProducts.filter((p) => sortedIds.includes(String(p.id)));

      return { productId, recommendations };
    } catch (error) {
      console.error('Error in getRecommendations:', error);
      // Return empty recommendations instead of throwing
      return { productId, recommendations: [] };
    }
  }
}

export const recommendationService = new RecommendationService();
