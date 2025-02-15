import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";
import cors from 'cors'
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from 'path'
import connectDB from "./db/connectDB.js";
import userRoutes from './routes/userRoutes.js'




dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(
    {
        origin: 'http://localhost:4500', // Your frontend URL
        credentials: true,
    }
));




//    dara base connect
connectDB();




app.use('/api' , userRoutes)





const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);


    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);

});