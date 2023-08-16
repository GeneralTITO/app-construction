import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(250).min(3),
  email: z.string().email().max(250),
  password: z.string().max(250).min(5),
  is_constructor: z.boolean(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

const userReturnSchema = userSchema.omit({ password: true });

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const userUpdateSchema = userCreateSchema.partial();

export { userCreateSchema, userReturnSchema, userSchema, userUpdateSchema };
