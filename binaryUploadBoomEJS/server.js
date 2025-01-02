const express = require("express");
const app = express();

const connectDB = require("./config/database");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });



//Connect To Database
connectDB();







//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
  });