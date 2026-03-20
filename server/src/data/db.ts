import { PrismaClient } from '@prisma/client';

let prismaInstance: PrismaClient;

try {
  prismaInstance = new PrismaClient();
} catch (error) {
  console.warn('[Prisma] Failed to initialize PrismaClient. Database features disabled.', error);
  prismaInstance = new Proxy({} as PrismaClient, {
    get: (_target, prop) => {
      if (prop === 'subscription' || prop === 'user') {
        return new Proxy({}, {
          get: () => async () => {
            console.warn(`[Prisma] Database not available. Skipping ${String(prop)} operation.`);
            return null;
          }
        });
      }
      return undefined;
    }
  });
}

export const prisma = prismaInstance;
