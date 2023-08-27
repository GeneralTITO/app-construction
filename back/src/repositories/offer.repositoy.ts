import { Offer } from "../entities";
import { AppDataSource } from "../data-source";

export default AppDataSource.getRepository(Offer);
