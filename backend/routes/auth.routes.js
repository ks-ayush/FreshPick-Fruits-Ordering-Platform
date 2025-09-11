import express from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { getMe } from '../controllers/auth.controller.js';
import verifyToken from '../middleware/verifyTokens.middleware.js';
import { loginUser } from "../controllers/auth.controller.js";
const router = express.Router();


router.post("/login", loginUser); 
router.post("/register", registerUser);
router.get('/me', verifyToken, getMe);

router.post('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: false, // set to true in production with HTTPS
        sameSite: 'lax', //None for cross-site cookies
        path: '/'
    });
    return res.json({ message: 'Logged out successfully' });
});

export default router;

