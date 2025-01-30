import mongoose from "mongoose";

declare global {
  namespace Express {
    interface Request {
      userId: mongoose.Types.ObjectId | undefined;
      role: string | undefined;
      sessionId: mongoose.Types.ObjectId | undefined;
    }
  }
}

export {};
