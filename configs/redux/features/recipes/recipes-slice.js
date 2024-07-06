import {
	addLikedRecipe,
	addSavedRecipe,
	getLikedRecipe,
	getSavedRecipe,
	removeLikedRecipe,
	removeSavedRecipe,
} from '@/lib/recipes';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
	data: {
		liked_id: '',
		saved_id: '',
	},
	error: null,
	status: 'idle', // idle, success, failed, loading
};

export const fetchRecipes = createAsyncThunk(
	'recipes/fetchRecipes',
	async ({ token, recipe_id }) => {
		const savedRecipeList = await getSavedRecipe(token);
		const likedRecipeList = await getLikedRecipe(token);

		const savedRecipe = savedRecipeList.find(recipe => {
			return recipe.recipe_id === recipe_id;
		});
		const likedRecipe = likedRecipeList.find(recipe => {
			return recipe.recipe_id === recipe_id;
		});

		const wasThisRecipeSaved = savedRecipe ? savedRecipe.id : '';
		const wasThisRecipeLiked = likedRecipe ? likedRecipe.id : '';

		const payload = {
			saved_id: wasThisRecipeSaved,
			liked_id: wasThisRecipeLiked,
		};
		return payload;
	}
);

export const addSavedId = createAsyncThunk(
	'recipes/addSavedId',
	async ({ token, recipe_id }) => {
		const savedRecipe = await addSavedRecipe(token, recipe_id);
		const payload = savedRecipe ? savedRecipe.id : '';
		return payload;
	}
);

export const removeSavedId = createAsyncThunk(
	'recipes/removeSavedId',
	async ({ token, saved_id }) => {
		await removeSavedRecipe(token, saved_id);
		return '';
	}
);

export const addLikedId = createAsyncThunk(
	'recipes/addLikedId',
	async ({ token, recipe_id }) => {
		const likedRecipe = await addLikedRecipe(token, recipe_id);
		const payload = likedRecipe ? likedRecipe.id : '';
		return payload;
	}
);

export const removeLikedId = createAsyncThunk(
	'recipes/removeLikedId',
	async ({ token, liked_id }) => {
		await removeLikedRecipe(token, liked_id);
		return '';
	}
);

const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchRecipes.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchRecipes.fulfilled, (state, action) => {
				state.status = 'success';
				state.data = action.payload;
			})
			.addCase(fetchRecipes.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(addSavedId.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(addSavedId.fulfilled, (state, action) => {
				state.status = 'success';
				state.data.saved_id = action.payload;
			})
			.addCase(addSavedId.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(removeSavedId.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(removeSavedId.fulfilled, (state, action) => {
				state.status = 'success';
				state.data.saved_id = action.payload;
			})
			.addCase(removeSavedId.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(addLikedId.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(addLikedId.fulfilled, (state, action) => {
				state.status = 'success';
				state.data.liked_id = action.payload;
			})
			.addCase(addLikedId.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(removeLikedId.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(removeLikedId.fulfilled, (state, action) => {
				state.status = 'success';
				state.data.liked_id = action.payload;
			})
			.addCase(removeLikedId.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			});
	},
});

export const recipesReducer = recipesSlice.reducer;

export const selectSavedId = state => state.recipes.data.saved_id;
export const selectLikedId = state => state.recipes.data.liked_id;
