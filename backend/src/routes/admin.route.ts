import { Router } from "express";
import { adminDashboardHandler } from "../controllers/admin.controller";
import {
  deleteSessionHandler,
  getSessionsHandler,
} from "../controllers/session.controller";

const adminRoutes = Router();

// prefix admin
adminRoutes.get("/dashboard", adminDashboardHandler);
adminRoutes.get("/sessions", getSessionsHandler);
adminRoutes.delete("/sessions/:id", deleteSessionHandler);

export default adminRoutes;
