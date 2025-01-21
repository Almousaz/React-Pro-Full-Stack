import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./dataBase/dbConnection.js";

const app = express();
dotenv.config();



dbConnection();


app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
