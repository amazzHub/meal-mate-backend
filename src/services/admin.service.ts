import crypto from 'crypto';
import { ApiKeySchema } from '../database/schemas/apiKey.schema';

const generateApiKey = () => {
    const key = crypto.randomBytes(16).toString('hex');
    return new ApiKeySchema({ key }).save();
};

export const adminService = {
    generateApiKey,
}