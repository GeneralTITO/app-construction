import { Router } from "express";
import middlewares from "../middlewares";
import { inputCreateSchema, inputUpdateSchema } from "../schemas";
import { inputController } from "../controllers";

export const inputRouter: Router = Router();

inputRouter.post(
  "/:id",
  middlewares.userExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  middlewares.validateBody(inputCreateSchema),
  inputController.create
);
inputRouter.get("/:id", middlewares.userExists, inputController.read);

// inputRouter.patch(
//   "/:id",
//   middlewares.userExists,
//   middlewares.verifyToken,
//   middlewares.isOwner,
//   middlewares.validateBody(inputUpdateSchema),
//   middlewares.uniqueEmail,
//   inputController.update
// );

// inputRouter.delete(
//   "/:id",
//   middlewares.verifyToken,
//   middlewares.userExists,
//   middlewares.isOwner,
//   inputController.destroy
// );
