import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import Input from '@/components/input';
import CustomCheckbox from '@/components/custom-checkbox';
import Button from '@/components/button';

export default function Login() {
	const [agree, setAgree] = useState(false);
	const [error, setError] = useState(null);
	const [status, setStatus] = useState('idle');
	const router = useRouter();

	const handleLogin = async e => {
		try {
			e.preventDefault();
			setStatus('loading');
			const formData = new FormData(e.target);
			const email = formData.get('email');
			const password = formData.get('password');
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});

			if (response.ok) {
				router.push('/');
			} else if (response.status === 401) {
				throw 'Email or password is incorrect';
			}
		} catch (error) {
			setStatus('failed');
			setError(error);
			setTimeout(() => {
				setError(null);
			}, 3000);
		}
	};

	return (
		<div className='flex min-h-screen'>
			<div
				className='relative flex-1 hidden lg:flex items-center justify-center bg-no-repeat bg-cover bg-center 
				bg-amber-400'
				style={{
					// backgroundImage: 'url("/images/bg-auth.png")',
					// bg-[#EFC81A]/20
				}}
			>
				<div className='bg-[#EFC81A]/40 absolute inset-0' />
				<img
					src='/images/logo.png'
					alt='Mama recipe logo'
					className='relative'
				/>
			</div>

			<section className='flex-1 px-10 py-20'>
				<div className='text-center mb-12'>
					<h1 className='text-[#EFC81A] text-3xl font-bold mb-5'>Welcome!</h1>
					<p className='text-[#8692A6] text-lg'>
						Log in into your exiting account
					</p>
				</div>

				<div className='flex justify-center'>
					<form className='w-full max-w-lg' onSubmit={handleLogin}>
						<div className='space-y-6'>
							<Input
								label='Email'
								type='email'
								id='email'
								name='email'
								placeholder='Enter your email address'
								required
							/>
							<Input
								label='Password'
								type='password'
								id='password'
								name='password'
								placeholder='Password'
								required
							/>
							{error && (
								<p className='text-red-500 mt-6' role='alert'>
									{error}
								</p>
							)}
							<CustomCheckbox agree={agree} onAgree={() => setAgree(!agree)} />
						</div>

						<div className='mt-10 space-y-6 text-center'>
							<Button type='submit' disabled={!agree}>
								{status === 'loading' ? (
									<>
										<svg
											width='20'
											height='20'
											fill='currentColor'
											className='mr-2 animate-spin'
											viewBox='0 0 1792 1792'
											xmlns='http://www.w3.org/2000/svg'
											aria-hidden='true'
										>
											<path d='M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z'></path>
										</svg>
										<span className='sr-only'>Sedang masuk</span>
									</>
								) : (
									'login'
								)}
							</Button>
							<div className='flex justify-end'>
								<Link
									href='/forgot-password'
									className='inline-block text-[#999999] hover:underline'
								>
									Forgot Password ?
								</Link>
							</div>
							<p className='text-[#8692A6]'>
								<span>Don&apos;t have an account? </span>
								<Link
									href='/register'
									className='text-[#EFC81A] hover:underline'
								>
									Sign Up Here
								</Link>
							</p>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}

export async function getServerSideProps({ req }) {
	const token = req.cookies.token || '';
	if (token) {
		return {
			redirect: {
				permanent: false,
				destination: '/',
			},
			props: {},
		};
	}

	return {
		props: {},
	};
}
