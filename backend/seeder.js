import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import users from './data/user.js';
import meals from './data/meals.js';

import Users from './models/userModel.js';
import Meals from './models/mealModel.js';
import Order from './models/orderModel.js';

import connectDB from './config/db.js';


dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Meals.deleteMany()
        await Users.deleteMany()

        const createdUsers = await Users.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleMeals = meals.map((meal) => {
            return{ ...meal, user: adminUser}
        })

        await Meals.insertMany(sampleMeals)

        console.log('Data Imported!'.green.inverse)
        process.exit
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destoryData = async () => {
    try{
        await Order.deleteMany();
        await Meals.deleteMany();
        await Users.deleteMany();

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destoryData();
} else {
    importData();
}