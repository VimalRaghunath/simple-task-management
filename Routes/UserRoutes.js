const express = require("express")
const Usercontroller = require("../Controller/Usercontroller")
const Router = express.Router()
const tryCatch = require("../Middleware/TryCatch")
const Auth = require("../Middleware/userAuth")



Router.post("/createaccount",tryCatch(Usercontroller.createuser))
Router.post("/login",tryCatch(Usercontroller.loginUser))



module.exports = Router