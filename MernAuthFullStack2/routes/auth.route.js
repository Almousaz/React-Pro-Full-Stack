import express from 'express';
import { google, SignIn, Signout, SignUp } from '../controllers/auth.controller.js';




const router = express.Router();


router.post('/signup', SignUp);
router.post('/signin', SignIn);
router.post('/google', google);
router.get('/signout', Signout);


export default router;

