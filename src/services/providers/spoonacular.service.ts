import { spoonacularApi } from "./spoonacular.interceptor";

const getRandomRecipes = async () => {
    const route = 'recipes/random';
    const response = await spoonacularApi.get(route);
    console.log('response.data: ', response.data)

    return response.data;
};

export const spoonacularService = {
    getRandomRecipes,
};