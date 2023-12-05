import { Router } from "express";
import { recipeRoutes } from "./recipe.routes";
import { adminRoutes } from "./admin.routes";
import { creatorRoutes } from "./creator.routes";

export const appRoutes = Router();

appRoutes.use('/creators', creatorRoutes);
appRoutes.use('/recipes', recipeRoutes);
appRoutes.use('/admin', adminRoutes);
