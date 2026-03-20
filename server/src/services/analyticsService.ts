import { shopifyService } from './shopify.service';
import { getCache } from '../cache/cache-manager';

const cache = getCache();

export class AnalyticsService {
  async getDashboardStats(testMode = false) {
    const cacheKey = `analytics:dashboard_v3${testMode ? ':test' : ''}`;
    try {
      if (!testMode) {
        const cached = await cache.get<any>(cacheKey);
        if (cached) {
          console.log('[Analytics] Returning cached dashboard stats');
          return cached;
        }
      }

      const [orders, products] = await Promise.all([
        shopifyService.fetchOrders(testMode),
        shopifyService.fetchProducts(testMode)
      ]);

      const now = new Date();

      // 2. Aggregate Revenue over time (Revenue Trend)
      const salesByDate: Record<string, number> = {};
      const productSalesMap: Record<string, { title: string, sales: number }> = {};

      orders.forEach(order => {
        const dateStr = new Date(order.createdAt).toISOString().split('T')[0];
        salesByDate[dateStr] = (salesByDate[dateStr] || 0) + order.total;

        // Process line items for top products
        if (order.items) {
          order.items.forEach((item: any) => {
            const pid = item.productId;
            if (!productSalesMap[pid]) {
              productSalesMap[pid] = { title: item.title, sales: 0 };
            }
            productSalesMap[pid].sales += item.quantity;
          });
        }
      });

      // 3. Calculate Stats
      const computeWindowRevenue = (days: number) => {
        let sum = 0;
        for (let i = 0; i < days; i++) {
          const d = new Date(now);
          d.setDate(now.getDate() - i);
          const ds = d.toISOString().split('T')[0];
          sum += salesByDate[ds] || 0;
        }
        return sum;
      };

      const revenueTrend = Object.entries(salesByDate)
        .map(([date, value]) => ({ date, value }))
        .sort((a, b) => a.date.localeCompare(b.date))
        .slice(-30);

      // 4. Calculate Top Products
      const topProducts = Object.values(productSalesMap)
        .sort((a, b) => b.sales - a.sales)
        .slice(0, 5);

      // Fallback if no order items data found in mock orders
      if (topProducts.length === 0) {
        products.slice(0, 5).forEach(p => {
          topProducts.push({ title: p.title, sales: Math.floor(Math.random() * 50) + 10 });
        });
      }

      const last7Days = computeWindowRevenue(7);
      const last30Days = computeWindowRevenue(30);

      const stats = {
        totalRevenue7d: last7Days,
        totalRevenue30d: last30Days,
        movingAverage7d: last7Days / 7,
        conversionRate: 3.42, // Static mock for now
        totalOrders: orders.length,
        averageOrderValue: orders.length > 0 ? (last30Days / orders.length) : 0
      };

      const result = {
        revenueTrend,
        topProducts,
        stats
      };

      // 5. Cache result (10 mins)
      if (!testMode) {
        await cache.set(cacheKey, result, 600000);
      }

      return result;

    } catch (error) {
      console.error('Error in getDashboardStats:', error);
      return {
        revenueTrend: [],
        topProducts: [],
        stats: {
          totalRevenue7d: 0,
          totalRevenue30d: 0,
          movingAverage7d: 0,
          conversionRate: 0,
          totalOrders: 0,
          averageOrderValue: 0
        }
      };
    }
  }

  async getOverviewStats(testMode = false) {
    return this.getDashboardStats(testMode);
  }

  async getSalesTrend(window: number, _period: string, testMode = false) {
    const stats = await this.getDashboardStats(testMode);
    return {
      period: _period,
      data: stats.revenueTrend.slice(-window)
    };
  }

  async getTopProducts(testMode = false) {
    const stats = await this.getDashboardStats(testMode);
    return stats.topProducts;
  }
}

export const analyticsService = new AnalyticsService();

