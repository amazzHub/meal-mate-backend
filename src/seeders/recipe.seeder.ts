import { IRecipe, RecipeSchema, ingredientIconUris, recipeCoverUris } from '../database/schemas/recipe.schema';
import { faker } from '@faker-js/faker';
import { creatorService } from '../services/creator.service';
import { recipesService } from '../services/recipes.service';

const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const toUrlSlug = (str: string) => str
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '_')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

const generateRecipes = async (count: number) => {
    try {
        await RecipeSchema.deleteMany({});
        console.log("Existing recipes cleared");

        const randomRecipesData = await recipesService.getRandomRecipes(count);
        const creators = await creatorService.getCreators(count)

        const recipePromises = randomRecipesData.map(
            async (recipe: any) => {
                const creator = creators[Math.floor(Math.random() * creators.length)];
                const { email, firstName, lastName, avatar } = creator;

                const recipeObj: IRecipe = {
                    name: recipe.title,
                    title: recipe.title,
                    ingredients: recipe.extendedIngredients.map(
                        (ingredient: any) => (
                            {
                                name: capitalizeFirstLetter(ingredient.name),
                                grams: faker.number.int({ min: 50, max: 500 }),
                                iconUri: ingredientIconUris[Math.floor(Math.random() * ingredientIconUris.length)]
                            }
                        )
                    ),
                    coverImageUri: recipeCoverUris[Math.floor(Math.random() * recipeCoverUris.length)],
                    rating: faker.number.int({ min: 1, max: 5 }),
                    views: faker.number.int({ min: 50, max: 500 }),
                    creator: {
                        email,
                        firstName,
                        lastName,
                        avatar
                    },
                    preparationTime: recipe.readyInMinutes,
                    uri: `app.Recipe.co/${toUrlSlug(recipe.title)}`
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
};
