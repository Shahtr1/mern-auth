import RoleModel from "../models/role.model";
import RoleType from "../constants/roleType";
import UserModel from "../models/user.model";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../constants/env";
import UserRoleModel from "../models/user-role.model";

const initializeDefaultRBAC = async () => {
  try {
    const userRole = await RoleModel.findOne({ type: RoleType.User });
    if (!userRole) {
      await RoleModel.create({
        type: RoleType.User,
        description: "This is the role assigned to user",
      });
    }

    let adminRole = await RoleModel.findOne({ type: RoleType.Admin });
    if (!adminRole) {
      adminRole = await RoleModel.create({
        type: RoleType.Admin,
        description: "This is the role assigned to admin",
      });
    }
    const adminRoleId = adminRole._id;

    let admin = await UserModel.findOne({ email: ADMIN_EMAIL });
    if (!admin) {
      admin = await UserModel.create({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        verified: true,
      });
    }
    const adminId = admin._id;

    const existingAdminRole = await UserRoleModel.findOne({
      userId: adminId,
      roleId: adminRoleId,
    });

    if (!existingAdminRole) {
      await UserRoleModel.create({
        userId: adminId,
        roleId: adminRoleId,
      });
    }
  } catch (error) {
    console.log("Error while initializing default RBAC configuration", error);
    process.exit(1);
  }
};

export default initializeDefaultRBAC;
