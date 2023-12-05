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
    recipes: [];
    followers: number;
    following: number;
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
        recipes: Array,
        followers: {
            type: Number,
        },
        following: {
            type: Number,
        },
    },
    { timestamps: true }
);

export const CreatorSchema = model('Creator', Creator);
