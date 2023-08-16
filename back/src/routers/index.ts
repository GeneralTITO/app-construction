import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateschema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),

  userControllers.create
);

// userRouter.get("/:id", middlewares.userExists, userControllers.read);

// userRouter.patch(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   middlewares.validateBody(userUpdateschema),
//   middlewares.uniqueEmail,
//   middlewares.uniqueCpf,
//   userControllers.update
// );

// userRouter.delete(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   userControllers.destroy
// );
