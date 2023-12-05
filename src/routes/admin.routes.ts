import { Router } from "express";
import { seedersRoutes } from "./seeders.routes";

export const adminRoutes = Router();

adminRoutes.use('/seeders', seedersRoutes);
