import { z } from "zod";
import { inputCreateSchema, inputSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Input } from "../entities";

type InputCreate = z.infer<typeof inputCreateSchema>;
type InputReturn = z.infer<typeof inputSchema>;
type InputUpdate = DeepPartial<Input>;
type InputRepo = Repository<Input>;

export { InputCreate, InputReturn, InputUpdate, InputRepo };
