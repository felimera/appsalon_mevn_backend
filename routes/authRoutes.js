import express from "express";
import {
  register,
  verifyAccount,
  login,
  user,
  forgotPassword
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Rutas de autenticación y registros de usuarios
router.post("/register", register);
router.get("/verify/:token", verifyAccount);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);

// Area privada - Requiere un JWT
router.get('/user', authMiddleware, user);

export default router;
