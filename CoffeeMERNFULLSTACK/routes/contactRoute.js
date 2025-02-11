import express from "express";
import { getContact, postContact } from "../controllers/contactController.js";


const router = express.Router();

router.post("/create", postContact);
router.get("/", getContact);




export default router;
