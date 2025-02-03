import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/dbConnect.js";
import colors from "colors";
import testRoute from './routes/testRoute.js'
import userRoutes from './routes/userRoute.js'
const app = express();
dotenv.config();


app.use(express.json());




connectDB();



app.use('/api/test', testRoute )
app.use("/api", userRoutes);




const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `);
});
