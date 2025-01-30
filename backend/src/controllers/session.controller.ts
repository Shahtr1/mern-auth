import catchErrors from "../utils/catchErrors";
import { assertUserAndSession } from "../utils/assertUserRoleSession";
import SessionModel from "../models/session.model";
import { NOT_FOUND, OK } from "../constants/http";
import { z } from "zod";
import appAssert from "../utils/appAssert";
import UserModel, { UserDocument } from "../models/user.model";

export const getSessionsHandler = catchErrors(async (req, res) => {
  assertUserAndSession(req);

  const sessions = await SessionModel.find(
    {
      expiresAt: { $gt: new Date() },
    },
    { _id: 1, userAgent: 1, createdAt: 1 },
    { sort: { createdAt: -1 } },
  )
    .populate<{ userId: UserDocument | undefined }>("userId", "email")
    .lean();

  const transformedSessions = sessions.map((session) => ({
    _id: session._id,
    userAgent: session.userAgent,
    createdAt: session.createdAt,
    email: session.userId?.email || "",
  }));

  return res.status(OK).json(
    sessions.map((session) => ({
      ...transformedSessions,
      ...(session.id === req.sessionId && { isCurrent: true }),
    })),
  );
});

export const deleteSessionHandler = catchErrors(async (req, res) => {
  assertUserAndSession(req);

  const sessionId = z.string().parse(req.params.id);
  const deleted = await SessionModel.findOneAndDelete({
    _id: sessionId,
    userId: req.userId,
  });

  appAssert(deleted, NOT_FOUND, "Session not found");
  return res.status(OK).json({ message: "Session removed" });
});
