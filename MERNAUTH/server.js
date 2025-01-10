require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/database');




// Connect to MongoDB
connectDB();



//  Middleware
app.use(express.json());
app.use(cors());




const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
