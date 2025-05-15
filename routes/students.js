import express from "express";
const router = express.Router();
import validateStudentData from "../middleware/studentValidation.js";
import {
  getAllStudent,
  getOneStudent,
  addNewStudent,
  updateStudentDetails,
  deleteStudent,
} from "../controllers/studentController.js";

router.get("/students", getAllStudent);
router.get("/students/:id", getOneStudent);
router.post("/students", validateStudentData, addNewStudent);
router.put("/students/:id", updateStudentDetails)
router.delete("/students/:id", deleteStudent)
export default router;
