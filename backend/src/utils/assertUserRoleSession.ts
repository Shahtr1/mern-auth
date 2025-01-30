import appAssert from "./appAssert";
import { NOT_FOUND } from "../constants/http";
import { Request } from "express";

export const assertUserAndSession = (req: Request) => {
  appAssert(req.userId, NOT_FOUND, "User not found");
  appAssert(req.sessionId, NOT_FOUND, "Session not found");
  appAssert(req.role, NOT_FOUND, "Role not found");
};
