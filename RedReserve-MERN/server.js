import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/dbConnect.js";

const app = express();
dotenv.config();

connectDB();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `);
});
