require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/database');
const AuthRoutes = require('./routes/Auth');
const cookieParser = require('cookie-parser')






// connect to database
connectDB();


//  Middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors());


//  Route
app.use('/api/auth' , AuthRoutes)


const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});