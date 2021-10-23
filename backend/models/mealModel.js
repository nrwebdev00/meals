import mongoose from 'mongoose';
import Users from './userModel.js';

const reviewSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },
        rating:{
            type: Number,
            required: true,
        },
        comment:{
            type: String,
            require: true
        },
    },
    {
        timestamps: true
    }
)

const mealSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: Users
        },
        meal_name:{
            type: String,
            required: true
        },
        meal_image:{
            type: String,
            required: true
        },
        meal_period:{
            type: String,
            required: true
        },
        meal_category:{
            type: String,
            required: true
        },
        meal_description:{
            type: String,
            required: true
        },
        meal_price:{
            type: Number,
            required: true,
            default: 0,
        },
        meal_count:{
            type: Number,
            required: true,
            default: 0,
        },
        reviews: [reviewSchema],
        rating:{
            type: Number,
            required: true,
            default: 0,
        },
        numReviews:{
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true
    }
)

const Meals = mongoose.model('Meals', mealSchema);
export default Meals;