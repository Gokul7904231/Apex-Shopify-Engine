import { Router } from 'express';
import { requireAuth, AuthenticatedRequest } from '../middleware/authMiddleware';
import { prisma } from '../data/db';

const router = Router();

// POST /api/users/sync 
// Verifies bearer token and upserts the Firebase User ID into local DB
router.post('/sync', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const userContext = req.user;
    
    if (!userContext) {
      console.error('[Sync Error] requireAuth passed but req.user is missing');
      return res.status(401).json({ success: false, error: 'User context lost' });
    }

    const { uid, email } = userContext;
    console.log(`[Sync] Syncing user: ${uid} (${email || 'no-email'})`);
    
    // Upsert the user into the Prisma DB
    const user = await prisma.user.upsert({
      where: { id: uid },
      update: { email: email || '' },
      create: { id: uid, email: email || '' },
    });
    
    res.json({ success: true, user });
  } catch (error: any) {
    console.error('[Sync Error] Database upsert failed:', error);
    res.status(500).json({ success: false, error: 'Failed to sync user with database' });
  }
});

export default router;
