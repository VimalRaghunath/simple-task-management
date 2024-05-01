const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


const app = express()

mongoose.connect("mongodb://localhost:27017/simpletaskmanagement")
.then(() => {
  console.log("MongoDB Connected")
})
.catch(() => {
 console.log("Error")
})


const PORT = 1234;

app.listen(PORT, () => {
    console.log("server running")})




