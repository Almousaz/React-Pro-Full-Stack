
import express from 'express'
import {registerController , loginController , currentUserController } from '../controllers/authController.js';
import {authMiddleware} from '../middleware/authMiddleware.js'

const router = express.Router();



//Register || POST
router.post("/register", registerController);


//LOGIN || POST
router.post("/login", loginController);



//GET CURR USER || GET
router.get('/current-user', authMiddleware, currentUserController );



export default router;
