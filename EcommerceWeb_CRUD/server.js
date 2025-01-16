import express from "express";
import dotenv from "dotenv";
import connectDB from "./libs/database.js";
import AuthRoutes from "./routes/Auth.js";
import ProductRoutes from "./routes/Product.js";
import cors from 'cors'
const app = express();
dotenv.config();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/auth", AuthRoutes);
app.use('/product' , ProductRoutes)


const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
