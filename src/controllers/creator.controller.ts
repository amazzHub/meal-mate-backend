import { Request, Response } from "express";
import { HttpStatusCode } from "axios";
import { creatorService } from "../services/creator.service";

const fetchAllCreators = async (_req: Request, res: Response) => {
    try {
        const response = await creatorService.getCreators(10);
        return res.status(HttpStatusCode.Ok).json(response);
    } catch (error) {
        return res.status(HttpStatusCode.InternalServerError).json({ message: 'Something went wrong! Please try again later' });
    }
};

const fetchPopularCreators = async (_req: Request, res: Response) => {
    try {
        const response = await creatorService.getPopularCreators();
        return res.status(HttpStatusCode.Ok).json(response);
    } catch (error) {
        return res.status(HttpStatusCode.InternalServerError).json({ message: 'Something went wrong! Please try again later' });
    }
};

const fetchCreatorProfile = async (req: Request, res: Response) => {
    try {
        const response = await creatorService.getCreatorProfile((req.query as any).email.toLowerCase());
        return res.status(HttpStatusCode.Ok).json(response);
    } catch (error) {
        return res.status(HttpStatusCode.InternalServerError).json({ message: 'Something went wrong! Please try again later' });
    }
};

const fetchRandomCreatorProfile = async (req: Request, res: Response) => {
    try {
        const response = await creatorService.getRandomCreator();
        return res.status(HttpStatusCode.Ok).json(response);
    } catch (error) {
        return res.status(HttpStatusCode.InternalServerError).json({ message: 'Something went wrong! Please try again later' });
    }
};

export const creatorController = {
    fetchAllCreators,
    fetchPopularCreators,
    fetchCreatorProfile,
    fetchRandomCreatorProfile
};
