import { Router } from 'express';
import { recommendationService } from '../services/recommendationService';

const router = Router();

// GET /api/recommendations?productId=123
router.get('/', async (req, res) => {
  try {
    const productId = req.query.productId as string;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 4;
    const results = await recommendationService.getRecommendations(productId, limit);
    res.json({ success: true, data: results.recommendations || [] });
  } catch (error: any) {
    console.error('Error in recommendations:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
