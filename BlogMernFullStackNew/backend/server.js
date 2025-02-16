import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";
import cors from 'cors'
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from 'path'
import connectDB from "./db/connectDB.js";
import userRoutes from './routes/userRoutes.js'
import cookieParser from "cookie-parser";
const uploadMiddleware = multer({ dest: 'uploads/' });
import { createPost, updatePost } from "./controllers/userController.js";
import {fileURLToPath} from 'url';



// middleware config
// const __filename = new URL(import.meta.url).pathname;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cookieParser())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(
    {
        origin: 'http://localhost:4500', // Your frontend URL
        credentials: true,
    }
));




app.use('/uploads', express.static(path.join(__dirname + '/uploads')));

//    dara base connect
connectDB();


/* ROUTES WITH FILES */
app.post("/post", uploadMiddleware.single("file"), createPost);
app.put("/post" , uploadMiddleware.single('file') , updatePost)


app.use('/api' , userRoutes)





const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);


    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);

});