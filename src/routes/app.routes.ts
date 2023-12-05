import { Router } from "express";
import { recipesRoutes } from "./recipes.routes";
import { adminRoutes } from "./admin.routes";

export const appRoutes = Router();

appRoutes.use('/recipes', recipesRoutes);
appRoutes.use('/admin', adminRoutes);
