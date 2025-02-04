import express from "express";
import {
  getProductById,
  getProducts,
  UploadImageProduct,
  UploadProduct,
} from "../controllers/productController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/uploadImage", auth, UploadImageProduct);
router.post("/uploadProduct", auth, UploadProduct);

router.post("/getProducts", getProducts);
router.get("/products_by_id", getProductById);

export default router;
