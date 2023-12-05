import { Router } from "express";
import { recipesController } from "../controllers/recipes.controller";

export const recipesRoutes = Router();

recipesRoutes.get('/', recipesController.fetchRecipes);
recipesRoutes.get('/random', recipesController.getRandomRecipes);