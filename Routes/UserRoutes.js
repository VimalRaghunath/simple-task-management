const express = require("express")
const Usercontroller = require("../Controller/Usercontroller")
const Router = express.Router()



Router.post("/createaccount",Usercontroller.createuser)
Router.post("/login",Usercontroller.loginUser)