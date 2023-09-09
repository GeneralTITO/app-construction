import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isOfferOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUser = Number(res.locals.decoded.sub);

  const offer = res.locals.foundOffer;
  if (!offer) {
    throw new AppError("Offer not found.", 404);
  }
  if (offer.user.id !== idUser) {
    throw new AppError("Insufficient permissions", 403);
  }

  return next();
};
