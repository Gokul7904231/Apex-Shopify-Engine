import { Request, Response } from 'express';
import { analyticsService } from '../services/analyticsService';
import { getCache } from '../cache/cache-manager';

const cache = getCache();

export class AnalyticsController {
  getOverview = async (_req: Request, res: Response): Promise<void> => {
    try {
      const cached = await cache.get('analytics:overview');
      if (cached) {
        res.json({ success: true, ...cached });
        return;
      }

      const stats = await analyticsService.getOverviewStats();
      await cache.set('analytics:overview', stats, 120000);
      res.json({ success: true, ...stats });
    } catch (err) {
      console.error('Error in getOverview:', err);
      res.status(500).json({ success: false, error: 'Failed to generate overview' });
    }
  };

  getSalesTrend = async (req: Request, res: Response): Promise<void> => {
    try {
      const { window = '7', period = 'day' } = req.query;
      const cacheKey = `analytics:trend:${window}:${period}`;

      const cached = await cache.get(cacheKey);
      if (cached) {
        res.json({ success: true, ...cached });
        return;
      }

      const result = await analyticsService.getSalesTrend(
        Number(window),
        period as 'day' | 'week' | 'month',
      );
      await cache.set(cacheKey, result, 120000);
      res.json({ success: true, ...result });
    } catch (err) {
      console.error('Error in getSalesTrend:', err);
      res.status(500).json({ success: false, error: 'Failed to generate sales trend' });
    }
  };

  getTopProducts = async (_req: Request, res: Response): Promise<void> => {
    try {
      const cached = await cache.get('analytics:top-products');
      if (cached) {
        res.json({ success: true, ...cached });
        return;
      }

      const topProducts = await analyticsService.getTopProducts();
      await cache.set('analytics:top-products', { topProducts }, 120000);
      res.json({ success: true, topProducts });
    } catch (err) {
      console.error('Error in getTopProducts:', err);
      res.status(500).json({ success: false, error: 'Failed to get top products' });
    }
  };

  getRevenueByCategory = async (_req: Request, res: Response): Promise<void> => {
    try {
      const categories = await analyticsService.getRevenueByCategory();
      res.json({ success: true, categories });
    } catch (err) {
      console.error('Error in getRevenueByCategory:', err);
      res.status(500).json({ success: false, error: 'Failed to get category revenue' });
    }
  };

  getCacheStats = (_req: Request, res: Response): void => {
    try {
      res.json({ success: true, ...cache.getStats() });
    } catch (err) {
      console.error('Error in getCacheStats:', err);
      res.status(500).json({ success: false, error: 'Failed to get cache stats' });
    }
  };
}

export const analyticsController = new AnalyticsController();
