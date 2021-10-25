import asyncHandler from "express-async-handler";
import tokenGenerator from '../helpers/tokenGenerator.js';
import Users from '../models/userModel.js';

//@desc Login in User & generate token
//route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async(req, res) =>{
    const { email, password } = req.body

    const user = await Users.findOne({ email })

    if(user && (await user.matchPassword(password))){
        res.json({
            user_id: user._id,
            user_name: user.name,
            user_email: user.email,
            user_isAdmin: user.user_isAdmin,
            token: tokenGenerator(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

//@desc Get User data for porfile
//@route GET /api/users/profile
//@access Private - log in 
const getUserProfile = asyncHandler(async(req, res) => {
    const user = await Users.findById(req.user.id)
    if(user){
        res.json({
            user_id: user.id,
            user_name:user.name,
            user_email: user.email,
            user_isAdmin: user.isAdmin
        });
    } else {
        res.status(404)
        throw new Error('User Not Found')
    }
});

//@desc Create new user
//@route POST /api/users/register
//@access Public
const createUser = asyncHandler(async(req, res) =>{
    const { name, email, password } = req.body
    const userExists = await Users.findOne({ email })

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await Users.create({
        name, email, password
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: tokenGenerator(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User information')
    }
})

export { loginUser, getUserProfile, createUser }