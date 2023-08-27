import { inputExists } from "./inputExists.middleware";
import { handleError } from "./handleError.middleware";
import { isOwner } from "./isOwner.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { userExists } from "./userExists.middleware";
import { validateBody } from "./validadeBody.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { isInputOwner } from "./inputOwner.middleware";

export default {
  handleError,
  validateBody,
  verifyToken,
  isOwner,
  userExists,
  uniqueEmail,
  inputExists,
  isInputOwner,
};
