import { CreatorSchema, ICreator } from "../database/schemas/creator.schema";

const getCreators = (count: number): Promise<ICreator[]> | [] => {
    try {
        return CreatorSchema.find({}).limit(count).lean();
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

const getPopularCreators = (): Promise<ICreator[]> | [] => {
    try {
        return CreatorSchema.find({ followersCount: { $gte: 300 } }).limit(8).lean();
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

const getCreatorProfile = (email: string): Promise<ICreator | null> => {
    return CreatorSchema.findOne({ email }).lean();
};

const getRandomCreator = (): Promise<ICreator | null> => {
    return CreatorSchema.findOne({}).lean();
};


export const creatorService = {
    getCreators,
    getPopularCreators,
    getCreatorProfile,
    getRandomCreator
}