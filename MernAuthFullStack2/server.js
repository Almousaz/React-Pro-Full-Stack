import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/database.js";
import testRoute from "./routes/testRoute.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
const __dirname = path.resolve();

app.use("/api/test", testRoute);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
// middleware for error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `);
});
