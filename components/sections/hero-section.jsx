import clsx from 'clsx';
import Container from '../container';
import SearchBar from '../search-bar';

export default function HeroSection() {
	return (
		<section className='min-h-screen pt-32 relative'>
			<div className='hidden lg:block bg-[#EFC81A] h-full w-96 absolute right-0 top-0' />
			<Container className='flex flex-col-reverse lg:flex-row gap-10 items-center z-10'>
				<div className='flex-1'>
					<h1 className='mb-10 text-5xl lg:text-7xl w-full max-w-xl text-[#2E266F] text-center lg:text-left'>
						Discover Recipe & Delicious Food
					</h1>
					<SearchBar />
				</div>
				<div className='flex-1'>
					<div className='relative'>
						<svg
							width='430'
							height='355'
							viewBox='0 0 430 355'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							aria-hidden='true'
							className='hidden lg:block absolute left-0 top-0'
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
						<img
							src='/images/hero-decoration.png'
							alt='Decoration'
							aria-hidden='true'
							className='absolute -top-20 md:-top-32 left-1/2 -translate-x-1/2 w-1/2 rotate-180'
						/>

						<img
							src='/images/hero.png'
							alt='Delicious Food'
							className='relative'
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
