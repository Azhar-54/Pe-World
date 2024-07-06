import Link from 'next/link';
import Container from '../container';
import { isImageValid } from '@/helpers';

export default function ForYouSection({ recipes }) {
	return (
		<section className='relative mt-14'>
			<svg
				width='430'
				height='355'
				viewBox='0 0 430 355'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				aria-hidden='true'
				className='absolute left-0 top-1/2 -translate-y-1/2'
			>
				<circle cx='5.89939' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='5.89939' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='5.89939' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='5.89939' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='5.89939' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='5.89939' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='5.89939' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='5.89939' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='5.89939' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='5.89939' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='157.973' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='157.973' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='157.973' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='157.973' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='157.973' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='157.973' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='157.973' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='157.973' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='157.973' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='157.973' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='310.046' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='310.046' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='310.046' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='310.046' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='310.046' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='310.046' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='310.046' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='310.046' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='310.046' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='310.046' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='81.936' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='81.936' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='81.936' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='81.936' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='81.936' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='81.936' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='81.936' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='81.936' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='81.936' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='81.936' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='234.009' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='234.009' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='234.009' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='234.009' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='234.009' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='234.009' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='234.009' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='234.009' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='234.009' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='234.009' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='386.082' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='386.082' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='386.082' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='386.082' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='386.082' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='386.082' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='386.082' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='386.082' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='386.082' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='386.082' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='43.9175' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='43.9175' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='43.9175' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='43.9175' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='43.9175' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='43.9175' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='43.9175' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='43.9175' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='43.9175' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='43.9175' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='195.991' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='195.991' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='195.991' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='195.991' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='195.991' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='195.991' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='195.991' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='195.991' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='195.991' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='195.991' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='348.064' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='348.064' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='348.064' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='348.064' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='348.064' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='348.064' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='348.064' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='348.064' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='348.064' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='348.064' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='119.954' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='119.954' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='119.954' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='119.954' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='119.954' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='119.954' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='119.954' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='119.954' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='119.954' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='119.954' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='272.027' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='272.027' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='272.027' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='272.027' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='272.027' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='272.027' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='272.027' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='272.027' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='272.027' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='272.027' cy='348.247' r='5.89939' fill='#E6E6E6' />
				<circle cx='424.101' cy='6.08225' r='5.89939' fill='#E6E6E6' />
				<circle cx='424.101' cy='44.1006' r='5.89939' fill='#E6E6E6' />
				<circle cx='424.101' cy='82.1189' r='5.89939' fill='#E6E6E6' />
				<circle cx='424.101' cy='120.137' r='5.89939' fill='#E6E6E6' />
				<circle cx='424.101' cy='158.155' r='5.89939' fill='#E6E6E6' />
				<circle cx='424.101' cy='196.174' r='5.89939' fill='#E6E6E6' />
				<circle cx='424.101' cy='234.192' r='5.89939' fill='#E6E6E6' />
				<circle cx='424.101' cy='272.21' r='5.89939' fill='#E6E6E6' />
				<circle cx='424.101' cy='310.229' r='5.89939' fill='#E6E6E6' />
				<circle cx='424.101' cy='348.247' r='5.89939' fill='#E6E6E6' />
			</svg>
			<Container className='relative'>
				<div className='mb-14 md:mb-20'>
					<div className='flex items-center gap-5'>
						<div className='bg-[#EFC81A] w-2 lg:w-5 h-16 lg:h-32' />
						<h2 className='text-3xl lg:text-5xl text-[#2E266F]'>
							Popular For You!
						</h2>
					</div>
				</div>

				<ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{recipes.map(({ id, image, title }) => {
						const isValid = image ? isImageValid(image) : false;

						return (
							<li
								key={id}
								className='group rounded-2xl w-full h-[400px] md:h-[450px] overflow-hidden flex'
							>
								<Link href={`/recipes/${id}`} className='block w-full relative'>
									<div className='overflow-hidden h-full w-full'>
										<img
											src={isValid ? image : '/images/sugar-salmon.png'}
											alt={title}
											className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-500'
										/>
									</div>
									<div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent to-black/50 flex items-end p-10'>
										<p className='text-4xl text-[#FFF5EC] font-bold capitalize'>
											{title}
										</p>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</Container>
		</section>
	);
}
