import { CreatorSchema, ICreator } from "../database/schemas/creator.schema";

const getCreators = async (count: number) => {
    try {
        return await CreatorSchema.find({}).limit(count);
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

const getPopularCreators = async () => {
    try {
        return await CreatorSchema.find({ followers: { $gte: 300 } }).limit(8);
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

const getCreatorProfile = (email: string): Promise<ICreator | null> => {
    return CreatorSchema.findOne({ email }).lean();
};

export const creatorService = {
    getCreators,
    getPopularCreators,
    getCreatorProfile
}