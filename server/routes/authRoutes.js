import express from "express";
const router = express.Router();
import { signup, signin } from "../controllers/authController.js";

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
