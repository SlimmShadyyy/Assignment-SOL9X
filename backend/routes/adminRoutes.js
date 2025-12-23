import express from "express";
import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.use(protect, adminOnly);

router.get("/students", getAllStudents);
router.post("/students", addStudent);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

export default router;
