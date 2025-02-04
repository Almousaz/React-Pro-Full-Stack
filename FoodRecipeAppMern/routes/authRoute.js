import express from "express";
import validate from "../middleware/index.js";
import joinSchema from "../schema-validations/index.js";
import registerOrLogin from "../controllers/auth.js";

const router = express.Router();

router.post("/join", validate(joinSchema), registerOrLogin);







export default router;
