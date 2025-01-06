const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Mongoose = require("mongoose");


require("dotenv").config({ Path: "./config/.env" });



const PORT = process.env.PORT || 6161;



connectDB();



//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));
