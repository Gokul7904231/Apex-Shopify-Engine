import { Router } from 'express';
import { analyticsService } from '../services/analyticsService';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const testMode = req.headers['x-test-mode'] === 'true';
    const stats = await analyticsService.getDashboardStats(testMode);
    res.json({ success: true, data: stats });
  } catch (error: any) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch analytics data' });
  }
});

export default router;
