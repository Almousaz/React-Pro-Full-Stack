import express from "express";
import { getOnePost, getPosts, loginUser , logoutUser, profileUser, registerUser } from "../controllers/userController.js";




const router = express.Router();



router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", profileUser);
router.post("/logout", logoutUser);
router.get("/post", getPosts);
router.get("/post/:id", getOnePost);



export default router;