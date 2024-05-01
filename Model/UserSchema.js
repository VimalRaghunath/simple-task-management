const mongoose = require("mongoose")
const { number } = require("@hapi/joi")


const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

module.exports = mongoose.model("userr", userSchema)