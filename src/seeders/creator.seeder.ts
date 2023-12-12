import { faker } from "@faker-js/faker";
import { CreatorSchema, ICreator } from "../database/schemas/creator.schema";
import { RecipeSchema } from "../database/schemas/recipe.schema";

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
                recipes: [],
                followersCount: faker.number.int({ min: 10, max: 1000 }),
                followingCount: faker.number.int({ min: 10, max: 1000 }),
            }
        );
    }
    return creators;
};

const generateCreators = async (creatorCount: number) => {
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

const generateCreatorRecipes = async () => {
    try {
        await CreatorSchema.updateMany({}, { $set: { recipes: [] } });
        console.log("Existing creators recipes are cleared");
        const totalCreators = await CreatorSchema.find({}).lean();
        console.log('fetched ', totalCreators.length);

        for (const creator of totalCreators) {
            const creatorRecipes = await RecipeSchema.find({ 'creator.email': creator.email });
            await CreatorSchema.updateOne({ _id: creator._id }, { $set: { recipes: creatorRecipes } })
        }
        console.log("Creator data seeded successfully");
    } catch (error) {
        throw error;
    }
};

export const creatorSeeder = {
    generateCreators,
    generateCreatorRecipes
};
