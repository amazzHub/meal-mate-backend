import { IRecipe, RecipeSchema } from '../database/schemas/recipe.schema';
import { faker } from '@faker-js/faker';
import { userService } from '../services/user.service';
import { recipesService } from '../services/recipes.service';


const generateRecipes = async (count: number) => {
    try {
        await RecipeSchema.deleteMany({});
        console.log("Existing recipes cleared");

        const randomRecipesData = await recipesService.getRandomRecipes(count);
        const users = await userService.getUsers(count)

        const recipePromises = randomRecipesData.map(
            async (recipe: any) => {
                const user = users[Math.floor(Math.random() * users.length)];
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
                    creatorEmail: user?.email,
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