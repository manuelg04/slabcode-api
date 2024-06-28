import express from 'express';
import { AuthController } from '../controllers/authController';
import { AuthService } from '../services/AuthService';
import { UserRepository } from '../repositories/UserRepository';

const router = express.Router();
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

router.post('/login', authController.login);

export default router;