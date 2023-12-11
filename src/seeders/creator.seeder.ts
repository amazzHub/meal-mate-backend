import { faker } from "@faker-js/faker";
import { CreatorSchema, ICreator } from "../database/schemas/creator.schema";

const generateRandomCreators = (numCreators: number) => {
    const creators: ICreator[] = [];

    for (let i = 0; i < numCreators; i++) {
        creators.push(
            {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                location: `${faker.location.city()}, ${faker.location.country()}`,
                avatar: faker.image.avatar(),
                about: faker.lorem.sentence(),
                email: faker.internet.email().toLowerCase(),
                isVerified: faker.datatype.boolean(),
                recipesCount: faker.number.int({ min: 10, max: 50 }),
                followersCount: faker.number.int({ min: 10, max: 1000 }),
                followingCount: faker.number.int({ min: 10, max: 1000 }),
            }
        );
    }
    return creators;
};

export const generateCreators = async (creatorCount: number) => {
    try {
        await CreatorSchema.deleteMany({});
        console.log("Existing creators cleared");

        const randomCreators = generateRandomCreators(creatorCount);

        await CreatorSchema.insertMany(randomCreators);
        console.log("Creator data seeded successfully");
    } catch (error) {
        throw error;
    }
};

export const creatorSeeder = {
    generateCreators,
};
