import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./db/dbConnect.js";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/userRoute.js";



const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());

connectDB();





app.use("/api", route);




const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);
});
