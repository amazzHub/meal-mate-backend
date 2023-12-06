import { faker } from "@faker-js/faker";
import { ENotificationType, INotification, NotificationSchema } from "../database/schemas/notification.schema";
import { creatorService } from "../services/creator.service";

const getRandomNotificationType = () => {
    const enumValues = Object.values(ENotificationType).filter(value => typeof value === 'number');
    return enumValues[Math.floor(Math.random() * enumValues.length)] as ENotificationType;
};

const generateRandomNotifications = async (count: number) => {
    const notifications: INotification[] = [];
    const creators = await creatorService.getCreators(count)
    for (let i = 0; i < count; i++) {
        const creator = creators[Math.floor(Math.random() * creators.length)];
        notifications.push(
            {
                creatorId: creator._id,
                title: faker.lorem.sentence(),
                body: faker.lorem.paragraph(),
                type: getRandomNotificationType()
            }
        );
    }
    return notifications;
};

export const generateNotifications = async (count: number) => {
    try {
        await NotificationSchema.deleteMany({});
        console.log("Existing notifications cleared");

        const randomNotifications = await generateRandomNotifications(count);

        await NotificationSchema.insertMany(randomNotifications);
        console.log("Notifications data seeded successfully");
    } catch (error) {
        throw error;
    }
};

export const notificationSeeder = {
    generateNotifications,
};
