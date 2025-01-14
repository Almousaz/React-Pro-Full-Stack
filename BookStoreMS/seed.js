import express from "express";
import bcrypt from "bcrypt";
import { Admin } from "./models/Admin.js"
import "./config/database.js";


async function AdminAcount() {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const hashPassword = await bcrypt.hash("adminpassword", 10);
      const newAdmin = new Admin({
        username: "admin",
        password: hashPassword,
      });
      await newAdmin.save();
      console.log("acount created");
    } else {
      console.log("acount already existed ! ");
    }
  } catch (error) {
    console.log("error");
  }
}



AdminAcount()