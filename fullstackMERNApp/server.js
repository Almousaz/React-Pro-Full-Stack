import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/dataBase.js";
import testRoute from './routes/testRoute.js'
import postRouter from './routes/postsRouter.js'
import bodyParser from 'body-parser';


const app = express();
dotenv.config();


connectDB()



app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())




app.use('/api/test', testRoute )
app.use('/api/posts', postRouter);


const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `);
});


