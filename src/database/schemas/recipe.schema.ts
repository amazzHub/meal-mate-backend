import { Schema, model } from 'mongoose';

export type Ingredient = {
    name: string;
    grams: number;
}
export type IRecipe = {
    _id?: string;
    name: string;
    ingredients: Ingredient;
    rating: number;
    creatorEmail: string;
    title: string;
    preparationTime: number;
    createdAt?: string;
    updatedAt?: string;
}

export const Recipe: Schema = new Schema(
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
            type: Number
        },
        creatorEmail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
        },
        preparationTime: {
            type: Number,
        },
    },
    { timestamps: true }
);

export const RecipeSchema = model('recipe', Recipe);
