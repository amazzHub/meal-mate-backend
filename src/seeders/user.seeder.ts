import { faker } from "@faker-js/faker";
import { CreatorSchema } from "../database/schemas/user.schema";

const generateRandomUsers = (numUsers: number) => {
    const users = [];

    for (let i = 0; i < numUsers; i++) {
        users.push(
            {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                location: `${faker.location.city()}, ${faker.location.country()}`,
                avatar: faker.image.avatar(),
                about: faker.lorem.sentence(),
                email: faker.internet.email(),
                isVerified: faker.datatype.boolean(),
                recipes: [],
                followers: faker.number.int({ min: 0, max: 1000 }),
                following: faker.number.int({ min: 0, max: 1000 }),
            }
        );
    }
    return users;
};

export const generateUsers = async (userCount: number) => {
    try {
        await CreatorSchema.deleteMany({});
        console.log("Existing users cleared");

        const randomUsers = generateRandomUsers(userCount);

        await CreatorSchema.insertMany(randomUsers);
        console.log("User data seeded successfully");
    } catch (error) {
        throw error;
    }
};

export const userSeeder = {
    generateUsers,
}