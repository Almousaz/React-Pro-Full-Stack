import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";
import cors from 'cors'
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from 'path'
import { fileURLToPath } from "url";
import connectDB from "./db/dbConnect.js";

// middleware config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// set directrory where we keep our assets like img
app.use("/assets", express.static(path.join(__dirname, "public/assets"))); 


/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

//    dara base connect

connectDB();













const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);
});