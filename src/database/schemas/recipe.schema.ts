import { Schema } from 'mongoose';

export const recipesSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        ingredients: {
            type: Array,
            required: true,
        },
        ratings: {
            type: String
        },
        ownerEmail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
        },
        preparationTime: {
            type: Number,
        },
        recipes: Array,
    },
    { timestamps: true }
);