import { Types } from "mongoose";
import { INotification, NotificationSchema } from "../database/schemas/notification.schema";

const getAllNotifications = (): Promise<INotification[]> => {
    return NotificationSchema.find({}).lean();
};

const getCreatorNotifications = (creatorId: string): Promise<INotification[]> => {
    return NotificationSchema.find({ creatorId: new Types.ObjectId(creatorId) }).lean();
};

const getNotificationDetails = (_id: string): Promise<INotification | null> => {
    return NotificationSchema.findOne({ _id: new Types.ObjectId(_id) }).lean();
};

export const notificationService = {
    getAllNotifications,
    getCreatorNotifications,
    getNotificationDetails,
};
