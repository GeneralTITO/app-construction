import { handleError } from "./handleError.middleware";
import { validateBody } from "./validadeBody.middleware";
import { verifyToken } from "./verifyToken.middleware";

export default { handleError, validateBody, verifyToken };
