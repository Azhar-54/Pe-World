import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Input from '@/components/input';
import { register } from '@/lib/auth';
import CustomCheckbox from '@/components/custom-checkbox';
import Button from '@/components/button';
import { validateEmail, validateName, validatePassword } from '@/helpers';

export default function Register() {
	const [agree, setAgree] = useState(false);
	const [error, setError] = useState(null);
	const [validationError, setValidationError] = useState({
		name: null,
		email: null,
		password: null,
		confirmPassword: null,
	});
	const [status, setStatus] = useState('idle');
	const router = useRouter();

	const setNotification = ({ field, message }) => {
		setValidationError({ ...validationError, [field]: message });
		setTimeout(() => {
			setValidationError({ ...validationError, [field]: null });
		}, 5000);
	};

	const handleRegister = async e => {
		try {
			e.preventDefault();
			const formData = new FormData(e.target);

			const name = formData.get('name');
			const email = formData.get('email');
			const phone = formData.get('phone');
			const password = formData.get('password');
			const confirmPassword = formData.get('confirmPassword');

			const isNameValid = validateName(name);
			const isEmailValid = validateEmail(email);
			const isPasswordValid = validatePassword(password);

			if (!isNameValid) {
				setNotification({
					field: 'name',
					message: 'Your name should be more than 5 characters',
				});
			} else if (!isEmailValid) {
				setNotification({
					field: 'email',
					message: 'Your email is not valid email',
				});
			} else if (!isPasswordValid) {
				setNotification({
					field: 'password',
					message:
						'Your password should contain at least one uppercase, one lowercase, one number, one symbol, and more than 8 characters',
				});
			} else if (confirmPassword !== password) {
				setNotification({
					field: 'confirmPassword',
					message: 'Your confirm password does not match the password',
				});
			} else {
				setStatus('loading');
				const response = await register({ email, name, password, phone });
				if (response.ok) {
					router.push('/login');
				}
			}
		} catch (error) {
			setError(error.message);
			setTimeout(() => {
				setError(null);
			}, 5000);
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
					<h1 className='text-[#EFC81A] text-3xl font-bold mb-5'>
						Let&apos;s Get Started!
					</h1>
					<p className='text-[#8692A6] text-lg'>
						Create new account to access all features
					</p>
				</div>

				<div className='flex justify-center'>
					<form className='w-full max-w-lg' onSubmit={handleRegister}>
						<div className='space-y-6'>
							<div className='space-y-2'>
								<Input
									label='Name'
									type='text'
									id='name'
									name='name'
									placeholder='Name'
									required
								/>
								{validationError.name && (
									<p className='text-sm text-red-400'>{validationError.name}</p>
								)}
							</div>
							<div className='space-y-2'>
								<Input
									label='Email Address'
									type='email'
									id='email'
									name='email'
									placeholder='Enter your email address'
									required
								/>
								{validationError.email && (
									<p className='text-sm text-red-400'>
										{validationError.email}
									</p>
								)}
							</div>
							<Input
								label='Phone Number'
								type='tel'
								id='phone'
								name='phone'
								placeholder='08xxxxxxxxxx'
								required
							/>
							<div className='space-y-2'>
								<Input
									label='Password'
									type='password'
									id='password'
									name='password'
									placeholder='Password'
									required
								/>
								{validationError.password && (
									<p className='text-sm text-red-400'>
										{validationError.password}
									</p>
								)}
							</div>
							<div className='space-y-2'>
								<Input
									label='Confirm password'
									type='password'
									id='confirmPassword'
									name='confirmPassword'
									placeholder='Confirm password'
									required
								/>
								{validationError.confirmPassword && (
									<p className='text-sm text-red-400'>
										{validationError.confirmPassword}
									</p>
								)}
							</div>
							<CustomCheckbox agree={agree} onAgree={() => setAgree(!agree)} />
						</div>

						{error && (
							<p className='text-red-500 mt-6' role='alert'>
								{error}
							</p>
						)}

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
									'register account'
								)}
							</Button>
							<p className='text-[#8692A6]'>
								<span>Already have account? </span>
								<Link href='/login' className='text-[#EFC81A] hover:underline'>
									Log in Here
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
