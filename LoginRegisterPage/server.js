const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./authRoutes");
const authenticateToken = require("./authMiddleware");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

require("dotenv").config();
const PORT = process.env.PORT || 6161;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

// Use the auth routes
app.use("/auth", authRoutes);

// Assuming you're using JWT and Express
app.get("/auth/user", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from the header
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });

    // Assuming you have user information stored in the decoded token
    const user = { username: decoded.username }; // Replace with your actual user data retrieval
    res.json(user);
  });
});

// Protected Routes
app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to the Dashboard!", user: req.user });
});

app.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: "Your profile info", user: req.user });
});

app.get("/about", authenticateToken, (req, res) => {
  res.json({ message: "About our application", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
