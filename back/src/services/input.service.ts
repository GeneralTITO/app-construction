import { Input, User } from "../entities";
import { InputCreate, InputReturn, InputUpdate } from "../interfaces";
import { inputRepository } from "../repositories";
import { inputSchema } from "../schemas";

const create = async (
  payload: InputCreate,
  user: User
): Promise<InputReturn> => {
  const Input: Input = inputRepository.create({ ...payload, user });
  await inputRepository.save(Input);
  return inputSchema.parse(Input);
};

const readAllOfUser = async (idUser: number): Promise<Input[]> => {
  const inputs = await inputRepository.find({
    where: { user: { id: idUser } },
  });
  return inputs;
};

const readAll = async (): Promise<Input[]> => {
  const inputs = await inputRepository.find({ order: { createdAt: "DESC" } });
  return inputs;
};

const update = async (payload: InputUpdate, id: number): Promise<any> => {
  const InputFound: Input | null = await inputRepository.findOne({
    where: { id: id },
  });

  const InputUpdated: Input = inputRepository.create({
    ...InputFound,
    ...payload,
  });

  await inputRepository.save(InputUpdated);

  return InputUpdated;
};

const destroy = async (Input: Input): Promise<void> => {
  await inputRepository.remove(Input);
};

export default { create, readAllOfUser, readAll, update, destroy };
