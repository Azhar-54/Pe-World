import Link from 'next/link';
import Container from './container';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function Layout({ children, hasLoggedIn }) {
	return (
		<main className='font-airbnb bg-[#FFF5EC] min-h-screen flex flex-col w-full overflow-x-hidden'>
			<Header hasLoggedIn={hasLoggedIn} />
			{children}
			<Footer />
		</main>
	);
}

const links = [
	{
		href: '/',
		label: 'Home',
	},
	{
		href: '/recipes/add',
		label: 'Add Recipe',
	},
	{
		href: '/profile',
		label: 'Profile',
	},
];

function Header({ hasLoggedIn }) {
	const pathname = usePathname();
	const { push } = useRouter();
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		const controlNavbar = () => {
			if (window.scrollY > lastScrollY) {
				setShow(false);
			} else {
				setShow(true);
			}

			setLastScrollY(window.scrollY);
		};

		window.addEventListener('scroll', controlNavbar);

		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	const logout = async () => {
		try {
			await fetch('/api/auth/logout', { method: 'POST' });
			push('/', undefined, { scroll: false });
		} catch (error) {
			console.log('error logout', error);
		}
	};

	return (
		<header
			className={clsx(
				'fixed top-0 left-0 w-full h-24 flex items-center bg-white/50 z-50 backdrop-blur transition-transform duration-500',
				show ? 'translate-y-0' : '-translate-y-full'
			)}
		>
			<Container>
				<nav className='flex justify-between gap-8'>
					<ul className='hidden md:flex items-center gap-10 lg:gap-20'>
						{links.map(({ href, label }) => (
							<li key={label}>
								<Link
									href={href}
									className={clsx(
										'text-lg text-[#2E266F] font-medium hover:underline',
										pathname === href && 'underline'
									)}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>

					<div className='flex items-center md:hidden'>
						<button
							type='button'
							className={clsx(
								'z-50 flex flex-col items-center justify-center gap-1 w-12 aspect-square rounded-full text-[#2E266F]'
							)}
							onClick={() => setOpenMenu(!openMenu)}
						>
							<span className='sr-only'>Buka Menu</span>
							{openMenu ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18 18 6M6 6l12 12'
									/>
								</svg>
							) : (
								<>
									<div className='w-1 aspect-square bg-[#2E266F] rounded-full' />
									<div className='w-1 aspect-square bg-[#2E266F] rounded-full' />
									<div className='w-1 aspect-square bg-[#2E266F] rounded-full' />
								</>
							)}
						</button>
					</div>

					{/* mobile navbar */}
					<div
						className={clsx(
							'fixed top-full left-10 transition-all md:hidden',
							openMenu
								? 'translate-y-0 opacity-100'
								: '-translate-y-10 appearance-none opacity-0 pointer-events-none'
						)}
					>
						<nav
							className='bg-white rounded shadow p-6'
							tabIndex={openMenu ? 0 : -1}
						>
							<ul className='space-y-4'>
								{links.map(({ href, label }) => (
									<li key={label}>
										<Link
											href={href}
											className={clsx(
												'text-[#2E266F] hover:underline',
												pathname === href && 'underline'
											)}
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						<div className='absolute -top-4 left-0 w-0 h-0 border-[20px] border-l-white border-t-transparent border-r-transparent border-b-transparent' />
					</div>

					<div>
						{hasLoggedIn ? (
							<div className='flex items-center gap-5'>
								<Link href='/profile'>
									<div className='w-12 aspect-square rounded-full relative'>
										<div className='w-12 aspect-square rounded-full overflow-hidden'>
											<img
												src='/images/empty-profile.jpg'
												alt='Your profile'
												className='w-full h-full object-cover'
											/>
										</div>
										<div className='w-4 h-4 rounded-full bg-[#31A24C] absolute right-0 top-0' />
									</div>
									<span className='sr-only'>Your Profile</span>
								</Link>
								<button
									onClick={logout}
									className={clsx(
										'bg-red-400 text-white flex items-center justify-center px-4 py-2 rounded outline outline-1 outline-red-400',
										'transition-all hover:outline-offset-2 focus:outline-offset-2'
									)}
								>
									Logout
								</button>
							</div>
						) : (
							<Link
								href='/login'
								className={clsx(
									'bg-yellow-400 text-white flex items-center justify-center px-4 py-2 rounded outline outline-1 outline-yellow-400',
									'transition-all hover:outline-offset-2 focus:outline-offset-2'
								)}
							>
								Login
							</Link>
						)}
					</div>
				</nav>
			</Container>
		</header>
	);
}

function Footer() {
	return (
		<footer className='bg-[#EFC81A] w-full h-[600px] pt-14 pb-24 lg:pb-14 relative'>
			<Container className='flex flex-col items-center justify-center h-full'>
				<section className='text-center'>
					<h3 className='text-[#2E266F] text-7xl font-bold mb-14'>
						Eat, Cook, Repeat
					</h3>
					<p className='text-[#707070] text-2xl'>
						Share your best recipe by uploading here !
					</p>
				</section>

				<nav className='text-[#707070] absolute bottom-10 lg:bottom-14 left-1/2 -translate-x-1/2'>
					<ul className='flex items-center flex-wrap justify-center gap-10'>
						<li>
							<Link className='hover:underline' href='/products'>
								Product
							</Link>
						</li>
						<li>
							<Link className='hover:underline' href='/about'>
								Company
							</Link>
						</li>
						<li>
							<Link className='hover:underline' href='/learn-more'>
								Learn More
							</Link>
						</li>
						<li>
							<Link className='hover:underline' href='/contact'>
								Get in Touch
							</Link>
						</li>
					</ul>
				</nav>
			</Container>
		</footer>
	);
}
