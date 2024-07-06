import Input from '@/components/input';
import clsx from 'clsx';

export default function ForgotPassword() {
	return (
		<div className='flex min-h-screen'>
			<div
				className='relative flex-1 hidden lg:flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[#EFC81A]/20'
				style={{
					backgroundImage: 'url("/images/bg-auth.png")',
				}}
			>
				<div className='bg-[#EFC81A]/40 absolute inset-0' />
				<img
					src='/images/logo.png'
					alt='Mama recipe logo'
					className='relative'
				/>
			</div>

			<section className='flex-1 px-10 py-20 grid place-content-center'>
				<div className='text-center mb-12'>
					<h1 className='text-[#EFC81A] text-3xl font-bold mb-5'>
						Forgot Password?
					</h1>
					<p className='text-[#8692A6] text-lg max-w-md'>
						We just need your registered e-mail address to send your password
						resend
					</p>
				</div>

				<div className='flex justify-center'>
					<form className='w-full max-w-lg'>
						<div className='space-y-6'>
							<Input
								label='Email'
								type='email'
								id='email'
								name='email'
								placeholder='examplexxx@gmail.com'
								required
							/>
						</div>

						<div className='mt-10 space-y-6 text-center'>
							<button
								type='submit'
								className={clsx(
									'inline-flex items-center justify-center px-5 py-5 bg-[#EFC81A] rounded-md text-white w-full'
								)}
							>
								Send Email
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
