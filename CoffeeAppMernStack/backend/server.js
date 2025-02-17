import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import colors from "colors";
import connectDB from "./db/database.js";
import errorHandler from "./middleware/ErrorHandler.js";
import userRoutes from './routes/userRoute.js'
import coffeeRoutes from './routes/coffeeRoute.js'


dotenv.config();
const app = express();
app.use(express.json());


app.use('/api/user' , userRoutes)
app.use('/api/post' , coffeeRoutes)



//    dara base connect
connectDB();





// Use the error-handling middleware
app.use(errorHandler);



const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `.bgGreen.white);

});


