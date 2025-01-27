import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  createInventoryController,
  getInventoryController,
  getInventoryHospitalController,
  getRecentInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaisationController,
  getOrgnaisationForHospitalController,
} from "../controllers/inventoryController.js";

const router = express.Router();

//ADD INVERNTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

router.get("/get-inventory", authMiddleware, getInventoryController);

router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

router.get("/get-donars", authMiddleware, getDonarsController);
router.get("/get-hospitals", authMiddleware, getHospitalController);
router.get("/get-organisation", authMiddleware, getOrgnaisationController);
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrgnaisationForHospitalController
);

export default router;
