import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";
import colors from "colors";
import cors from "cors";
import testRoute from "./routes/testRoute.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import fileUpload from "express-fileupload";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

connectDB();

app.use(cookieParser());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(
  cors({
    origin: ["http://localhost:5174"],
    allowedHeaders: ["Content-Type", "Accept", "Authorization", "Origin"],
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.use(upload())
// app.use('/uploads', express.static(__dirname + '/uploads'))
// app.use(upload());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/test", testRoute);
app.use("/api/user", userRoutes);
app.use("/api/posts", postRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! `.bgBlue);
});
