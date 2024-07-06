export default function CommentSection() {
	return (
		<section className='w-full max-w-6xl mx-auto space-y-10'>
			<h2 className='text-3xl md:text-5xl text-[#3F3A3A]'></h2>
			<ul>
				<li className='flex items-start gap-4 md:gap-6 border border-slate-200 p-5 rounded-md'>
					<div className='w-16 aspect-square rounded-full overflow-hidden'>
						<img
							src='/images/avatar-comment.png'
							alt='Ayudia'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='space-y-2'>
						<p className='text-2xl font-bold'>Ayudia</p>
						<p>Nice recipe. simple and delicious, thank you.</p>
					</div>
				</li>
			</ul>
		</section>
	);
}
