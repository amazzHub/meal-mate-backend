import { Request, Response } from "express";
import { recipeSeeder } from "../seeders/recipe.seeder";
import { creatorSeeder } from "../seeders/creator.seeder";
import { HttpStatusCode } from "axios";
import { notificationSeeder } from "../seeders/notification.seeder";
import { adminService } from "../services/admin.service";

const generateCreators = async (req: Request, res: Response) => {
    const count = req.query.count;
    try {
        await creatorSeeder.generateCreators(count as any);
        res.status(HttpStatusCode.Created).json({ message: `${count} Creator(s) generated successfully!` });
    } catch (error) {
        res.status(HttpStatusCode.InternalServerError).json({ message: 'Failed to generate creators!' });
    }
};

const generateRecipes = async (req: Request, res: Response) => {
    const count = req.query.count;
    try {
        await recipeSeeder.generateRecipes(count as any);
        res.status(HttpStatusCode.Created).json({ message: `${count} Recipe(s) generated successfully!` });
    } catch (error) {
        res.status(HttpStatusCode.InternalServerError).json({ message: 'Failed to generate recipes!' });
    }
};

const generateNotifications = async (req: Request, res: Response) => {
    const count = req.query.count;
    try {
        await notificationSeeder.generateNotifications(count as any);
        res.status(HttpStatusCode.Created).json({ message: `${count} Notifications(s) generated successfully!` });
    } catch (error) {
        res.status(HttpStatusCode.InternalServerError).json({ message: 'Failed to generate notifications!' });
    }
};

const generateCreatorRecipes = async (_req: Request, res: Response) => {
    try {
        await creatorSeeder.generateCreatorRecipes();
        res.status(HttpStatusCode.Created).json({ message: 'Creator Recipes has been generated successfully!' });
    } catch (error) {
        res.status(HttpStatusCode.InternalServerError).json({ message: 'Failed to generate notifications!' });
    }
};

const generateApiKey = async (_req: Request, res: Response) => {
    try {
        const apiKey = await adminService.generateApiKey();
        res.status(HttpStatusCode.Created).json({ apiKey });
    } catch (error) {
        res.status(HttpStatusCode.InternalServerError).json({ message: 'Failed to generate notifications!' });
    }
};

export const adminController = {
    generateCreatorRecipes,
    generateNotifications,
    generateCreators,
    generateRecipes,
    generateApiKey,
};
