import { Request, Response } from "express";
import { userService } from "../services";
import { UserReturn } from "../interfaces/user.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userService.create(req.body);
  return res.status(201).json(user);
};
const read = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(req.params.id);
  const user = await userService.read(userId);
  return res.status(200).json(user);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const user: UserReturn = await userService.update(req.body, id);
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userService.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, update, destroy };
