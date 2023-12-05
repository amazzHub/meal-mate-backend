import { Request, Response } from "express";
import { recipeSeeder } from "../seeders/recipe.seeder";
import { userSeeder } from "../seeders/user.seeder";
import { HttpStatusCode } from "axios";

export const generateUsers = async (req: Request, res: Response) => {
    try {
        await userSeeder.generateUsers(req.query.count as any);
        res.status(HttpStatusCode.Created).send({ message: 'User(s) generated successfully!' });
    } catch (error) {
        res.status(HttpStatusCode.InternalServerError).send({ message: 'Failed to generate users!' });
    }
};

export const generateRecipes = async (req: Request, res: Response) => {
    try {
        await recipeSeeder.generateRecipes(req.query.count as any);
        res.status(HttpStatusCode.Created).send({ message: `${req.query.count} Recipe(s) generated successfully!` });
    } catch (error) {
        res.status(HttpStatusCode.InternalServerError).send({ message: 'Failed to generate recipes!' });
    }
}


export const adminController = {
    generateUsers,
    generateRecipes
};