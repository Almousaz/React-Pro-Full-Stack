import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./db/dbConnect.js";
import testRoute from './routes/testRoute.js'


const app = express();
dotenv.config();

connectDB();

app.use('/api/v1/test', testRoute )








const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);
});