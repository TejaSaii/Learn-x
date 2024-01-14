import express from 'express';
import controller from '../controller';
import { authenticateJwt } from '../middleware';

const router = express.Router();

router.post('/signup', controller.userSignUp);
router.post('/login', controller.userLogin);
router.get('/me', authenticateJwt, controller.getEmail);

export default router;
