import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./db/connectDB.js";
import cors from 'cors';
import aboutRoute from './routes/aboutRoute.js'
import contactRoute from './routes/contactRoute.js'
import productRoute from './routes/productRoute.js'


const app = express();
dotenv.config();

app.use(express.json())
app.use(cors())


connectDB();





app.use('/api/about', aboutRoute )
app.use('/api/contact', contactRoute )
app.use('/api/product', productRoute )





const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);
});

