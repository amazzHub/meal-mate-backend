import { CreatorSchema } from "../database/schemas/creator.schema";

const getCreators = async (count: number) => {
    try {
        return await CreatorSchema.find({}).limit(count);
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};


export const creatorService = {
    getCreators
}