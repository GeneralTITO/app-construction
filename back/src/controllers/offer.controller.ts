import { Request, Response } from "express";
import { userService } from "../services";
import { UserReturn } from "../interfaces/user.interface";
import offerService from "../services/offer.service";
import { OfferReturn } from "../interfaces/orffer.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user = res.locals.foundEntity;
  const input = res.locals.foundInput;
  const offer: OfferReturn = await offerService.create(req.body, user, input);
  return res.status(201).json(offer);
};

// const read = async (req: Request, res: Response): Promise<Response> => {
//   const userId: number = Number(req.params.id);
//   const user = await userService.read(userId);
//   return res.status(200).json(user);
// };

// const update = async (req: Request, res: Response): Promise<Response> => {
//   const id: number = Number(req.params.id);
//   const user: UserReturn = await userService.update(req.body, id);
//   return res.status(200).json(user);
// };

// const destroy = async (req: Request, res: Response): Promise<Response> => {
//   await userService.destroy(res.locals.foundEntity);
//   return res.status(204).json();
// };

export default { create };
