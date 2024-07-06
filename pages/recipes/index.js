import Container from '@/components/container';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Pagination from '@/components/pagination';
import RecipeList from '@/components/recipe-list';
import SearchBar from '@/components/search-bar';
import { RecipeListSkeleton } from '@/components/skeleton';
import { useRecipe } from '@/hooks';
import { useSearchParams } from 'next/navigation';

export default function Recipes({ token }) {
	const searchParams = useSearchParams();
	const search = searchParams.get('search');
	const page = searchParams.get('page') || 1;
	const { data: recipes, status } = useRecipe(Number(page), search);

	let recipeList = null;
	if (status === 'loading') {
		recipeList = <RecipeListSkeleton />;
	} else if (status === 'success') {
		if (recipes.length > 0) {
			recipeList = <RecipeList recipes={recipes} />;
		} else {
			recipeList = (
				<p className='text-center text-xl'>
					<span>Tidak ada hasil untuk </span>
					<strong className='font-bold'>&quot;{search}&quot;</strong>
				</p>
			);
		}
	}

	return (
		<><Navbar/><main>
		{/* <Layout hasLoggedIn={!!token}> */}
			<section className='py-32'>
				<Container>
					<div className='w-full max-w-xl mx-auto mb-20'>
						<SearchBar />
					</div>

					{recipeList}

					{recipes.length > 0 && (
						<div className='mt-16'>
							<Pagination />
						</div>
					)}
				</Container>
			</section>
		{/* </Layout> */}
		<Footer className="mt-1"></Footer>
		</main>
		</>
	);
}

export async function getServerSideProps({ req }) {
	const token = req.cookies.token || '';
	return {
		props: {
			token,
		},
	};
}
