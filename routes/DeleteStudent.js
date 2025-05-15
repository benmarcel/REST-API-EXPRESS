import express from "express";
const router = express.Router();

import { deleteStudent } from "../controllers/studentController.js";

router.delete("/students/:id", deleteStudent);
export default router;
