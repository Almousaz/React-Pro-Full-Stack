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
import { register } from "./controllers/auth.js";
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import { verifyToken } from "./middleware/auth.js";
import { createPost } from "./controllers/posts.js";

import { users, posts } from "./data/index.js";
import User from "./models/User.js";
import Post from "./models/Post.js";


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


/* ROUTES WITH FILES */

app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);





/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);







const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);


    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);

});