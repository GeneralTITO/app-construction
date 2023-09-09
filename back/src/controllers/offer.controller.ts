import { Request, Response } from "express";
import offerService from "../services/offer.service";
import { OfferReturn } from "../interfaces/orffer.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user = res.locals.foundEntity;
  const input = res.locals.foundInput;
  const offer: OfferReturn = await offerService.create(req.body, user, input);
  return res.status(201).json(offer);
};

const readAllOfSeller = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idUser: number = Number(req.params.id);
  const offers = await offerService.readAllOfSeller(idUser);
  return res.status(200).json(offers);
};

const readByIdInput = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idInput: number = Number(req.params.idInput);
  const offers = await offerService.readByIdInput(idInput);
  return res.status(200).json(offers);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await offerService.destroy(res.locals.foundOffer);
  return res.status(204).json();
};

export default { create, readAllOfSeller, readByIdInput, destroy };
