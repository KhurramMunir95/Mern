import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";

// @desc Register user
// route /api/users/register
// @access Public
const register = asyncHandler(async(req, res) => {
    res.status(200).json( { User: 'Register' } )
})

// @desc Login user
// route /api/users/login
// @access Public
const login = asyncHandler(async(req, res) => {
    res.status(200).json( { User: 'Login' } )
})

// @desc Logout user
// route /api/users/login
// @access Private
const logout = asyncHandler(async(req, res) => {
    res.status(200).json( { User: 'Logout' } )
})

// @desc Get user profile
// route /api/users/profile
// @access Private
const getUser = asyncHandler(async(req, res) => {
    res.status(200).json( { User: 'This is the user.' } )
})

// @desc Update user
// route /api/users/profile
// @access Private
const update = asyncHandler(async(req, res) => {
    res.status(200).json( { User: 'Update' } )
})

export {
    register,
    login,
    getUser,
    update,
    logout,
}