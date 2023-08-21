import { z } from "zod";

const inputSchema = z.object({
  id: z.number().positive(),
  item_name: z.string().max(250).min(3),
  amount: z.string().max(250),
  description: z.string().max(1000).min(5),
  expiration: z.string(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
});

const inputCreateSchema = inputSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const inputUpdateSchema = inputCreateSchema.partial();

export { inputCreateSchema, inputSchema, inputUpdateSchema };
