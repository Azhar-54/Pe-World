import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export default function SearchBar() {
	const { replace } = useRouter();
	const searchParams = useSearchParams();

	const handleSearch = e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const search = formData.get('search');
		const params = new URLSearchParams();
		if (search) {
			params.set('search', search);
		} else {
			params.delete('search');
		}
		replace(`/recipes?${params.toString()}`);
	};

	return (
		<form onSubmit={handleSearch}>
			<div className='relative h-20'>
				<input
					type='text'
					name='search'
					id='search'
					placeholder='Search Recipe'
					className={clsx(
						'w-full h-full rounded pl-14 lg:pl-20 pr-5 placeholder:text-[#000000]/60 placeholder:text-lg',
						// 'focus:outline-[#EFC81A] focus:outline-offset-4 transition-all'
					)}
					defaultValue={searchParams.get('search') || ''}
				/>
				<button
					type='submit'
					className='absolute top-1/2 -translate-y-1/2 left-5 lg:left-10'
				>
					<span className='sr-only'>Search Recipe</span>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path
							d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
							stroke='#C4C4C4'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M18.9999 19L14.6499 14.65'
							stroke='#C4C4C4'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
			</div>
		</form>
	);
}
