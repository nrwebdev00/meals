import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import mealRoutes from './routes/mealRoutes.js';

dotenv.config();

connectDB();

const app = express();


app.get('/', (req, res ) =>{
    res.send('API is Running.... Did you Catch the API.... hmmmmmm......');
});

app.use('/api/meals', mealRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT} try it catch it, it is running in ${process.env.NODE_ENV} mode.`.yellow.bold))