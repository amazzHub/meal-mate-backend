import { spoonacularApi } from "./spoonacular.interceptor";

const getRandomRecipes = async (recipesCount: number) => {
    const route = 'recipes/random';
    const response = await spoonacularApi.get(
        route,
        {
            params: {
                number: recipesCount
            }
        }
    );
    return response.data.recipes;
};


//Not working
const searchRecipe = async (q: string) => {
    try {
        const route = `/complexSearch?query=${encodeURIComponent(q)}&maxFat=25&number=2`;
        const response = await spoonacularApi.get(route);
        console.log('response.data: ', response.data);
        return response.data.results;
    } catch (error: any) {
        console.log('error: ', error.response.data);

    }
};

export const spoonacularService = {
    getRandomRecipes,
    searchRecipe
};