import catchErrors from "../utils/catchErrors";
import UserModel from "../models/user.model";
import appAssert from "../utils/appAssert";
import { NOT_FOUND, OK } from "../constants/http";
import { assertUserAndSession } from "../utils/assertUserRoleSession";

export const adminDashboardHandler = catchErrors(async (req, res) => {
  assertUserAndSession(req);

  const user = await UserModel.findById(req.userId);
  appAssert(user, NOT_FOUND, "User not found");
  return res.status(OK).json(user.omitPassword());
});
