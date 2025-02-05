import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";
import colors from "colors";
import testRoute from './routes/testRoute.js'
import session from 'express-session';
import flash from "express-flash";
import MongoStore from "connect-mongo";
import mainRoutes from './routes/mainRoute.js'
import passport from "passport";
import { localStrategy } from "./config/passport.js";
import postRoutes from './routes/postRoutes.js'
import logger from 'morgan';
import methodOverride from 'method-override';
import cors from 'cors'


const app = express();
dotenv.config();


connectDB();


app.use(cors({
    origin: 'http://localhost:5179',  
    methods: ['GET', 'POST'],  
    allowedHeaders: ['Content-Type'],  
    credentials: true // Allow credentials
}));


//Body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false, httpOnly: true }, 
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI , // Replace with your MongoDB URI
      }),
    })
  );



//Use flash messages for errors, info, ect...
app.use(flash());
app.use(logger("dev"));
app.use(methodOverride("_method"));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
localStrategy(passport);

app.use('/api/v1/test', testRoute )
app.use('/api/v1' , mainRoutes )
app.use('api/v1/post' , postRoutes )





const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);
});

