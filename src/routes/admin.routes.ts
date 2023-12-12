import { Router } from "express";
import { seedersRoutes } from "./seeders.routes";
import { adminController } from "../controllers/admin.controller";
import { verifyApiKey } from "../middlewares/validateApiKey.middleware";

export const adminRoutes = Router();

adminRoutes.use(verifyApiKey);
adminRoutes.use('/seeders', seedersRoutes);
adminRoutes.post('/api-key/generate', adminController.generateApiKey);
