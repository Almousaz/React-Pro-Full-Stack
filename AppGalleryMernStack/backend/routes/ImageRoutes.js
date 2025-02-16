import express from "express";
import { getAllImages, getImageDetailById, uploadImage } from "../controllers/ImageController.js";
import { uploadMultiple } from "../middleware/FileUploader.js";



const router = express.Router();

router.post('/upload-image' , uploadMultiple , uploadImage )

router.get('/' , getAllImages)


router.get('/:id' , getImageDetailById )



export default router;
