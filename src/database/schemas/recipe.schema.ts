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
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/chicken-meal.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJGMEQCIESO2ghHqhbw62P4G%2FyXVFfLbpzE%2B4zJlzVYpCM3LqioAiAVateue%2BhKJj%2FU5bbb7oDrSlHlFi8%2BXfqyvAItW0uw3irkAggaEAAaDDkyMTk4ODAwNTQxNiIMr3zOGMupTSuar7R8KsEC%2FKp4Z9%2FsDzAE17ITcSNft388uW8ctLDeMjNa4mH7kmdDLveKz5A8IsC2OCC09bnoTwIEe%2F3FskIhGlBIQYJDN6ueVVXapzjFueauXAQnVe9%2Fly1CkugCNY5GHZpvUJaX5fJvZb4gCd2oE5oEmRAfWynA%2BcLr7Yb11NJoldzwsyeoTLQ4eZ1coLNJa88YpSoGo5%2FrnDA7k6YpjQX%2FbIW6BhOEr9%2FAS5NRDEQHpasytIKAvauvT6XDRWDW0o4dwgH1AejFwc8k0ntJr7bbec%2FUrtlzw1HNbJzv2TZMdC1mrmWyf3pIyG9gFxjjSvCeMN8J1K1zOF%2B4iBPFYfPUaI7jCk%2BofO1H70cKzdrwksVu2t8ybeBz4CNhqzQXZfrl5ALHF03JG9YktlFUwf2uMhuKbS9bQeDfJSQmRyJkV3CK8n3HMPGJ3asGOrQC6aEQgb3gi3YKPgR7y4Y8H7GDYKzj7anNO5q6R5%2FQWClhk5wJ5xVyDxTdBLBGI1oeFW4TGDSo7ZL0iXEouK762evZCBMLXV1rpvGgh0vwaPpcr61Xm5gj4xRroLEg6m%2FhNcicwhzzighp90Q43y4SaDc4pPNLDlpd%2BJNT7t7Q4f5YTZ9G%2FWsjV0fFEhevmV7OZ3bmvyKCj8XeqJXnChDQhYM3%2F%2B3ogrJkVzXErND6oAH7DPT1KQcz3sOZjjeZ5USLGs8G%2B2JvjnK%2FReLOJL8%2FFwLH4PD%2BtKLLjJTZ1x455GEi3EYQo4XHGBEFnifPn9t%2BoYFCJPPfTpHfRf34v57Jad1bfekL1%2Bs2mM7O3qkEHu4PR3ejowMkZ%2BUnFaoCN8Ha7m%2BvrvpbtVT8qW0tAoUvTiGqDyA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231211T172221Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5NKWEPYUAYR3OM55%2F20231211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=408de12782cc13d1023f911c518e79803f7573cf9ff4acbc34fb6a827bfa7187',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/club-sandwich.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJGMEQCIESO2ghHqhbw62P4G%2FyXVFfLbpzE%2B4zJlzVYpCM3LqioAiAVateue%2BhKJj%2FU5bbb7oDrSlHlFi8%2BXfqyvAItW0uw3irkAggaEAAaDDkyMTk4ODAwNTQxNiIMr3zOGMupTSuar7R8KsEC%2FKp4Z9%2FsDzAE17ITcSNft388uW8ctLDeMjNa4mH7kmdDLveKz5A8IsC2OCC09bnoTwIEe%2F3FskIhGlBIQYJDN6ueVVXapzjFueauXAQnVe9%2Fly1CkugCNY5GHZpvUJaX5fJvZb4gCd2oE5oEmRAfWynA%2BcLr7Yb11NJoldzwsyeoTLQ4eZ1coLNJa88YpSoGo5%2FrnDA7k6YpjQX%2FbIW6BhOEr9%2FAS5NRDEQHpasytIKAvauvT6XDRWDW0o4dwgH1AejFwc8k0ntJr7bbec%2FUrtlzw1HNbJzv2TZMdC1mrmWyf3pIyG9gFxjjSvCeMN8J1K1zOF%2B4iBPFYfPUaI7jCk%2BofO1H70cKzdrwksVu2t8ybeBz4CNhqzQXZfrl5ALHF03JG9YktlFUwf2uMhuKbS9bQeDfJSQmRyJkV3CK8n3HMPGJ3asGOrQC6aEQgb3gi3YKPgR7y4Y8H7GDYKzj7anNO5q6R5%2FQWClhk5wJ5xVyDxTdBLBGI1oeFW4TGDSo7ZL0iXEouK762evZCBMLXV1rpvGgh0vwaPpcr61Xm5gj4xRroLEg6m%2FhNcicwhzzighp90Q43y4SaDc4pPNLDlpd%2BJNT7t7Q4f5YTZ9G%2FWsjV0fFEhevmV7OZ3bmvyKCj8XeqJXnChDQhYM3%2F%2B3ogrJkVzXErND6oAH7DPT1KQcz3sOZjjeZ5USLGs8G%2B2JvjnK%2FReLOJL8%2FFwLH4PD%2BtKLLjJTZ1x455GEi3EYQo4XHGBEFnifPn9t%2BoYFCJPPfTpHfRf34v57Jad1bfekL1%2Bs2mM7O3qkEHu4PR3ejowMkZ%2BUnFaoCN8Ha7m%2BvrvpbtVT8qW0tAoUvTiGqDyA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231211T172521Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5NKWEPYUAYR3OM55%2F20231211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=ee03351729f5f8b8441e1217d5a728cf67a05e9a5ccba44d6eec564d8f533166',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/french-toast.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJGMEQCIESO2ghHqhbw62P4G%2FyXVFfLbpzE%2B4zJlzVYpCM3LqioAiAVateue%2BhKJj%2FU5bbb7oDrSlHlFi8%2BXfqyvAItW0uw3irkAggaEAAaDDkyMTk4ODAwNTQxNiIMr3zOGMupTSuar7R8KsEC%2FKp4Z9%2FsDzAE17ITcSNft388uW8ctLDeMjNa4mH7kmdDLveKz5A8IsC2OCC09bnoTwIEe%2F3FskIhGlBIQYJDN6ueVVXapzjFueauXAQnVe9%2Fly1CkugCNY5GHZpvUJaX5fJvZb4gCd2oE5oEmRAfWynA%2BcLr7Yb11NJoldzwsyeoTLQ4eZ1coLNJa88YpSoGo5%2FrnDA7k6YpjQX%2FbIW6BhOEr9%2FAS5NRDEQHpasytIKAvauvT6XDRWDW0o4dwgH1AejFwc8k0ntJr7bbec%2FUrtlzw1HNbJzv2TZMdC1mrmWyf3pIyG9gFxjjSvCeMN8J1K1zOF%2B4iBPFYfPUaI7jCk%2BofO1H70cKzdrwksVu2t8ybeBz4CNhqzQXZfrl5ALHF03JG9YktlFUwf2uMhuKbS9bQeDfJSQmRyJkV3CK8n3HMPGJ3asGOrQC6aEQgb3gi3YKPgR7y4Y8H7GDYKzj7anNO5q6R5%2FQWClhk5wJ5xVyDxTdBLBGI1oeFW4TGDSo7ZL0iXEouK762evZCBMLXV1rpvGgh0vwaPpcr61Xm5gj4xRroLEg6m%2FhNcicwhzzighp90Q43y4SaDc4pPNLDlpd%2BJNT7t7Q4f5YTZ9G%2FWsjV0fFEhevmV7OZ3bmvyKCj8XeqJXnChDQhYM3%2F%2B3ogrJkVzXErND6oAH7DPT1KQcz3sOZjjeZ5USLGs8G%2B2JvjnK%2FReLOJL8%2FFwLH4PD%2BtKLLjJTZ1x455GEi3EYQo4XHGBEFnifPn9t%2BoYFCJPPfTpHfRf34v57Jad1bfekL1%2Bs2mM7O3qkEHu4PR3ejowMkZ%2BUnFaoCN8Ha7m%2BvrvpbtVT8qW0tAoUvTiGqDyA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231211T172532Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5NKWEPYUAYR3OM55%2F20231211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=aca5bf942b20e57582ffe077ceceb1a0f9a93c127c99540ba7fd93bd304cb30f',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/italian-spaghetti.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJGMEQCIESO2ghHqhbw62P4G%2FyXVFfLbpzE%2B4zJlzVYpCM3LqioAiAVateue%2BhKJj%2FU5bbb7oDrSlHlFi8%2BXfqyvAItW0uw3irkAggaEAAaDDkyMTk4ODAwNTQxNiIMr3zOGMupTSuar7R8KsEC%2FKp4Z9%2FsDzAE17ITcSNft388uW8ctLDeMjNa4mH7kmdDLveKz5A8IsC2OCC09bnoTwIEe%2F3FskIhGlBIQYJDN6ueVVXapzjFueauXAQnVe9%2Fly1CkugCNY5GHZpvUJaX5fJvZb4gCd2oE5oEmRAfWynA%2BcLr7Yb11NJoldzwsyeoTLQ4eZ1coLNJa88YpSoGo5%2FrnDA7k6YpjQX%2FbIW6BhOEr9%2FAS5NRDEQHpasytIKAvauvT6XDRWDW0o4dwgH1AejFwc8k0ntJr7bbec%2FUrtlzw1HNbJzv2TZMdC1mrmWyf3pIyG9gFxjjSvCeMN8J1K1zOF%2B4iBPFYfPUaI7jCk%2BofO1H70cKzdrwksVu2t8ybeBz4CNhqzQXZfrl5ALHF03JG9YktlFUwf2uMhuKbS9bQeDfJSQmRyJkV3CK8n3HMPGJ3asGOrQC6aEQgb3gi3YKPgR7y4Y8H7GDYKzj7anNO5q6R5%2FQWClhk5wJ5xVyDxTdBLBGI1oeFW4TGDSo7ZL0iXEouK762evZCBMLXV1rpvGgh0vwaPpcr61Xm5gj4xRroLEg6m%2FhNcicwhzzighp90Q43y4SaDc4pPNLDlpd%2BJNT7t7Q4f5YTZ9G%2FWsjV0fFEhevmV7OZ3bmvyKCj8XeqJXnChDQhYM3%2F%2B3ogrJkVzXErND6oAH7DPT1KQcz3sOZjjeZ5USLGs8G%2B2JvjnK%2FReLOJL8%2FFwLH4PD%2BtKLLjJTZ1x455GEi3EYQo4XHGBEFnifPn9t%2BoYFCJPPfTpHfRf34v57Jad1bfekL1%2Bs2mM7O3qkEHu4PR3ejowMkZ%2BUnFaoCN8Ha7m%2BvrvpbtVT8qW0tAoUvTiGqDyA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231211T172542Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5NKWEPYUAYR3OM55%2F20231211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=db46750170eca13833e0aee22ca08c8cc753a299f720d45a77b059d2362258cd',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/japanese-rice.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJGMEQCIESO2ghHqhbw62P4G%2FyXVFfLbpzE%2B4zJlzVYpCM3LqioAiAVateue%2BhKJj%2FU5bbb7oDrSlHlFi8%2BXfqyvAItW0uw3irkAggaEAAaDDkyMTk4ODAwNTQxNiIMr3zOGMupTSuar7R8KsEC%2FKp4Z9%2FsDzAE17ITcSNft388uW8ctLDeMjNa4mH7kmdDLveKz5A8IsC2OCC09bnoTwIEe%2F3FskIhGlBIQYJDN6ueVVXapzjFueauXAQnVe9%2Fly1CkugCNY5GHZpvUJaX5fJvZb4gCd2oE5oEmRAfWynA%2BcLr7Yb11NJoldzwsyeoTLQ4eZ1coLNJa88YpSoGo5%2FrnDA7k6YpjQX%2FbIW6BhOEr9%2FAS5NRDEQHpasytIKAvauvT6XDRWDW0o4dwgH1AejFwc8k0ntJr7bbec%2FUrtlzw1HNbJzv2TZMdC1mrmWyf3pIyG9gFxjjSvCeMN8J1K1zOF%2B4iBPFYfPUaI7jCk%2BofO1H70cKzdrwksVu2t8ybeBz4CNhqzQXZfrl5ALHF03JG9YktlFUwf2uMhuKbS9bQeDfJSQmRyJkV3CK8n3HMPGJ3asGOrQC6aEQgb3gi3YKPgR7y4Y8H7GDYKzj7anNO5q6R5%2FQWClhk5wJ5xVyDxTdBLBGI1oeFW4TGDSo7ZL0iXEouK762evZCBMLXV1rpvGgh0vwaPpcr61Xm5gj4xRroLEg6m%2FhNcicwhzzighp90Q43y4SaDc4pPNLDlpd%2BJNT7t7Q4f5YTZ9G%2FWsjV0fFEhevmV7OZ3bmvyKCj8XeqJXnChDQhYM3%2F%2B3ogrJkVzXErND6oAH7DPT1KQcz3sOZjjeZ5USLGs8G%2B2JvjnK%2FReLOJL8%2FFwLH4PD%2BtKLLjJTZ1x455GEi3EYQo4XHGBEFnifPn9t%2BoYFCJPPfTpHfRf34v57Jad1bfekL1%2Bs2mM7O3qkEHu4PR3ejowMkZ%2BUnFaoCN8Ha7m%2BvrvpbtVT8qW0tAoUvTiGqDyA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231211T172550Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5NKWEPYUAYR3OM55%2F20231211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=1f69bda72f7d3c4cb92d72e0ab4c84b7dd6530be5e832ae05e5bb5b9ff9fe735',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/oat-meal.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJGMEQCIESO2ghHqhbw62P4G%2FyXVFfLbpzE%2B4zJlzVYpCM3LqioAiAVateue%2BhKJj%2FU5bbb7oDrSlHlFi8%2BXfqyvAItW0uw3irkAggaEAAaDDkyMTk4ODAwNTQxNiIMr3zOGMupTSuar7R8KsEC%2FKp4Z9%2FsDzAE17ITcSNft388uW8ctLDeMjNa4mH7kmdDLveKz5A8IsC2OCC09bnoTwIEe%2F3FskIhGlBIQYJDN6ueVVXapzjFueauXAQnVe9%2Fly1CkugCNY5GHZpvUJaX5fJvZb4gCd2oE5oEmRAfWynA%2BcLr7Yb11NJoldzwsyeoTLQ4eZ1coLNJa88YpSoGo5%2FrnDA7k6YpjQX%2FbIW6BhOEr9%2FAS5NRDEQHpasytIKAvauvT6XDRWDW0o4dwgH1AejFwc8k0ntJr7bbec%2FUrtlzw1HNbJzv2TZMdC1mrmWyf3pIyG9gFxjjSvCeMN8J1K1zOF%2B4iBPFYfPUaI7jCk%2BofO1H70cKzdrwksVu2t8ybeBz4CNhqzQXZfrl5ALHF03JG9YktlFUwf2uMhuKbS9bQeDfJSQmRyJkV3CK8n3HMPGJ3asGOrQC6aEQgb3gi3YKPgR7y4Y8H7GDYKzj7anNO5q6R5%2FQWClhk5wJ5xVyDxTdBLBGI1oeFW4TGDSo7ZL0iXEouK762evZCBMLXV1rpvGgh0vwaPpcr61Xm5gj4xRroLEg6m%2FhNcicwhzzighp90Q43y4SaDc4pPNLDlpd%2BJNT7t7Q4f5YTZ9G%2FWsjV0fFEhevmV7OZ3bmvyKCj8XeqJXnChDQhYM3%2F%2B3ogrJkVzXErND6oAH7DPT1KQcz3sOZjjeZ5USLGs8G%2B2JvjnK%2FReLOJL8%2FFwLH4PD%2BtKLLjJTZ1x455GEi3EYQo4XHGBEFnifPn9t%2BoYFCJPPfTpHfRf34v57Jad1bfekL1%2Bs2mM7O3qkEHu4PR3ejowMkZ%2BUnFaoCN8Ha7m%2BvrvpbtVT8qW0tAoUvTiGqDyA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231211T172604Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5NKWEPYUAYR3OM55%2F20231211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e6060a7a87dbc7d57a9e19ca72e896c9459dc9747bd4be6ff92f5c2d95b4ce50',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/sushi.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJGMEQCIESO2ghHqhbw62P4G%2FyXVFfLbpzE%2B4zJlzVYpCM3LqioAiAVateue%2BhKJj%2FU5bbb7oDrSlHlFi8%2BXfqyvAItW0uw3irkAggaEAAaDDkyMTk4ODAwNTQxNiIMr3zOGMupTSuar7R8KsEC%2FKp4Z9%2FsDzAE17ITcSNft388uW8ctLDeMjNa4mH7kmdDLveKz5A8IsC2OCC09bnoTwIEe%2F3FskIhGlBIQYJDN6ueVVXapzjFueauXAQnVe9%2Fly1CkugCNY5GHZpvUJaX5fJvZb4gCd2oE5oEmRAfWynA%2BcLr7Yb11NJoldzwsyeoTLQ4eZ1coLNJa88YpSoGo5%2FrnDA7k6YpjQX%2FbIW6BhOEr9%2FAS5NRDEQHpasytIKAvauvT6XDRWDW0o4dwgH1AejFwc8k0ntJr7bbec%2FUrtlzw1HNbJzv2TZMdC1mrmWyf3pIyG9gFxjjSvCeMN8J1K1zOF%2B4iBPFYfPUaI7jCk%2BofO1H70cKzdrwksVu2t8ybeBz4CNhqzQXZfrl5ALHF03JG9YktlFUwf2uMhuKbS9bQeDfJSQmRyJkV3CK8n3HMPGJ3asGOrQC6aEQgb3gi3YKPgR7y4Y8H7GDYKzj7anNO5q6R5%2FQWClhk5wJ5xVyDxTdBLBGI1oeFW4TGDSo7ZL0iXEouK762evZCBMLXV1rpvGgh0vwaPpcr61Xm5gj4xRroLEg6m%2FhNcicwhzzighp90Q43y4SaDc4pPNLDlpd%2BJNT7t7Q4f5YTZ9G%2FWsjV0fFEhevmV7OZ3bmvyKCj8XeqJXnChDQhYM3%2F%2B3ogrJkVzXErND6oAH7DPT1KQcz3sOZjjeZ5USLGs8G%2B2JvjnK%2FReLOJL8%2FFwLH4PD%2BtKLLjJTZ1x455GEi3EYQo4XHGBEFnifPn9t%2BoYFCJPPfTpHfRf34v57Jad1bfekL1%2Bs2mM7O3qkEHu4PR3ejowMkZ%2BUnFaoCN8Ha7m%2BvrvpbtVT8qW0tAoUvTiGqDyA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231211T172614Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5NKWEPYUAYR3OM55%2F20231211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=1475a4d52a7729c4f0bc7f86879f4cc0f91a93336807b0febd1e66512ff05a3e'
];

