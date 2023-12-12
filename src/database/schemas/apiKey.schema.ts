import mongoose, { Schema, model } from 'mongoose';

export const ApiKey: Schema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
            unique: true
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export const ApiKeySchema = mongoose.model('ApiKey', ApiKey);
