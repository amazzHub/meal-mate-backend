import { Request, Response } from "express";
import { recipeSeeder } from "../seeders/recipe.seeder";
import { creatorSeeder } from "../seeders/creator.seeder";
import { HttpStatusCode } from "axios";

export const generateCreators = async (req: Request, res: Response) => {
    const creatorCount = req.query.count;
    try {
        await creatorSeeder.generateCreators(creatorCount as any);
        res.status(HttpStatusCode.Created).json({ message: `${creatorCount} Creator(s) generated successfully!` });
    } catch (error) {
        res.status(HttpStatusCode.InternalServerError).json({ message: 'Failed to generate creators!' });
    }
};

export const generateRecipes = async (req: Request, res: Response) => {
    const recipesCount = req.query.count;
    try {
        await recipeSeeder.generateRecipes(recipesCount as any);
        res.status(HttpStatusCode.Created).json({ message: `${recipesCount} Recipe(s) generated successfully!` });
    } catch (error) {
        res.status(HttpStatusCode.InternalServerError).json({ message: 'Failed to generate recipes!' });
    }
}

export const adminController = {
    generateCreators,
    generateRecipes
};
