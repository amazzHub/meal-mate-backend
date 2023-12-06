import { Router } from "express";
import { adminController } from "../controllers/admin.controller";

export const seedersRoutes = Router();

seedersRoutes.get('/creators', adminController.generateCreators);
seedersRoutes.get('/recipes', adminController.generateRecipes);
seedersRoutes.get('/notifications', adminController.generateNotifications);
