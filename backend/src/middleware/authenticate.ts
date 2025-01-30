import { RequestHandler } from "express";
import appAssert from "../utils/appAssert";
import { FORBIDDEN, UNAUTHORIZED } from "../constants/http";
import AppErrorCode from "../constants/appErrorCode";
import { AccessTokenPayload, verifyToken } from "../utils/jwt";
import mongoose from "mongoose";
import RoleType from "../constants/roleType";

const authenticate = (isAdmin: boolean = false): RequestHandler => {
  return (req, res, next) => {
    const accessToken = req.cookies.accessToken as string | undefined;
    appAssert(
      accessToken,
      UNAUTHORIZED,
      "Not authorized",
      AppErrorCode.InvalidAccessToken,
    );

    const { error, payload } = verifyToken<AccessTokenPayload>(accessToken);
    appAssert(
      payload,
      UNAUTHORIZED,
      error === "jwt expired" ? "Token expired" : "Invalid token",
      AppErrorCode.InvalidAccessToken,
    );

    const hasValidRole =
      (payload.role === RoleType.User || payload.role === RoleType.Admin) &&
      (!isAdmin || payload.role === RoleType.Admin);

    appAssert(
      hasValidRole,
      FORBIDDEN,
      "Forbidden",
      AppErrorCode.ForbiddenAccessToken,
    );

    req.role = payload.role;
    req.userId = payload.userId as mongoose.Types.ObjectId;
    req.sessionId = payload.sessionId as mongoose.Types.ObjectId;
    next();
  };
};

export default authenticate;
