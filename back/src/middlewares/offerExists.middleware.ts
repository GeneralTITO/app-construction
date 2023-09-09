import { NextFunction, Request, Response } from "express";
import { Offer } from "../entities";
import { offerRepository } from "../repositories";
import { AppError } from "../errors";

export const offerExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idOffer: number = Number(req.params.idOffer);

  const foundOffer: Offer | null = await offerRepository.findOne({
    where: { id: idOffer },
    relations: { user: true },
  });
  if (!foundOffer) throw new AppError("Offer not found", 404);

  res.locals = { ...res.locals, foundOffer };

  return next();
};
