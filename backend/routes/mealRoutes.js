import express from 'express';
import { getMealById, getMeals } from '../controllers/mealController.js';

const router = express.Router()

router.route('/').get(getMeals);
router.route('/:id').get(getMealById);

export default router;