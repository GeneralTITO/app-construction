import { Input, Offer, User } from "../entities";
import { OfferCreate, OfferReturn } from "../interfaces/orffer.interface";
import { offerRepository } from "../repositories";
import { offerReturnSchema } from "../schemas";

const create = async (
  payload: OfferCreate,
  user: User,
  input: Input
): Promise<OfferReturn> => {
  const offer: Offer = offerRepository.create({ ...payload, user, input });
  await offerRepository.save(offer);
  return offerReturnSchema.parse(offer);
};

const readAllOfSeller = async (idUser: number): Promise<Offer[]> => {
  const offers = await offerRepository.find({
    where: { user: { id: idUser } },
    relations: { input: true },
  });
  return offers;
};

const readByIdInput = async (idInput: number): Promise<any> => {
  const offers = await offerRepository.find({
    where: { input: { id: idInput } },
    relations: { input: true },
  });
  return offers;
};

export default {
  create,
  readAllOfSeller,
  readByIdInput,
};
