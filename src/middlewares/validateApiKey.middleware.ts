import { HttpStatusCode } from "axios";
import { NextFunction, Request, Response } from "express";
import { ApiKeySchema } from "../database/schemas/apiKey.schema";

export const verifyApiKey = async (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.header('x-api-key');
    if (!apiKey) {
        return res.status(HttpStatusCode.Unauthorized).send('API key is required');
    }

    try {
        const validKey = await ApiKeySchema.findOne({ key: apiKey }).lean();
        if (!validKey) {
            return res.status(HttpStatusCode.Unauthorized).send('Invalid API key');
        }
        next();
    } catch (error) {
        res.status(HttpStatusCode.InternalServerError).send('Server error');
    }
};
