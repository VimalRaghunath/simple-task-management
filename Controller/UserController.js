const express = require("express")
const { joiUserValidationSchema } = require("../Model/validationSchema")
const { model } = require("mongoose")
const UserSchema = require("../Model/UserSchema")
const { json } = require("express");



module.exports = {

    createuser: async (req, res) => {
        const { value, error } = joiUserValidationSchema.validate(req.body)

        if(error){
            return res.json(error.message)
        }

        const { name, email, password } = value;

        const existinguser = await UserSchema.findOne({ email });

        if(existinguser){
            return res.status(400).json({
                status : "Error",
                message: "This Email Already Exists. choose another one"
            })
        }

        await UserSchema.create({
            name,
            email,
            password
        })
        res.status(200).json({
            status: "Success",
            message: "User Registration Done"
        })
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