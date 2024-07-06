import { isImageValid } from '@/helpers';
import Link from 'next/link';

export default function CategoryRecipeList({ recipes }) {
	return (
		<ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
			{recipes.map(({ recipe_id, recipe }) => {
				const { image, title } = recipe;
				const isValid = image ? isImageValid(image) : false;

				return (
					<li
						key={recipe_id}
						className='group rounded-2xl h-[400px] overflow-hidden flex'
					>
						<Link
							href={`/recipes/${recipe_id}`}
							className='block w-full relative'
						>
							<div className='overflow-hidden w-full h-full'>
								<img
									src={isValid ? image : '/images/sugar-salmon.png'}
									alt={title}
									className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
							<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-10'>
								<p className='text-3xl text-[#FFF5EC] font-bold capitalize'>
									{title}
								</p>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
