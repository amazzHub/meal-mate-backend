import { seedUsers } from "../seeders/user.seeder"

export const generateUsers = async (userCount: number) => {
    return await seedUsers(userCount);
}

export const adminService = {
    generateUsers,
};