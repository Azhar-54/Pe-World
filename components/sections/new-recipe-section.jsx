import Link from 'next/link';
import Container from '../container';
import clsx from 'clsx';
import { isImageValid } from '@/helpers';


const sizes = {
	"5xl": "text-5xl font-medium md:text-[44px] sm:text-[38px]",
	"6xl": "text-[56px] font-medium md:text-5xl sm:text-[42px]",
	xs: "text-xs font-medium",
	lg: "text-2xl font-medium md:text-[22px]",
	"7xl": "text-7xl font-normal md:text-5xl",
	s: "text-[13px] font-medium",
	"2xl": "text-2xl font-medium md:text-[22px]",
	"3xl": "text-[32px] font-medium md:text-3xl sm:text-[28px]",
	"4xl": "text-[42px] font-medium md:text-[38px] sm:text-[32px]",
	xl: "text-lg font-medium",
	md: "text-sm font-normal",
  };
	
  
export default function NewRecipeSection({ recipe }) {
	const defaultTitle = "Healthy Bone Broth Ramen (Quick & Easy)";
	const defaultDescription = "Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!";

	return (
		<section className='mt-24'>
			<Container>
				<div className='mb-24'>
					<div className='flex items-center gap-5'>
						<div className='bg-[#EFC81A] w-2 lg:w-5 h-16 lg:h-32' />
						<h2 className='text-3xl lg:text-5xl '>New Recipe</h2>
					</div>
				</div>

				<section className='flex flex-col md:flex-row md:items-center gap-10'>
					<div className='relative flex-1 h-[600px]'>
						<div className='absolute -top-14 -left-1/2 w-full h-full bg-[#EFC81A]' />
						<div className='w-full h-full overflow-hidden rounded-xl'>
							<img
								src={

									'/images/bone-broth-ramen.png'
								}
								alt={recipe.title}
								className='relative z-10 w-full h-full object-cover'
							/>
						</div>
					</div>

					<div className='flex-1 text-[#3F3A3A]'>
						<h3 className='text-4xl md:text-[56px] font-medium mb-6 leading-tight'>
							{defaultTitle}
						</h3>
						<div className='mt-6 h-[2px] w-[18%] bg-[#6F6A40]' />
						<p className={`${sizes["2xl"]} mt-[35px] w-full leading-8 tracking-[0.96px]`}>
							{ defaultDescription}
						</p>
						<div className='w-24 h-[2px] bg-[#6F6A40] mb-6 md:mb-9' />
						<Link
							href={`/recipes/${recipe.id}`}
							className={clsx(
								'inline-flex items-center justify-center w-52 h-16 bg-[#EFC81A] rounded-lg font-medium text-white border border-transparent',
								'transition-colors hover:bg-transparent hover:text-[#EFC81A] hover:border-[#EFC81A]'
							)}
						>
							Learn More
						</Link>
					</div>
				</section>
			</Container>
		</section>
	);
}
