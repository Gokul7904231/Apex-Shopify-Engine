// Express Server Entry Point — load configured env FIRST
import './config/env'; // This validates environment variables immediately
import { env } from './config/env';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

import productRoutes from './routes/products';
import analyticsRoutes from './routes/analytics';
import recommendationRoutes from './routes/recommendations';
import authRoutes from './routes/auth';
import webhookRoutes from './routes/webhooks';
import usersRouter from './routes/users';
import searchRoutes from './routes/search';
import { stripeRouter, webhookRouter as stripeWebhookRouter } from './routes/stripe';
import { errorHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/requestLogger';
import { apiLimiter } from './middleware/rateLimiter';
import { authMiddleware } from './middleware/authMiddleware';

const app = express();
const PORT = env.PORT;

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Set to false if you're serving a React SPA or using external scripts (config as needed)
  crossOriginEmbedderPolicy: false
}));

// CORS Configuration
// CORS Configuration
const allowedOrigins = [
  'http://localhost:5173', // Vite local
  env.FRONTEND_URL, // Deployed frontend on Render
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin) || env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Global Rate Limiting
app.use('/api/', apiLimiter);

// Logging
if (env.NODE_ENV === 'development') {
  app.use(requestLogger);
}

// Webhooks with raw payload must be placed before express.json()
app.use('/api/webhooks', stripeWebhookRouter);

app.use(express.json());

// Global Auth Context (Extracts tokens if present)
app.use(authMiddleware);

// API Routes
app.use('/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/users', usersRouter);
app.use('/api/search', searchRoutes);
app.use('/api/stripe', stripeRouter);
app.use('/webhooks', webhookRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ 
    status: 'ok', 
    env: env.NODE_ENV, 
    timestamp: new Date().toISOString() 
  });
});

// Production API Fallback (Ensure no HTML is returned)
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.originalUrl} not found. This is an API-only server.`
  });
});

// Error handling middleware should be last
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`🚀 API SERVER RUNNING - MODE: ${env.NODE_ENV.toUpperCase()}`);
  console.log(`   Internal Port: ${PORT}`);
  console.log(`   Health Check:  /api/health`);
  console.log('='.repeat(50) + '\n');
});

export default app;
