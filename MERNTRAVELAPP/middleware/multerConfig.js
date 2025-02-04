// multerConfig.js
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.jpg' && ext !== '.png') {
            return cb(res.status(400).end('Only jpg, png are allowed'), false);
        }
        cb(null, true);
    }
});

const upload = multer({ storage: storage }).single('file');

export { upload };
