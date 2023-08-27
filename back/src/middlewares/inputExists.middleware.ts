import { NextFunction, Request, Response } from "express";
import { Input } from "../entities";
import { inputRepository } from "../repositories";
import { AppError } from "../errors";

export const inputExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idInput: number = Number(req.params.idInput);

  const foundInput: Input | null = await inputRepository.findOne({
    where: { id: idInput },
    relations: { user: true },
  });
  if (!foundInput) throw new AppError("Input not found", 404);

  res.locals = { ...res.locals, foundInput };

  return next();
};
