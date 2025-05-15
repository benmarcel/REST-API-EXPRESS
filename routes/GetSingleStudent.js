import express from "express";
const router = express.Router();
import { getOneStudent } from "../controllers/studentController.js";
router.get("/students/:id", getOneStudent);

export default router;
