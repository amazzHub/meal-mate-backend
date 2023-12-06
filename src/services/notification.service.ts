import { INotification, NotificationSchema } from "../database/schemas/notification.schema";

const getAllNotifications = (): Promise<INotification[]> => {
    return NotificationSchema.find({}).lean();
};

export const notificationService = {
    getAllNotifications,
};
