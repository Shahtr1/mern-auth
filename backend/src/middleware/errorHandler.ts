import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";
import { z } from "zod";

function handleZodError(res: Response, error: z.ZodError) {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));

  res.status(BAD_REQUEST).json({
    message: error.message,
    errors,
  });
}

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(`PATH ${req.path}`, error);

  if (error instanceof z.ZodError) {
    handleZodError(res, error);
  }

  res.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");
};

export default errorHandler;
