import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./db/dbConnection.js";
import userRoutes from './routes/userRoutes.js'
import { notFound , errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from 'cookie-parser';
import path from 'path'

const app = express();
dotenv.config();



connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users' , userRoutes)



// deployment 

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/client/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    );
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }




app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);
});


// **POST /api/users** - Register a user
// **POST /api/users/auth** - Authenticate a user and get token
// **POST /api/users/logout** - Logout user and clear cookie

// ** GET /api/users/profile** -Get user profile
// **PUT /api/users/profile** - Update profile
