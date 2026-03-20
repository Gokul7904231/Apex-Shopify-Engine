import { Request, Response, NextFunction } from "express";
import { firebaseAdmin } from "../lib/firebaseAdmin";

declare global {
  namespace Express {
    interface Request {
      user?: {
        uid: string;
        email?: string | null;
      };
    }
  }
}

export interface AuthenticatedRequest extends Request {
  user?: {
    uid: string;
    email?: string | null;
  };
}

/**
 * Attaches the decoded Firebase user to the request if a token is present.
 * Does NOT block the request if authentication fails.
 */
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      req.user = undefined;
      return next();
    }

    const token = authHeader.split(" ")[1];

    const decoded = await firebaseAdmin.auth().verifyIdToken(token);

    req.user = {
      uid: decoded.uid,
      email: decoded.email || null,
    };

    next();
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.warn("⚠️ Auth warning (Ignored in dev):", (err as Error).message);
    }
    req.user = undefined;
    next();
  }
};

/**
 * Middleware that BLOCKS request with 401 if user is not authenticated.
 */
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      error: "Authentication required. Please sign in again."
    });
  }
  next();
};
