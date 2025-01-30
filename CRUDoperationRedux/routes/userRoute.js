import express from "express";
import { createUser, deleteUser, getUser, updateUser } from "../controllers/userController.js";



const router = express.Router();

router.get('/', getUser);
router.post('/create', createUser);
router.put( '/update/:id' , updateUser);
router.delete('/deleteuser/:id' , deleteUser)



export default router;