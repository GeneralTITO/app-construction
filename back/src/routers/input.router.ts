import { Router } from "express";
import middlewares from "../middlewares";
import { inputCreateSchema } from "../schemas";
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
inputRouter.get("/eita", middlewares.verifyToken, inputController.readAll);
inputRouter.get("/:idInput", middlewares.inputExists, inputController.readById);
inputRouter.get(
  "/user/:id",
  middlewares.userExists,
  inputController.readAllOfUser
);

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
