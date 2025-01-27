
import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { adminMiddleware } from '../middleware/adminMiddleware.js';
import { getDonarsListController , getHospitalListController , getOrgListController , deleteDonarController } from '../controllers/adminController.js';




//router object
const router = express.Router();


router.get("/donar-list", authMiddleware , adminMiddleware, getDonarsListController );

//GET || HOSPITAL LIST
router.get("/hospital-list", authMiddleware , adminMiddleware, getHospitalListController );

//GET || ORG LIST
router.get("/org-list", authMiddleware , adminMiddleware, getOrgListController);

// ==========================

// DELETE DONAR || GET
router.delete("/delete-donar/:id", authMiddleware , adminMiddleware, deleteDonarController );


export default router;

