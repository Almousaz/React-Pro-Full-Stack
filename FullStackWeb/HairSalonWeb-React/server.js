const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require("./config/connectDB");
const bookRoutes = require("./routes/bookingRoutes");
const cors = require('cors');


require('dotenv').config({path: './config/.env'});
const PORT = process.env.PORT || 5599;



// connect to MongoDB
connectDB();


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());






// Routes
app.use('/api/booking', bookRoutes);







// Start the server

// app.listen( process.env.PORT || 5599 , () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });
app.listen(PORT, ()=>{
    console.log('Server is running, you better catch it!')
})   