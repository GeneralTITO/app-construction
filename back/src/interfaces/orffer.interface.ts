import { z } from "zod";
import { offerCreateSchema, offerReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Offer } from "../entities";

type OfferCreate = z.infer<typeof offerCreateSchema>;
type OfferReturn = z.infer<typeof offerReturnSchema>;
type OfferUpdate = DeepPartial<Offer>;
type OfferRepo = Repository<Offer>;

export { OfferCreate, OfferReturn, OfferUpdate, OfferRepo };
