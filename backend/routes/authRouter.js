import { Router } from 'express';
import { register, login, logout, getMe } from '../controllers/authController.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get('/me', isAuthenticated, getMe);

export default authRouter;
