import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/dbConnect.js";
import colors from "colors";
import testRoute from './routes/testRoute.js'
import authRoute from './routes/authRoute.js'

const app = express();
dotenv.config();

connectDB();


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/test', testRoute )
app.use('/api/v1/auth' , authRoute)



const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `);
});
