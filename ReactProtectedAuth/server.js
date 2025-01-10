const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connectDB = require("./db");
const cors = require("cors");
const dotenv = require("dotenv");
const User = require("./User");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5588;

app.use(express.json());
app.use(cors());

connectDB();

// Register route

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  User.create({ username, password: hashedPassword });
  res.status(201).send("User registered!");
});

// Login route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).send("Invalid credentials");
      }
  
      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Invalid credentials");
      }
  
      // Generate a JWT token
      const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      // Send the token back to the client
      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });
  

// Protected route
app.get("/dashboard", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).send("Access denied");
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.send(`Welcome to the dashboard, ${verified.username}`);
  } catch (err) {
    res.status(400).send("Invalid token");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
