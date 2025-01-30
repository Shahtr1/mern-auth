import { Router } from "express";
import { adminDashboardHandler } from "../controllers/admin.controller";

const adminRoutes = Router();

// prefix admin
adminRoutes.get("/dashboard", adminDashboardHandler);

export default adminRoutes;
