import express from 'express';
import { authenticateJwt } from '../middleware';
import controller from '../controller';

const router = express.Router();

router.get('/courses', authenticateJwt, controller.getCourses);
router.get('/course/:id', authenticateJwt, controller.getCourseById);

export default router;