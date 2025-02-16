import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./db/dbConnection.js";





const app = express();
dotenv.config();

connectDB();










const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgBlue
    .white);
});

