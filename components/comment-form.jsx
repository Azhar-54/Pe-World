import { useState } from 'react';
import clsx from 'clsx';

export default function CommentForm() {
	const [comment, setComment] = useState('');
	return (
		<form className='space-y-10'>
			<div className='relative w-full max-w-6xl mx-auto'>
				<textarea
					name='comment'
					id='comment'
					className={clsx(
						'peer bg-[#F6F5F4] w-full rounded-lg px-4 py-4',
						'outline outline-2 outline-transparent outline-offset-0 transition-all',
						'focus:outline-yellow-400 focus:outline-offset-4',
						'hover:outline-yellow-400 hover:outline-offset-4'
					)}
					required
					rows={10}
					value={comment}
					onChange={e => setComment(e.target.value)}
				/>
				<label
					htmlFor='comment'
					className={clsx(
						'absolute top-0 left-0 transition-transform',
						'peer-focus:-translate-y-10 peer-focus:translate-x-0',
						comment
							? '-translate-y-10 translate-x-0'
							: 'translate-y-4 translate-x-4'
					)}
				>
					Comment
				</label>
			</div>
			<div className='flex justify-start lg:justify-center'>
				<button
					type='submit'
					className={clsx(
						'w-full max-w-md bg-yellow-400 text-white rounded-md px-4 py-5 transition-all outline',
						'hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-yellow-400',
						'focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-yellow-400'
					)}
				>
					Post
				</button>
			</div>
		</form>
	);
}
