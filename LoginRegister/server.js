const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("./middleware/auth.js");


require("dotenv").config({ Path: "./config/.env" });



const PORT = process.env.PORT || 6161;



connectDB();



//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());




//Routes
app.use("/api/auth", require("./Auth/route"));

app.get("/", (req, res) => res.render("http://localhost:5177/"));
app.get("/register", (req, res) => res.render("register"));
app.get("/login", (req, res) => res.render("login"));
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});
app.get("/admin", adminAuth, (req, res) => res.render("admin"));
app.get("/basic", userAuth, (req, res) => res.render("user"));








const server = app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`));

process.on("unhandledRejection", (err) => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
  });