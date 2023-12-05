import { Request, Response } from "express";
import { adminService } from "../services/admin.service";

export const generateUsers = async (req: Request, res: Response) => {
    try {
        await adminService.generateUsers(req.query.userCount as any);
        res.status(201).send({ message: 'Users generated successfully!' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to generate users!' });
    }
}

export const adminController = {
    generateUsers,
};