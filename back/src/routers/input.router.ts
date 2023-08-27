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
inputRouter.get("/", middlewares.verifyToken, inputController.readAll);
inputRouter.get("/:idInput", middlewares.inputExists, inputController.readById);
inputRouter.get(
  "/user/:id",
  middlewares.userExists,
  inputController.readAllOfUser
);

inputRouter.patch(
  "/:idInput",
  middlewares.inputExists,
  middlewares.verifyToken,
  middlewares.isInputOwner,
  middlewares.validateBody(inputUpdateSchema),
  inputController.update
);

inputRouter.delete(
  "/:idInput",
  middlewares.inputExists,
  middlewares.verifyToken,
  middlewares.isInputOwner,
  inputController.destroy
);
