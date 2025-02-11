import express from "express";
import {
  createAbout,
  deleteAboutById,
  getAllAbouts,
  updateAboutById,
} from "../controllers/aboutController.js";

const router = express.Router();

router.post("/create", createAbout);
router.get("/", getAllAbouts);
router.put("/update/:id", updateAboutById);
router.delete("/delete/:id", deleteAboutById);

export default router;
