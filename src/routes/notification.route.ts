import express from "express";
import validate from "../middlewares/validate";
import auth from "../middlewares/auth";
import notificationController from "../controllers/notification.controller";

const router = express.Router();

router.post("/", notificationController.createNotification);

export default router;
