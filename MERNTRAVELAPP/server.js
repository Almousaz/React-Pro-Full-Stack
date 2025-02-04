import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/dbConnect.js";
import colors from "colors";
import testRoute from "./routes/testRoute.js";
import userRoutes from "./routes/userRoute.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/uploads", express.static("uploads"));

// Set static folder
app.use(express.static("client/build"));

// index.html for all page routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

connectDB();

app.use("/api/test", testRoute);
app.use("/api", userRoutes);
app.use("api/product", productRoutes);

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `);
});
