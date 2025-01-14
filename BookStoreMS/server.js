import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./config/database.js/";
import { AdminRouter } from "./routes/auth.js";
import { StudentRouter } from "./routes/student.js";
import { bookRouter } from "./routes/book.js";
import { Book } from "./models/Book.js";
import { Admin } from "./models/Admin.js";
import { Student } from "./models/Student.js";

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5186' 
  })
);
app.use(cookieParser());

app.use("/auth", AdminRouter);
app.use('/student', StudentRouter)
app.use('/book', bookRouter)
app.get('/dashboard', async (req , res ) => {
   
  try {
    const student = await Student.countDocuments()
    const admin = await Admin.countDocuments()
    const book = await Book.countDocuments()
    return res.json({ok : true , student , book , admin })
  } catch(err) {
    return res.json(err)
  }

})

// connect to database
// connectDB();

app.listen(process.env.PORT || 6060, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
