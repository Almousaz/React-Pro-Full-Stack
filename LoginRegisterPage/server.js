const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./authRoutes');
const authenticateToken = require('./authMiddleware');


require("dotenv").config();
const PORT = process.env.PORT || 6161;



connectDB();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());


// Use the auth routes
app.use('/auth', authRoutes);

// Protected Routes
app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the Dashboard!', user: req.user });
});

app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Your profile info', user: req.user });
});

app.get('/about', authenticateToken, (req, res) => {
  res.json({ message: 'About our application', user: req.user });
});



app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
