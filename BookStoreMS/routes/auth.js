import express from "express";
import { Admin } from "../models/Admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req, res) => {
  //   const { username, password, role } = req.body;
  //   if (role === "admin") {
  //     const admin = await Admin.findOne({ username });
  //     if (!admin) {
  //       return res.json({ message: "admin not registered ! " });
  //     }
  //     const validPassword = await bcrypt.compare(password, admin.password);
  //     if (!validPassword) {
  //       return res.json({ message: "wrong password !" });
  //     }
  //     const token = jwt.sign(
  //       { username: admin.username, role: "admin" },
  //       process.env.Admin_Key
  //     );

  //     res.cookie("token", token, { httpOnly: true, secure: true });
  //     return res.json({ login: true, role: "admin" });
  //   }

  try {
    const { username, password, role } = req.body;

    if (role !== "admin") {
      return res.status(400).json({ message: "Invalid role!" });
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(404).json({ message: "Admin not registered!" });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Wrong password!" });
    }

    const token = jwt.sign(
      { username: admin.username, role: "admin" },
      process.env.Admin_Key
    );

    res.cookie("token", token, { httpOnly: true, secure: true });

    return res.status(200).json({ login: true, role: "admin" });
  } catch (error) {
    console.error("Error in admin login:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
});

export { router as AdminRouter };
