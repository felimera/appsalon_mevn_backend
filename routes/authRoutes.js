import express from "express";
import { register, verifyAccount } from "../controllers/authController.js";

const router = express.Router();

// Rutas de autenticación y registros de usuarios
router.post("/register", register);
router.get("/verify/:token", verifyAccount);

export default router;
