export function RecipeListSkeleton() {
	return (
		<ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 animate-pulse'>
			<li className='rounded-2xl h-[400px] md:h-[450px] bg-slate-300'></li>
			<li className='rounded-2xl h-[400px] md:h-[450px] bg-slate-300'></li>
			<li className='rounded-2xl h-[400px] md:h-[450px] bg-slate-300'></li>
		</ul>
	);
}

export function ProfileSkeleton() {
	return (
		<div className='flex flex-col items-center gap-6 mb-20 animate-pulse'>
			<div className='w-40 aspect-square rounded-full bg-slate-300' />
			<div className='w-44 h-8 rounded bg-slate-300' />
		</div>
	);
}

export function LikeAndSaveSkeleton() {
	return (
		<div className='flex items-center gap-4 animate-pulse'>
			<div className='w-12 md:w-14 aspect-square rounded-xl bg-slate-200' />
			<div className='w-12 md:w-14  aspect-square rounded-xl bg-slate-200' />
		</div>
	);
}
