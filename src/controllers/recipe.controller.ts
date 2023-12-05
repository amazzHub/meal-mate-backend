import { Request, Response } from "express";
import { recipesService } from "../services/recipes.service";
import { spoonacularService } from "../services/providers/spoonacular.service";
import { HttpStatusCode } from "axios";

const fetchRecipes = async (_req: Request, res: Response) => {
    try {
        const response = await recipesService.getAllRecipes();
        return res.status(HttpStatusCode.Ok).json(response);
    } catch (error) {
        return res.status(HttpStatusCode.InternalServerError).send({ message: 'Something went wrong! Please try again later' });
    }
}

const getRandomRecipes = async (req: Request, res: Response) => {
    try {
        const randomRecipes = await spoonacularService.getRandomRecipes(req.query.count as any);
        return res.status(HttpStatusCode.Ok).json(randomRecipes);
    } catch (error) {
        return res.status(HttpStatusCode.InternalServerError).json({ message: 'Something went wrong! Please try again later' });
    }
}

const searchRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await recipesService.searchRecipe(req.query.q as any);
        return res.status(HttpStatusCode.Ok).json(recipes);
    }
    catch (error) {
        return res.status(HttpStatusCode.InternalServerError).json({ message: error });
    }
}

const fetchTrendingRecipes = async (req: Request, res: Response) => {
    try {
        const trendingRecipes = await recipesService.getTrendingRecipes();
        return res.status(HttpStatusCode.Ok).json(trendingRecipes);
    }
    catch (error) {
        return res.status(HttpStatusCode.InternalServerError).json({ message: error });
    }
}

export const recipeController = {
    fetchRecipes,
    getRandomRecipes,
    searchRecipes,
    fetchTrendingRecipes
};