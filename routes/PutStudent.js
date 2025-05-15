import express from "express";
const router = express.Router();

import { updateStudentDetails } from "../controllers/studentController.js";

router.put("/students/:id", updateStudentDetails);
export default router;
