import express from "express";
import upload from "../middleware/multer.js";
import { createPost, deletePost, getPost, likePost } from "../controllers/postController.js";
import { ensureAuth } from "../middleware/auth.js";


const router = express.Router();

router.post('/createPost' , upload.single("file") , createPost )
router.get('/:id' , ensureAuth , getPost )

router.put('/likePost/:id' , likePost )

router.delete("/deletePost/:id", deletePost );


export default router;