export const ingredientIconUris = [
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/%20sushi-icon.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJGMEQCIESO2ghHqhbw62P4G%2FyXVFfLbpzE%2B4zJlzVYpCM3LqioAiAVateue%2BhKJj%2FU5bbb7oDrSlHlFi8%2BXfqyvAItW0uw3irkAggaEAAaDDkyMTk4ODAwNTQxNiIMr3zOGMupTSuar7R8KsEC%2FKp4Z9%2FsDzAE17ITcSNft388uW8ctLDeMjNa4mH7kmdDLveKz5A8IsC2OCC09bnoTwIEe%2F3FskIhGlBIQYJDN6ueVVXapzjFueauXAQnVe9%2Fly1CkugCNY5GHZpvUJaX5fJvZb4gCd2oE5oEmRAfWynA%2BcLr7Yb11NJoldzwsyeoTLQ4eZ1coLNJa88YpSoGo5%2FrnDA7k6YpjQX%2FbIW6BhOEr9%2FAS5NRDEQHpasytIKAvauvT6XDRWDW0o4dwgH1AejFwc8k0ntJr7bbec%2FUrtlzw1HNbJzv2TZMdC1mrmWyf3pIyG9gFxjjSvCeMN8J1K1zOF%2B4iBPFYfPUaI7jCk%2BofO1H70cKzdrwksVu2t8ybeBz4CNhqzQXZfrl5ALHF03JG9YktlFUwf2uMhuKbS9bQeDfJSQmRyJkV3CK8n3HMPGJ3asGOrQC6aEQgb3gi3YKPgR7y4Y8H7GDYKzj7anNO5q6R5%2FQWClhk5wJ5xVyDxTdBLBGI1oeFW4TGDSo7ZL0iXEouK762evZCBMLXV1rpvGgh0vwaPpcr61Xm5gj4xRroLEg6m%2FhNcicwhzzighp90Q43y4SaDc4pPNLDlpd%2BJNT7t7Q4f5YTZ9G%2FWsjV0fFEhevmV7OZ3bmvyKCj8XeqJXnChDQhYM3%2F%2B3ogrJkVzXErND6oAH7DPT1KQcz3sOZjjeZ5USLGs8G%2B2JvjnK%2FReLOJL8%2FFwLH4PD%2BtKLLjJTZ1x455GEi3EYQo4XHGBEFnifPn9t%2BoYFCJPPfTpHfRf34v57Jad1bfekL1%2Bs2mM7O3qkEHu4PR3ejowMkZ%2BUnFaoCN8Ha7m%2BvrvpbtVT8qW0tAoUvTiGqDyA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231211T174225Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5NKWEPYUAYR3OM55%2F20231211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=3fa55181d8737a3eedf41b724414b8b693d2e9e67db8aa3921341575a69d1e2f',
    'https://recipe-mobile.s3.us-west-2.amazonaws.com/noodles-icon.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJGMEQCIESO2ghHqhbw62P4G%2FyXVFfLbpzE%2B4zJlzVYpCM3LqioAiAVateue%2BhKJj%2FU5bbb7oDrSlHlFi8%2BXfqyvAItW0uw3irkAggaEAAaDDkyMTk4ODAwNTQxNiIMr3zOGMupTSuar7R8KsEC%2FKp4Z9%2FsDzAE17ITcSNft388uW8ctLDeMjNa4mH7kmdDLveKz5A8IsC2OCC09bnoTwIEe%2F3FskIhGlBIQYJDN6ueVVXapzjFueauXAQnVe9%2Fly1CkugCNY5GHZpvUJaX5fJvZb4gCd2oE5oEmRAfWynA%2BcLr7Yb11NJoldzwsyeoTLQ4eZ1coLNJa88YpSoGo5%2FrnDA7k6YpjQX%2FbIW6BhOEr9%2FAS5NRDEQHpasytIKAvauvT6XDRWDW0o4dwgH1AejFwc8k0ntJr7bbec%2FUrtlzw1HNbJzv2TZMdC1mrmWyf3pIyG9gFxjjSvCeMN8J1K1zOF%2B4iBPFYfPUaI7jCk%2BofO1H70cKzdrwksVu2t8ybeBz4CNhqzQXZfrl5ALHF03JG9YktlFUwf2uMhuKbS9bQeDfJSQmRyJkV3CK8n3HMPGJ3asGOrQC6aEQgb3gi3YKPgR7y4Y8H7GDYKzj7anNO5q6R5%2FQWClhk5wJ5xVyDxTdBLBGI1oeFW4TGDSo7ZL0iXEouK762evZCBMLXV1rpvGgh0vwaPpcr61Xm5gj4xRroLEg6m%2FhNcicwhzzighp90Q43y4SaDc4pPNLDlpd%2BJNT7t7Q4f5YTZ9G%2FWsjV0fFEhevmV7OZ3bmvyKCj8XeqJXnChDQhYM3%2F%2B3ogrJkVzXErND6oAH7DPT1KQcz3sOZjjeZ5USLGs8G%2B2JvjnK%2FReLOJL8%2FFwLH4PD%2BtKLLjJTZ1x455GEi3EYQo4XHGBEFnifPn9t%2BoYFCJPPfTpHfRf34v57Jad1bfekL1%2Bs2mM7O3qkEHu4PR3ejowMkZ%2BUnFaoCN8Ha7m%2BvrvpbtVT8qW0tAoUvTiGqDyA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231211T174257Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5NKWEPYUAYR3OM55%2F20231211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=41708d2eca4bb0a6a7668d6de0bde29c76f899533c27eb38efaad3192638ec85'
]