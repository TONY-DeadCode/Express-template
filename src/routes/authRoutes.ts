import { Router } from 'express';
import { registerController, loginController } from '../controllers/authController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Public routes
router.post('/register', registerController);
router.post('/login', loginController);

// Protected route example
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: (req as any).user });
});

export default router;
