import express from 'express';
import { createOrder, getUserOrders } from '../controllers/order.controller.js';
import verifyToken from '../middleware/verifyTokens.middleware.js';

const router = express.Router();

router.post('/create', verifyToken, createOrder);
router.get('/myorders', verifyToken, getUserOrders);

export default router;
