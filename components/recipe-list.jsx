import { isImageValid } from '@/helpers';
import { deleteRecipe } from '@/lib/recipes';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

export default function RecipeList({ recipes, isMine = false, token }) {
	const router = useRouter();
	const handleDeleteRecipe = async (id, title) => {
		try {
			const confirmation = confirm(`Apakah anda ingin menghapus ${title}`);
			if (confirmation) {
				await deleteRecipe({ id, token });
				toast(`${title} berhasil dihapus`, {
					position: 'bottom-right',
					icon: '🤗',
					style: { backgroundColor: '#4ade80', color: '#fff' },
				});
				router.reload();
			}
		} catch (error) {
			toast(
				`Other user might save/like "${title}", thus you can't delete this recipe`,
				{
					position: 'bottom-right',
					style: { backgroundColor: '#ef4444', color: '#fff' },
				}
			);
		}
	};

	return (
		<ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
			{recipes.map(({ id, image, title }) => {
				const isValid = image ? isImageValid(image) : false;

				return (
					<li
						key={id}
						className='group rounded-2xl h-[400px] overflow-hidden flex relative'
					>
						<Link
							href={`/recipes/${id}`}
							className='block w-full relative rounded-2xl'
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
						{isMine ? (
							<div className='absolute top-6 right-6 z-10 flex items-center gap-3'>
								<Link
									href={`recipes/${id}/edit`}
									// className={clsx(
									// 	'text-white bg-blue-500',
									// 	'flex items-center justify-center w-12 aspect-square rounded-full'
									// )}
								>
									<span className='sr-only'>Update {title}</span>
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Update
									</button>
								</Link>
								<button
									type='button'
									// className='flex items-center justify-center w-12 aspect-square rounded-full bg-red-500 text-white'
									onClick={() => handleDeleteRecipe(id, title)}
								>
									<span className='sr-only'>Hapus {title}</span>
									<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
										Delete
									</button>
								</button>
							</div>
						) : null}
					</li>
				);
			})}
		</ul>
	);
}
