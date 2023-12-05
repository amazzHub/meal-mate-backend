import { CreatorSchema } from "../database/schemas/user.schema";

const getUsers = async (count: number) => {
    try {
        return await CreatorSchema.find({}).limit(count);
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};


export const userService = {
    getUsers
}