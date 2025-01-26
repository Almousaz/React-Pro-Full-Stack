
import express from 'express'
import {registerController , loginController } from '../controllers/authController.js';


const router = express.Router();



//Register || POST
router.post("/register", registerController);


//LOGIN || POST
router.post("/login", loginController);




export default router;
