import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userController } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  userController.create
);
userRouter.get("/:id", userController.read);

userRouter.patch(
  "/:id",
  middlewares.validateBody(userUpdateSchema),
  userController.update
);

userRouter.delete("/:id", userController.destroy);
