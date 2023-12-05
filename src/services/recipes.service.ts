import { IRecipe, RecipeSchema } from "../database/schemas/recipe.schema";
import { spoonacularService } from "./providers/spoonacular.service";

const getAllRecipes = (): Promise<IRecipe[]> => {
    return RecipeSchema.find({}).lean();
};

const getRandomRecipes = async (recipesCount: number) => {
    return await spoonacularService.getRandomRecipes(recipesCount);
};

const searchRecipe = (q: string) => {
    return RecipeSchema.find(
        {
            name: {
                $regex: q,
                $options: 'i'
            }
        }
    );
}



export const recipesService = {
    getAllRecipes,
    getRandomRecipes,
    searchRecipe,
};