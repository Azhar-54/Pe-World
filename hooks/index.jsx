import { RECIPES_URL } from '@/constants/url';
import { getProfile } from '@/lib/profile';
import {
	getLikedRecipe,
	getMyRecipe,
	getRecipes,
	getSavedRecipe,
} from '@/lib/recipes';
import { useEffect, useState } from 'react';

export function useRecipe(page, keyword) {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadRecipes() {
			try {
				setStatus('loading');
				const recipes = await getRecipes(page, keyword);
				setData(recipes.data);
				setStatus('success');
			} catch (error) {
				setStatus('failed');
				setError(error);
			}
		}
		loadRecipes();
	}, [page, keyword]);

	return {
		data,
		status,
		error,
	};
}

export function useProfile(token) {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		let ignore = false;

		async function loadProfile() {
			try {
				setStatus('loading');
				const profile = await getProfile(token);
				if (!ignore) {
					setData(profile);
				}
				setTimeout(() => {
					setStatus('success');
				}, 300);
			} catch (error) {
				setStatus('failed');
				setError(error);
			}
		}
		loadProfile();

		return () => {
			ignore = true;
		};
	}, []);

	return {
		data,
		status,
		error,
	};
}

export function useMyRecipe(token) {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadRecipes() {
			try {
				setStatus('loading');
				const recipe = await getMyRecipe(token);
				setData(recipe);
				setStatus('success');
			} catch (error) {
				setStatus('failed');
				setError(error);
			}
		}
		loadRecipes();
	}, []);

	return {
		data,
		status,
		error,
	};
}

export function useSavedRecipe(token) {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadRecipes() {
			try {
				setStatus('loading');
				const recipe = await getSavedRecipe(token);
				setData(recipe);
				setStatus('success');
			} catch (error) {
				setStatus('failed');
				setError(error);
			}
		}
		loadRecipes();
	}, []);

	return {
		data,
		status,
		error,
	};
}

export function useLikedRecipe(token) {
	const [status, setStatus] = useState('idle');
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function loadRecipes() {
			try {
				setStatus('loading');
				const recipe = await getLikedRecipe(token);
				setData(recipe);
				setStatus('success');
			} catch (error) {
				setStatus('failed');
				setError(error);
			}
		}
		loadRecipes();
	}, []);

	return {
		data,
		status,
		error,
	};
}
