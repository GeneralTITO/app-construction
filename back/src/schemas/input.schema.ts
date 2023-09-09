import { z } from "zod";
import { userSchema } from "./user.schema";

const inputSchema = z.object({
  id: z.number().positive(),
  item_name: z.string().max(250).min(1),
  amount: z.string().max(250),
  description: z.string().max(1000).min(1),
  expiration: z.string(),
  status: z.enum(["created", "in_progress", "accomplished"]),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

const inputCreateSchema = inputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  user: true,
});

const inputUpdateSchema = inputCreateSchema.partial();

export { inputCreateSchema, inputSchema, inputUpdateSchema };
