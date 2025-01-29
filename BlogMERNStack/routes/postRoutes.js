import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  createPost,
  deletePost,
  editPost,
  getCatPosts,
  getPost,
  getPosts,
  getUserPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", authMiddleware , createPost);

router.get("/", getPosts);

router.get("/:id", getPost);
router.get("/categories/:category", getCatPosts);
router.get("/users/:id", getUserPosts);
router.patch("/:id", authMiddleware, editPost);
router.delete("/:id", authMiddleware, deletePost);

export default router;
