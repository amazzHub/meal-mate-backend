import { Request, Response } from "express";
import { HttpStatusCode } from "axios";
import { notificationService } from "../services/notification.service";

const fetchNotifications = async (_req: Request, res: Response) => {
    try {
        const response = await notificationService.getAllNotifications();
        return res.status(HttpStatusCode.Ok).json(response);
    } catch (error) {
        return res.status(HttpStatusCode.InternalServerError).send({ message: 'Something went wrong! Please try again later' });
    }
};

const fetchCreatorNotifications = async (req: Request, res: Response) => {
    try {
        const creatorId = req.query.id;
        const response = await notificationService.getCreatorNotifications(creatorId as string);
        if (!response) {
            return res.status(HttpStatusCode.NotFound).json({ message: 'Notification not found' });
        }
        return res.status(HttpStatusCode.Ok).json(response);
    } catch (error) {
        return res.status(HttpStatusCode.InternalServerError).send({ message: 'Something went wrong! Please try again later' });
    }
};

const fetchNotificationDetails = async (req: Request, res: Response) => {
    try {
        const notificationId = req.query.id;
        const response = await notificationService.getNotificationDetails(notificationId as string);
        if (!response) {
            return res.status(HttpStatusCode.NotFound).json({ message: 'Notification not found' });
        }
        return res.status(HttpStatusCode.Ok).json(response);
    } catch (error) {
        return res.status(HttpStatusCode.InternalServerError).send({ message: 'Something went wrong! Please try again later' });
    }
};

export const notificationController = {
    fetchNotifications,
    fetchCreatorNotifications,
    fetchNotificationDetails
};
