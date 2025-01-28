import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";
import colors from "colors";
import cors from "cors";
import testRoute from './routes/testRoute.js'
import userRoutes from './routes/userRoutes.js'

const app = express();
dotenv.config();

connectDB();

app.use(cors({
    // origin: 'http://localhost:5173', // Your frontend URL
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/test', testRoute )
app.use('/api/user', userRoutes)


const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! `.bgBlue);
});
