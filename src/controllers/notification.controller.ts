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
}

export const notificationController = {
    fetchNotifications,
};
