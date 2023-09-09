import { z } from "zod";
import { userSchema } from "./user.schema";
import { inputSchema } from "./input.schema";

const offerSchema = z.object({
  id: z.number(),
  valor: z.number().min(0),
  description: z.string().nullable(),
  status: z.enum(["awaiting", "accepted", "rejected"]),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  input: inputSchema,
  user: userSchema,
});
const offerReturnSchema = offerSchema.omit({});
const offerCreateSchema = offerSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  status: true,
  input: true,
  user: true,
});

const offerUpdateSchema = offerCreateSchema.partial();

export { offerCreateSchema, offerSchema, offerUpdateSchema, offerReturnSchema };
