import { Router } from "express";
import controller from "../controllers";
const { authController } = controller;
const router = Router();
router.post("/sign-up", authController.signup);
router.get("/sign-in", authController.signin);
router.post("/create-task", authController.createtask);
router.get("/get-task", authController.gettask);
router.get("/get-task/:id", authController.getTaskById);
router.put("/get-task/:id", authController.updateTaskById);

export default router;
