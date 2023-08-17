import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userController } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  userController.create
);
userRouter.get("/:id", middlewares.userExists, userController.read);

userRouter.patch(
  "/:id",
  middlewares.userExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  middlewares.validateBody(userUpdateSchema),
  middlewares.uniqueEmail,
  userController.update
);

userRouter.delete(
  "/:id",
  middlewares.verifyToken,
  middlewares.userExists,
  middlewares.isOwner,
  userController.destroy
);
