import { Router } from "express";
import { adminController } from "../controllers/admin.controller";

export const seedersRoutes = Router();

seedersRoutes.get('/users', adminController.generateUsers);
seedersRoutes.get('/recipes', adminController.generateRecipes);