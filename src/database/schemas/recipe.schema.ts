import { Schema, model } from 'mongoose';

export type Ingredient = {
    name: string;
    grams: number;
    iconUri: string;
};

export type IRecipeCreator = {
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
};

export type IRecipe = {
    _id?: string;
    name: string;
    ingredients: Ingredient;
    rating: number;
    creator: IRecipeCreator;
    title: string;
    preparationTime: number;
    views: number;
    coverImageUri: string;
    uri: string;
    createdAt?: string;
    updatedAt?: string;
};

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
        coverImageUri: {
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
        uri: {
            type: String,
        }
    },
    { timestamps: true }
);

export const RecipeSchema = model('Recipe', Recipe);

export const recipeCoverUris = [
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/chicken-meal.png',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/club-sandwich.png',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/french-toast.png',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/italian-spaghetti.png',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/japanese-rice.png',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/oat-meal.png',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/sushi.png'
];

export const ingredientIconUris = [
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/sushi-icon.png',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/noodles-icon.png',
]