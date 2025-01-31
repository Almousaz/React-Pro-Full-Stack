import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/database.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `);
});
