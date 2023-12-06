import { Router } from "express";
import { notificationController } from "../controllers/notification.controller";

export const notificationRoutes = Router();

notificationRoutes.get('/', notificationController.fetchNotifications);
notificationRoutes.get('/creator', notificationController.fetchCreatorNotifications);
notificationRoutes.get('/details', notificationController.fetchNotificationDetails);
