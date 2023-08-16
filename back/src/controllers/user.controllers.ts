import { Request, Response } from "express";
import { userService } from "../services";
import { UserReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userService.create(req.body);
  return res.status(201).json(user);
};
