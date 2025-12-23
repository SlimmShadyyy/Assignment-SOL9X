import express from "express";
import { getMyProfile, updateProfile } from "../controllers/studentController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/me", protect, getMyProfile);
router.put("/me", protect, updateProfile);

export default router;
