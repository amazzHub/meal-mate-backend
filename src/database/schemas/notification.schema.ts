import { Schema, model } from 'mongoose';

export enum ENotificationType {
    NEW_RECIPE = 1,
    REMINDER = 2,
}

export type INotification = {
    creatorId?: string;
    title: string;
    body: string;
    type: ENotificationType;
}

export const Notification: Schema = new Schema(
    {
        creatorId: {
            type: Object,
            default: null,
        },
        title: {
            type: String,
        },
        body: {
            type: String,
        },
        type: {
            type: String,
        }
    },
    { timestamps: true }
);

export const NotificationSchema = model('Notification', Notification);
