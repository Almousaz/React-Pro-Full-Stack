import express from 'express'
import { changeAvatar, editUser, getAuthors, getUser, loginUser, registerUser } from '../controllers/userControllers.js';
import { authMiddleware } from '../middleware/authMiddleware.js';



const router = express.Router();


//Register || POST

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/:id', getUser)

router.get('/', getAuthors)

router.post('/change-avatar', authMiddleware , changeAvatar)

router.patch('/edit-user', authMiddleware, editUser)



export default router;
