import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import * as admin from 'firebase-admin';
import { getCache } from '../cache/cache-manager';

const router = Router();

// Initialize Prisma client
const prisma = new PrismaClient();

// GET /api/health
router.get('/health', async (_req, res) => {
  const healthCheck = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      database: { status: 'unknown' },
      firebase: { status: 'unknown' },
    },
  };

  // Check database connection
  try {
    await prisma.$queryRaw`SELECT 1`;
    healthCheck.services.database.status = 'connected';
  } catch (error) {
    console.error('Database health check failed:', error);
    healthCheck.services.database.status = 'disconnected';
    healthCheck.status = 'degraded';
  }

  // Check Firebase initialization
  try {
    // Try to access Firebase admin app
    admin.app();
    healthCheck.services.firebase.status = 'initialized';
  } catch (error) {
    // App not initialized
    healthCheck.services.firebase.status = 'not_initialized';
    healthCheck.status = 'degraded';
  }

  res.json(healthCheck);
});

// GET /api/debug/env
router.get('/debug/env', (_req, res) => {
  const safeEnv = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    // Add any other non-sensitive env vars you want to expose
    // Avoid exposing keys, tokens, passwords, etc.
  };
  res.json({ success: true, data: safeEnv });
});

// GET /api/debug/cache
router.get('/debug/cache', async (_req, res) => {
  try {
    const cache = getCache();
    // Assuming your cache has a method to get stats
    // If not, you may need to implement one in your cache manager
    const stats = cache.getStats
      ? cache.getStats()
      : { size: 'unknown', hits: 'unknown', misses: 'unknown' };
    res.json({ success: true, data: stats });
  } catch (error) {
    console.error('Error fetching cache stats:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch cache stats' });
  }
});

export default router;
