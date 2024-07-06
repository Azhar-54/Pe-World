import Link from 'next/link';
import Container from '../container';
import RecipeList from '../recipe-list';
import clsx from 'clsx';
import Pagination from '../pagination';

export default function PopularSection({ recipes }) {
	return (
		<section className='mt-24 mb-32 lg:mb-40'>
			<Container>
				<div className='mb-14 md:mb-20'>
					<div className='flex items-center gap-5'>
						<div className='bg-[#EFC81A] w-2 lg:w-6 h-16 lg:h-32' />
						<h2 className='text-3xl lg:text-5xl text-[#2E266F]'>
							Popular Recipe
						</h2>
					</div>
				</div>

				<RecipeList recipes={recipes} />
				<div className='mt-16 flex justify-center'>
					<Pagination/>
				</div>
			</Container>
		</section>
	);
}
