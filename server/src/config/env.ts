import * as dotenv from 'dotenv';
import path from 'path';

// Force reload .env
const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });

export interface Env {
  PORT: number;
  NODE_ENV: 'development' | 'production' | 'test';
  SHOPIFY_STORE: string;
  SHOPIFY_ACCESS_TOKEN: string;
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  FIREBASE_PROJECT_ID: string;
  DATABASE_URL: string;
  FRONTEND_URL: string;
  FIREBASE_CLIENT_EMAIL: string;
  FIREBASE_PRIVATE_KEY: string;
}

function validateEnv(): Env {
  const required = [
    'SHOPIFY_STORE',
    'SHOPIFY_ACCESS_TOKEN',
    'STRIPE_SECRET_KEY',
    'FIREBASE_PROJECT_ID',
    'DATABASE_URL',
    'FRONTEND_URL',
    'FIREBASE_CLIENT_EMAIL',
    'FIREBASE_PRIVATE_KEY'
  ];

  const missing = required.filter(key => !process.env[key]);
  if (missing.length > 0) {
    console.error(`❌ Missing required environment variables: ${missing.join(', ')}`);
    process.exit(1);
  }

  return {
    PORT: parseInt(process.env.PORT || '5000', 10),
    NODE_ENV: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
    SHOPIFY_STORE: process.env.SHOPIFY_STORE!,
    SHOPIFY_ACCESS_TOKEN: process.env.SHOPIFY_ACCESS_TOKEN!,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || '',
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID!,
    DATABASE_URL: process.env.DATABASE_URL!,
    FRONTEND_URL: process.env.FRONTEND_URL!,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL!,
    FIREBASE_PRIVATE_KEY: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n')
  };
}

export const env = validateEnv();
