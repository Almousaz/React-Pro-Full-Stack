import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./libs/database.js";
dotenv.config();


connectDB()



const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});