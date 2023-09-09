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
// offerRouter.get("/", middlewares.verifyToken, offerController.readAll);
// offerRouter.get(
//   "/user/created/:id",
//   middlewares.userExists,
//   offerController.readCreatedOfUser
// );
// offerRouter.get(
//   "/user/inprogress/:id",
//   middlewares.userExists,
//   offerController.readInProgressOfUser
// );
// offerRouter.get(
//   "/user/accomplished/:id",
//   middlewares.userExists,
//   offerController.readAccomplishedOfUser
// );
// offerRouter.get(
//   "/user/:id",
//   middlewares.userExists,
//   offerController.readAllOfUser
// );
// offerRouter.get("/:idoffer", middlewares.offerExists, offerController.readById);

// offerRouter.patch(
//   "/:idoffer",
//   middlewares.offerExists,
//   middlewares.verifyToken,
//   middlewares.isofferOwner,
//   middlewares.validateBody(offerUpdateSchema),
//   offerController.update
// );

// offerRouter.delete(
//   "/:idoffer",
//   middlewares.offerExists,
//   middlewares.verifyToken,
//   middlewares.isofferOwner,
//   offerController.destroy
// );
