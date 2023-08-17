import { User } from "../entities";
import { UserCreate, UserReturn, UserUpdate } from "../interfaces";
import { userRepository } from "../repositories";
import { userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};

const read = async (userId: number): Promise<UserReturn> => {
  const user = await userRepository.findOne({
    where: { id: userId },
  });
  return userReturnSchema.parse(user);
};

const update = async (payload: UserUpdate, id: number): Promise<UserReturn> => {
  const userFound: User | null = await userRepository.findOne({
    where: { id: id },
  });

  const userUpdated: User = userRepository.create({
    ...userFound!,
    ...payload,
  });

  await userRepository.save(userUpdated);

  const user = userReturnSchema.parse(userUpdated);

  return user;
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.remove(user);
};

export default { create, read, update, destroy };
