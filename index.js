const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Router = require("./Routes/UserRoutes")
require("dotenv").config()


const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/simple-task-management")
.then(() => {
  console.log("MongoDB Connected")
})
.catch(() => {
 console.log("Error")
})

app.use("/api",Router)


const PORT = 1234;

app.listen(PORT, () => {
    console.log("server running")})




