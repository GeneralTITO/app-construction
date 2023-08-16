import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  userControllers.create
);
