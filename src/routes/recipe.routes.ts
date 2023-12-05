import { Router } from "express";
import { recipeController } from "../controllers/recipe.controller";

export const recipeRoutes = Router();

recipeRoutes.get('/', recipeController.fetchRecipes);
recipeRoutes.get('/search', recipeController.searchRecipes);
recipeRoutes.get('/trending', recipeController.fetchTrendingRecipes);
recipeRoutes.get('/random', recipeController.getRandomRecipes);
