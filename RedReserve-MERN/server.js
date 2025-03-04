import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/dbConnect.js';
import colors from 'colors';
import testRoute from './routes/testRoute.js';
import authRoute from './routes/authRoute.js';
import morgan from 'morgan';
import inventoryRouter from './routes/inventoryRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
dotenv.config();

connectDB();

app.use(
  cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true,
    allowedHeaders: ['Authorization', 'Content-Type'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/v1/test', testRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/inventory', inventoryRouter);
app.use('/api/v1/analytics', analyticsRoutes);
app.use('/api/v1/admin', adminRoutes);

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ! HUU `);
});
