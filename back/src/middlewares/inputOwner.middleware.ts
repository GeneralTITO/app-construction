import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isInputOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUser = Number(res.locals.decoded.sub);

  const input = res.locals.foundInput;
  if (!input) {
    throw new AppError("Announcement not found.", 404);
  }
  if (input.user.id !== idUser) {
    throw new AppError("Insufficient permissions", 403);
  }

  return next();
};
