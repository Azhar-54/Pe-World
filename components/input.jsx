import clsx from 'clsx';

export default function Input({ label, id, ...props }) {
	return (
		<div className='flex flex-col gap-3'>
			<label htmlFor={id} className='text-[#696F79]'>
				{label}
			</label>
			<input
				id={id}
				className={clsx(
					'rounded-md border border-[#8692A6] px-6 py-4 transition-all placeholder:text-[#8692A6]',
					'focus:outline-[#EFC81A] focus:shadow-[0_4px_10px_3px_#0000001C] focus:outline-offset-4'
				)}
				{...props}
			/>
		</div>
	);
}
