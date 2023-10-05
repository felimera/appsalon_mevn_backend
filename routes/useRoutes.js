import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { getUserAppointmets } from '../controllers/userController.js';

const router = express.Router();

router.route('/:user/appointments')
    .get(authMiddleware, getUserAppointmets);

export default router;