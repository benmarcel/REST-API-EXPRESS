import express from "express";
const router = express.Router();
import {
    getAllStudent,
   
  } from "../controllers/studentController.js";
  router.get("/students", getAllStudent);

  export default router;