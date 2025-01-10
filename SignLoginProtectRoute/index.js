require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/database');
const authRouter = require('./routes/authRoutes');




// connect to database
connectDB();




//  Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRouter);




const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});