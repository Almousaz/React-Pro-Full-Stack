import express from "express";
import {
  deleteProduct,
  getProduct,
  productPost,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/create", productPost);
router.get("/", getProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
