import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/dataBase.js";
import testRoute from './routes/testRoute.js'
import userRoute from './routes/userRoute.js'


const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())

connectDB()



app.use('/api/test', testRoute )
app.use('/api/user', userRoute )




const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `);
});
