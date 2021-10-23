import express from 'express';
import asyncHandler from 'express-async-handler';

import Meals from '../models/mealModel.js';

const router = express.Router()

//@desc Fetch all Meals
//@route GET /api/meals
//@access Public
router.get(
    '/',
    asyncHandler(async(req, res) =>{
        const meals = await Meals.find({})
        res.json(meals)
    })
)

//@desc Fetch Single Meal
//@route GET /api/meals/:id
//@access Public
router.get(
    '/:id',
    asyncHandler(async(req, res) =>{
        const meal = await Meals.findById(req.params.id)
        if(meal){
            res.json(meal)
        }else{
            res.status(404).json({ message: 'Meal is not found'})
        }
    })
)

export default router;