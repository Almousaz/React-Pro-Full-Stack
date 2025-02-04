import express from "express";
import {
  getLoginUser,
  getUserSignup,
  logOutUser,
  postLoginUser,
  UserSignup,
} from "../controllers/authController.js";
import { ensureAuth } from "../middleware/auth.js";
import { getFeed, getProfile } from "../controllers/postController.js";
import { getIndex } from "../controllers/homeConroller.js";

const router = express.Router();

router.post("/signup", UserSignup);
router.get("/signup", getUserSignup);
router.post("/login", postLoginUser);
router.get("/login", getLoginUser);
router.get("/logout", logOutUser);

router.get("/profile", ensureAuth, getProfile);
router.get("feed", ensureAuth, getFeed);

router.get("/", getIndex);

export default router;
