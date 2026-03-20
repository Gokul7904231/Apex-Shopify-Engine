import { Router } from 'express';
import { searchService } from '../services/search.service';

const router = Router();

// GET /api/search?q=term
router.get('/', async (req, res) => {
  try {
    const query = req.query.q as string;
    if (!query) {
      return res.json({ success: true, data: [] });
    }

    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
    const results = await searchService.search(query, limit);
    res.json({ success: true, data: results });
  } catch (error: any) {
    console.error('Error in search:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
