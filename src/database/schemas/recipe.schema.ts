import { Schema, model } from 'mongoose';

export type Ingredient = {
    name: string;
    grams: number;
};

export type IRecipeCreator = {
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

export type IRecipe = {
    _id?: string;
    name: string;
    ingredients: Ingredient;
    rating: number;
    creator: IRecipeCreator;
    title: string;
    preparationTime: number;
    views: number;
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
        rating: {
            type: Number
        },
        creator: {
            type: Object,
            required: true,
        },
        title: {
            type: String,
        },
        preparationTime: {
            type: Number,
        },
        views: {
            type: Number,
        },
    },
    { timestamps: true }
);

export const RecipeSchema = model('recipe', Recipe);
