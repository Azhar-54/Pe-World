import { getRecipeList } from './recipes';

export async function getRecipePaths() {
	const res = await getRecipeList();
	const recipes = res.data;
	const recipePaths = [];
	recipes.forEach(recipe => {
		const id = recipe.id;
		recipePaths.push({
			params: { id },
		});
	});
	return recipePaths;
}
