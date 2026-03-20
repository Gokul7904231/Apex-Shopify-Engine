import { Request, Response } from 'express';
import { productService } from '../services/productService';
import { getCache } from '../cache/cache-manager';

const cache = getCache();

export class ProductController {
  listProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log("🔥 NEW PRODUCT CONTROLLER HIT");
      const testMode = req.headers['x-test-mode'] === 'true';
      const cacheKey = `products:${testMode ? 'test:' : ''}${JSON.stringify(req.query)}`;

      // Use cache only if not in test mode
      if (!testMode) {
        const cachedData = await cache.get(cacheKey);
        if (cachedData) {
          res.json({
            success: true,
            data: cachedData,
            meta: {
              count: (cachedData as any[]).length,
              cached: true
            }
          });
          return;
        }
      }

      const { sort = 'title_asc', type, vendor, minPrice, maxPrice } = req.query;
      const whereClause: any = {};
      if (type) whereClause.productType = type;
      if (vendor) whereClause.vendor = vendor;
      if (minPrice || maxPrice) {
        whereClause.price = {};
        if (minPrice) whereClause.price.gte = Number(minPrice);
        if (maxPrice) whereClause.price.lte = Number(maxPrice);
      }

      const products = await productService.getProducts(whereClause, sort as string, testMode);

      if (!testMode) {
        await cache.set(cacheKey, products, 60000);
      }

      res.json({
        success: true,
        data: products,
        meta: {
          count: products.length,
          cached: false
        }
      });
    } catch (err) {
      console.error('Error in listProducts:', err);
      res.status(500).json({ success: false, error: 'Failed to fetch products' });
    }
  };

  searchProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      const testMode = req.headers['x-test-mode'] === 'true';
      const { q = '', limit = '10' } = req.query;
      const query = String(q).trim();
      
      if (!query) {
        res.json({ success: true, data: [], meta: { count: 0, query } });
        return;
      }

      const result = await productService.searchProducts(query, Number(limit), testMode);
      
      res.json({
        success: true,
        data: result.products || [],
        meta: {
          count: (result.products || []).length,
          suggestions: result.suggestions || [],
          query
        }
      });
    } catch (err) {
      console.error('Error in searchProducts:', err);
      res.status(500).json({ success: false, error: 'Search failed' });
    }
  };

  getProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const testMode = req.headers['x-test-mode'] === 'true';
      console.log(`🔥 PRODUCT BY ID HIT: ${req.params.id} (Test: ${testMode})`);
      const product = await productService.getProductById(req.params.id, testMode);
      if (!product) {
        res.status(404).json({ success: false, error: 'Product not found' });
        return;
      }
      res.json({ success: true, data: product });
    } catch (err) {
      console.error('Error in getProduct:', err);
      res.status(500).json({ success: false, error: 'Failed to fetch product' });
    }
  };

  getTypes = async (_req: Request, res: Response): Promise<void> => {
    try {
      console.log("🔥 TYPES HIT");
      const types = await productService.getTypes();
      res.json({
        success: true,
        data: types,
        meta: { count: types.length }
      });
    } catch (err) {
      console.error('Error in getTypes:', err);
      res.status(500).json({ success: false, error: 'Failed to fetch product types' });
    }
  };

  getVendors = async (_req: Request, res: Response): Promise<void> => {
    try {
      console.log("🔥 VENDORS HIT");
      const vendors = await productService.getVendors();
      res.json({
        success: true,
        data: vendors,
        meta: { count: vendors.length }
      });
    } catch (err) {
      console.error('Error in getVendors:', err);
      res.status(500).json({ success: false, error: 'Failed to fetch vendors' });
    }
  };
}

export const productController = new ProductController();

