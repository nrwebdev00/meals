import express from 'express'

import { loginUser, getUserProfile, createUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.route('/login').post(loginUser)
router.route('/register').post(createUser)
router.route('/profile').get(protect, getUserProfile);

export default router;