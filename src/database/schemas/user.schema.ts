import { Schema, model } from 'mongoose';

export const User: Schema = new Schema(
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

export const UserSchema = model('User', User);
