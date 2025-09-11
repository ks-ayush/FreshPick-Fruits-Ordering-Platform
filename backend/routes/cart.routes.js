import express from 'express';
import { addToCart, viewCart, removeFromCart } from '../controllers/cart.controller.js';
import verifyToken from '../middleware/verifyTokens.middleware.js';

const router = express.Router();

router.post('/add', verifyToken, addToCart);
router.get('/view', verifyToken, viewCart);
router.post('/remove', verifyToken, removeFromCart);

export default router;
