import express from "express";
const router = express.Router();
import validateStudentData from "../middleware/studentValidation.js";
import {
    addNewStudent,
   
  } from "../controllers/studentController.js";
  
router.post("/students", validateStudentData, addNewStudent);
  export default router;