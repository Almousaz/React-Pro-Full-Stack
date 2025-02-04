// In your route file
import express from 'express';
import { upload } from '../middleware/multerConfig.js';


const router = express.Router();

router.post('/upload', upload, (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }
    res.status(200).json({ success: true, message: 'File uploaded successfully' });
});

export default router;
