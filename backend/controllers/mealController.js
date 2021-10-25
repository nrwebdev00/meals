import asyncHandler from "express-async-handler";
import Meals from '../models/mealModel.js';



//@desc Get all Meals
//@route GET /api/meal
//@access Public
const getMeals = asyncHandler(async (req,res) => {
    const meals = await Meals.find({})
    res.json(meals)
})


//@desc Get single Meals
//@route GET /api/meal/:id
//@access Public
const getMealById = asyncHandler(async(req,res) => {
    const meal = await Meals.findById(req.params.id)

    if(meal){
        res.json(meal)
    } else {
        res.status(404)
        throw new Error('Meal was not found')
    }
})

export { getMeals, getMealById }