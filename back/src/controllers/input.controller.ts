import { Request, Response } from "express";
import { inputService } from "../services";
import { InputReturn } from "../interfaces";
import { User } from "../entities";
import { inputSchema } from "../schemas";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: User = res.locals.foundEntity;
  const input: InputReturn = await inputService.create(req.body, user);
  return res.status(201).json(input);
};

const readById = async (req: Request, res: Response): Promise<Response> => {
  const input = res.locals.foundInput;
  const inputParse = inputSchema.parse(input);
  return res.status(200).json(inputParse);
};

const readAllOfUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: number = Number(req.params.id);
  const inputs = await inputService.readAllOfUser(idUser);
  return res.status(200).json(inputs);
};

const readCreatedOfUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: number = Number(req.params.id);
  const inputs = await inputService.readCreatedOfUser(idUser);
  return res.status(200).json(inputs);
};

const readInProgressOfUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: number = Number(req.params.id);
  const inputs = await inputService.readInProgressOfUser(idUser);
  return res.status(200).json(inputs);
};

const readAccomplishedOfUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: number = Number(req.params.id);
  const inputs = await inputService.readAccomplishedOfUser(idUser);
  return res.status(200).json(inputs);
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
  const inputs = await inputService.readAll();
  return res.status(200).json(inputs);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.idInput);
  const input: InputReturn = await inputService.update(req.body, id);
  return res.status(200).json(input);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await inputService.destroy(res.locals.foundInput);
  return res.status(204).json();
};

export default {
  create,
  readById,
  readAllOfUser,
  update,
  destroy,
  readAll,
  readAccomplishedOfUser,
  readCreatedOfUser,
  readInProgressOfUser,
};
