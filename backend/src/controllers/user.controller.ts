import catchErrors from "../utils/catchErrors";
import UserModel from "../models/user.model";
import appAssert from "../utils/appAssert";
import { NOT_FOUND, OK } from "../constants/http";
import { assertUserAndSession } from "../utils/assertUserRoleSession";
import UserRoleModel from "../models/user-role.model";
import { RoleDocument } from "../models/role.model";

export const getUserHandler = catchErrors(async (req, res) => {
  assertUserAndSession(req);

  const user = await UserModel.findById(req.userId);
  appAssert(user, NOT_FOUND, "User not found");
  const userId = user._id;

  const userRole = await UserRoleModel.findOne({
    userId,
  }).populate<{ roleId: RoleDocument }>("roleId");

  appAssert(
    userRole?.roleId,
    NOT_FOUND,
    "User is not mapped to a role or role not found",
  );

  const role = userRole.roleId;
  return res.status(OK).json({ ...user.omitPassword(), role: role.type });
});
