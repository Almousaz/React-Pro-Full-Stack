require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/database');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');




// Connect to MongoDB
connectDB();



//  Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);





const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
