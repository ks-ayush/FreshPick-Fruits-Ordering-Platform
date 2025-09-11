
import express from 'express';
import { getMySpace } from '../controllers/myspace.controller.js';
import  verifyToken  from '../middleware/verifyTokens.middleware.js';

const router = express.Router();

router.get('/', verifyToken, getMySpace);

export default router;
