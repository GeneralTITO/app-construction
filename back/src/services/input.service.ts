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

const read = async (idInput: number): Promise<InputReturn> => {
  const input = await inputRepository.findOne({
    where: { id: idInput },
  });
  return input;
};

const update = async (
  payload: InputUpdate,
  id: number
): Promise<InputReturn> => {
  const InputFound: Input | null = await inputRepository.findOne({
    where: { id: id },
  });

  const InputUpdated: Input = inputRepository.create({
    ...InputFound!,
    ...payload,
  });

  await inputRepository.save(InputUpdated);

  const Input = inputSchema.parse(InputUpdated);

  return Input;
};

const destroy = async (Input: Input): Promise<void> => {
  await inputRepository.remove(Input);
};

export default { create, read, update, destroy };
