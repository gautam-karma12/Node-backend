import { Router } from "express";
import controller from "../controllers";
const { authController } = controller;
import verifyToken from "../middlerware/verifyToken";
const router = Router();
router.post("/sign-up", authController.signup);
router.post("/sign-in", authController.signin);
router.post("/create-task", verifyToken, authController.createtask);
router.get("/get-task", verifyToken,authController.gettask);
router.get("/get-task/:id", authController.getTaskById);
router.put("/get-task/:id", authController.updateTaskById);

export default router;
