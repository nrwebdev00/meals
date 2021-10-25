import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import Users from '../models/userModel.js';

const protect = asyncHandler(async(req, res, next) =>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await Users.findById(decoded.id).select('-password');
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized');
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized');
    }
})

export { protect }