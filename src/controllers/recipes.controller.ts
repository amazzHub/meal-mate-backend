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
        const recipes = await spoonacularService.getRandomRecipes(req.query.count as any);
        return res.status(HttpStatusCode.Ok).send(recipes);
    } catch (error) {
        return res.status(HttpStatusCode.InternalServerError).send({ message: 'Something went wrong! Please try again later' });
    }
}

const searchRecipes = async (req: Request, res: Response) => {
    try {
        const recipes = await recipesService.searchRecipe(req.query.q as any);
        return res.status(HttpStatusCode.Ok).send(recipes);
    }
    catch (error) {
        return res.status(HttpStatusCode.InternalServerError).send({ message: error });
    }
}

export const recipesController = {
    fetchRecipes,
    getRandomRecipes,
    searchRecipes
};