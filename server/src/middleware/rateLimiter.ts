import { Request, Response, NextFunction } from 'express';

// Mock rate limiter to avoid build failures without the express-rate-limit package
// Use `npm install express-rate-limit` to enable real rate limiting later

export const apiLimiter = (req: Request, res: Response, next: NextFunction) => {
  next();
};

export const authLimiter = (req: Request, res: Response, next: NextFunction) => {
  next();
};
