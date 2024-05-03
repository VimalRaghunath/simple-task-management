const express = require("express")
const { joiUserValidationSchema } = require("../Model/validationSchema")
const { model } = require("mongoose")
const UserSchema = require("../Model/UserSchema")
const { json } = require("express");
const generateToken = require("../Middleware/userAuth");



module.exports = {

    createuser: async (req, res) => {
        const { value, error } = joiUserValidationSchema.validate(req.body)

        if(error){
            return res.json(error.message)
        }

        const { name, email, password } = value;

        const existinguser = await UserSchema.findOne({ email });

        if(existinguser){
            res.status(400);
            throw new Error("User Already Exists")
        }

        const user = await UserSchema.create({
            name,
            email,
            password
        })
        if(user) { 
            res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
     } else {
        res.status(400)
        throw new Error("Failed to create the user")
     }
    },

    loginUser: async (req, res) => {

        const { value, error } = joiUserValidationSchema.validate(req.body)

        if(error){
            return res.status(error.message)
        }

        const { email, password } = value;

        const USER = await UserSchema.findOne({ email, password })
    }
}