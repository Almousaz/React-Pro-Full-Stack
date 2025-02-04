import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/dbConnect.js";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import testRoute from './routes/testRoute.js'
import userRoutes from './routes/userRoute.js'


const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());



connectDB();



app.use("/api/test", testRoute);
app.use("/api/user", userRoutes);





const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `);
});

