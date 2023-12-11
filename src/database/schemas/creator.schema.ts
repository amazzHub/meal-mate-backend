import mongoose, { Schema, model } from 'mongoose';

export type ICreator = {
    _id?: mongoose.Types.ObjectId;
    email: string;
    firstName: string;
    lastName: string;
    location: string;
    avatar: string;
    about: string;
    isVerified: boolean;
    recipesCount: number;
    followersCount: number;
    followingCount: number;
    createdAt?: string;
    updatedAt?: string;
}

export const Creator: Schema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        avatar: {
            type: String
        },
        about: {
            type: String,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        recipesCount: {
            type: Number,
        },
        followersCount: {
            type: Number,
        },
        followingCount: {
            type: Number,
        },
    },
    { timestamps: true }
);

export const CreatorSchema = model('Creator', Creator);
