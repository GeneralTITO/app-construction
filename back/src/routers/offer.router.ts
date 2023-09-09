import { Router } from "express";
import middlewares from "../middlewares";
import { offerCreateSchema, offerUpdateSchema } from "../schemas";
import { offerController } from "../controllers";

export const offerRouter: Router = Router();

offerRouter.post(
  "/:id/:idInput",
  middlewares.userExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  middlewares.inputExists,
  middlewares.validateBody(offerCreateSchema),
  offerController.create
);

offerRouter.get(
  "/detalhes/:id/:idInput",
  middlewares.userExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  middlewares.inputExists,
  offerController.readByIdInput
);

offerRouter.get(
  "/:id",
  middlewares.userExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  offerController.readAllOfSeller
);

offerRouter.delete(
  "/:idOffer",
  middlewares.offerExists,
  middlewares.verifyToken,
  middlewares.isOfferOwner,
  offerController.destroy
);
