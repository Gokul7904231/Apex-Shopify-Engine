import { Request, Response } from 'express';
import { recommendationService } from '../services/recommendationService';

export class RecommendationController {
  getRecommendations = async (req: Request, res: Response): Promise<void> => {
    try {
      const { productId } = req.params;
      const { limit = '5' } = req.query;

      const result = await recommendationService.getRecommendations(productId, Number(limit));
      if (!result) {
        res.status(404).json({ success: false, error: 'Product not found' });
        return;
      }

      res.json({ success: true, productId, recommendations: result.recommendations || [] });
    } catch (err) {
      console.error('Error in getRecommendations:', err);
      res.status(500).json({ success: false, error: 'Failed to get recommendations' });
    }
  };
}

export const recommendationController = new RecommendationController();
