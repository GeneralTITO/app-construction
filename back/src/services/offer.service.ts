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

// const readAllOfUser = async (idUser: number): Promise<Offer[]> => {
//   const inputs = await inputRepository.find({
//     where: { user: { id: idUser } },
//   });
//   return inputs;
// };
// const readCreatedOfUser = async (idUser: number): Promise<Offer[]> => {
//   const inputs = await inputRepository.find({
//     where: { user: { id: idUser }, status: "created" },
//   });
//   return inputs;
// };
// const readInProgressOfUser = async (idUser: number): Promise<Offer[]> => {
//   const inputs = await inputRepository.find({
//     where: { user: { id: idUser }, status: "in_progress" },
//   });
//   return inputs;
// };
// const readAccomplishedOfUser = async (idUser: number): Promise<Offer[]> => {
//   const inputs = await inputRepository.find({
//     where: { user: { id: idUser }, status: "accomplished" },
//   });
//   return inputs;
// };

// const readAll = async (): Promise<Offer[]> => {
//   const inputs = await inputRepository.find({ order: { createdAt: "DESC" } });
//   return inputs;
// };

// const update = async (payload: InputUpdate, id: number): Promise<any> => {
//   const InputFound: Offer | null = await inputRepository.findOne({
//     where: { id: id },
//   });

//   const InputUpdated: Offer = inputRepository.create({
//     ...InputFound,
//     ...payload,
//   });

//   await inputRepository.save(InputUpdated);

//   return InputUpdated;
// };

// const destroy = async (Offer: Offer): Promise<void> => {
//   await inputRepository.remove(Offer);
// };

export default {
  create,
};
