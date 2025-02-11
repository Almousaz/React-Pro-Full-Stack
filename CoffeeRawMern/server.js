import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./db/dbConnect.js";
import testRoute from './routes/testRoute.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors';
import { notFound , errorHandler } from "./middleware/errorMiddleware.js";
import productRoute from './routes/productRoute.js'
import adminRoute from './routes/adminRoute.js'

const app = express();
dotenv.config();

app.use(express.json({limit:"30mb",extended:true}));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

connectDB();

app.use(notFound)
app.use(errorHandler)



app.use('/api/v1/test', testRoute )
app.use('/api/v1/user' , userRoute )
app.use('api/v1/product', productRoute);
app.use('api/v1/admin', adminRoute);





const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);
});