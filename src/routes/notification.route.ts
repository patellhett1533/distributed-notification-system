import express, { Request, Response } from "express";
// import validate from "../middlewares/validate";
// import auth from "../middlewares/auth";
import httpStatus from "http-status";
import notificationController from "../controllers/notification.controller";

const router = express.Router();

router.post("/", notificationController.createNotification);

router.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).send({ message: "Hello world!" });
});

export default router;
