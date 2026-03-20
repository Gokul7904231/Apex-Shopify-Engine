import { Router } from 'express';
import { productController } from '../controllers/productController';

const router = Router();

// Static routes FIRST (must be before :id to prevent shadowing)
router.get('/types', (req, res, next) => {
    console.log("🔥 TYPES ROUTE HIT");
    next();
}, productController.getTypes);

router.get('/vendors', (req, res, next) => {
    console.log("🔥 VENDORS ROUTE HIT");
    next();
}, productController.getVendors);

router.get('/search', productController.searchProducts);

// Base route
router.get('/', productController.listProducts);

// Dynamic ID route LAST (prevents matching "search", "types", etc as an ID)
router.get('/:id', (req, res, next) => {
    console.log("🔥 PRODUCT BY ID HIT:", req.params.id);
    next();
}, productController.getProduct);

export default router;
