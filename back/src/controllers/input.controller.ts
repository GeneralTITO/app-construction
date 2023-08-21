import { Request, Response } from "express";
import { inputService } from "../services";
import { InputReturn } from "../interfaces";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: User = res.locals.foundEntity;
  const input: InputReturn = await inputService.create(req.body, user);
  return res.status(201).json(input);
};
const read = async (req: Request, res: Response): Promise<Response> => {
  const inputId: number = Number(req.params.id);
  const input = await inputService.read(inputId);
  return res.status(200).json(input);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const input: InputReturn = await inputService.update(req.body, id);
  return res.status(200).json(input);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await inputService.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, update, destroy };
