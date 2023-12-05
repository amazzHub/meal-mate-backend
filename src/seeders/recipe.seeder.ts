import { IRecipe, RecipeSchema } from '../database/schemas/recipe.schema';
import { faker } from '@faker-js/faker';
import { creatorService } from '../services/creator.service';
import { recipesService } from '../services/recipes.service';


const generateRecipes = async (count: number) => {
    try {
        await RecipeSchema.deleteMany({});
        console.log("Existing recipes cleared");

        const randomRecipesData = await recipesService.getRandomRecipes(count);
        const creators = await creatorService.getCreators(count)

        const recipePromises = randomRecipesData.map(
            async (recipe: any) => {
                const creator = creators[Math.floor(Math.random() * creators.length)];
                const recipeObj: IRecipe = {
                    name: recipe.title,
                    ingredients: recipe.extendedIngredients.map(
                        (ingredient: any) => (
                            {
                                name: ingredient.name,
                                grams: ingredient.measures.metric.amount
                            }
                        )
                    ),
                    rating: faker.number.int({ min: 1, max: 5 }),
                    creatorEmail: creator?.email,
                    title: recipe.title,
                    preparationTime: recipe.readyInMinutes
                };
                return recipeObj;
            }
        );
        const recipes = await Promise.all(recipePromises);

        await RecipeSchema.insertMany(recipes);
        console.log("Recipe data seeded successfully");
    } catch (error) {
        console.error("Error seeding recipe data:", error);
    }
};

export const recipeSeeder = {
    generateRecipes,
}