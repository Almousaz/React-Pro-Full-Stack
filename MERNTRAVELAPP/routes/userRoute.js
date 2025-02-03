import express from "express";
import {
  getAddToCart,
  getDeleteFromCart,
  getHistory,
  getUser,
  getUserCartInfo,
  LoginUser,
  LogOutUser,
  RegisterUser,
  SuccessBuy,
} from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();
router.post("/register", RegisterUser);

router.post("login", LoginUser);

router.get("/auth", auth, getUser);
router.get("/logout", auth, LogOutUser);
router.get("/addToCart", auth, getAddToCart);
router.get("/deleteFromCart", auth, getDeleteFromCart);
router.get("/userCartInfo", auth, getUserCartInfo);
router.post("/successBuy", auth, SuccessBuy);
router.get("/getHistory", auth, getHistory);

export default router;
