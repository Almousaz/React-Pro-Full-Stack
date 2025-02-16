import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./db/dbConnection.js";
import cors from "cors";
import bodyParser from "body-parser";
import imageRoute from "./routes/ImageRoutes.js";
import errorHandler from "./middleware/ErrorHandler.js";

const app = express();
dotenv.config();

connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use("/api", imageRoute);

// Use the error-handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgBlue.white);
});
