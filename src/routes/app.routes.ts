import { Router } from "express";
import { recipesRoutes } from "./recipes.routes";

export const appRoutes = Router();

appRoutes.use('/recipes', recipesRoutes);