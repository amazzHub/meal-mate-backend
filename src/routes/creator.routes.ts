import { Router } from "express";
import { creatorController } from "../controllers/creator.controller";

export const creatorRoutes = Router();

creatorRoutes.get('/', creatorController.fetchAllCreators);
creatorRoutes.get('/profile', creatorController.fetchCreatorProfile);
creatorRoutes.get('/popular', creatorController.fetchPopularCreators);