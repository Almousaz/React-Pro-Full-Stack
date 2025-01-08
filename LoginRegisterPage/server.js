const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./authRoutes');


require("dotenv").config();
const PORT = process.env.PORT || 6161;



connectDB();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());


// Use the auth routes
app.use('/auth', authRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
