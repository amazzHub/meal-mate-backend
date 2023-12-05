import { Request, Response } from "express";
import { recipesService } from "../services/recipes.service";
import { spoonacularService } from "../services/providers/spoonacular.service";

const fetchRecipes = async (_req: Request, res: Response) => {
    try {
        const response = await recipesService.getAllRecipes();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong! Please try again later' });
    }
}

const getRandomRecipes = async (_req: Request, res: Response) => {
    const recipes = await spoonacularService.getRandomRecipes();
    return res.status(500).send(recipes);
}

export const recipesController = {
    fetchRecipes,
    getRandomRecipes
};