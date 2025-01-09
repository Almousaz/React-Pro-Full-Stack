const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("./middleware/auth.js");

require("dotenv").config({ Path: "./config/.env" });

const PORT = process.env.PORT || 6161;

connectDB();

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api/auth", require("./Auth/route"));
app.use("/api/auth/admin", adminAuth);
app.use("/api/auth/user", userAuth);

const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
