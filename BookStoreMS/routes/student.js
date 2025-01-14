import express from "express";
import { Student } from "../models/Student.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { verifyAdmin } from "./auth.js";
const router = express.Router();

router.post("/register", verifyAdmin , async (req, res) => {
  try {
    const { username, password, roll, grade } = req.body;
    const student = await Student.findOne({ username });

    if (student) {
      return res.json({ message: "student is registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newstudent = new Student({
      username,
      password: hashPassword,
      roll: roll,
      grade,
    });
    await newstudent.save();
    return res.json({ registered: true });
  } catch (error) {
    return res.status(500).json({ message: "Error in registering student" });
  }
});

export { router as StudentRouter };
