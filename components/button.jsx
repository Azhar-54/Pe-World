import clsx from 'clsx';

export default function Button({ children, ...props }) {
	return (
		<button
			className={clsx(
				'inline-flex items-center justify-center px-5 py-5 bg-[#EFC81A] rounded-md text-white w-full outline outline-1 outline-yellow-400 capitalize',
				'disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:outline-none',
				'hover:outline-offset-2 focus:outline-offset-2'
			)}
			{...props}
		>
			{children}
		</button>
	);
}
