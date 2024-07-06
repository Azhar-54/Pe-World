import Input from '@/components/input';
import clsx from 'clsx';

export default function ResetPassword() {
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

			<section className='flex-1 px-10 py-20'>
				<div className='flex justify-center items-center h-full'>
					<form className='w-full max-w-lg'>
						<div className='space-y-6'>
							<Input
								label='Code 6 digit'
								type='text'
								id='resetPassword'
								name='resetPassword'
								required
								autoFocus
							/>
						</div>

						<div className='mt-10 space-y-6 text-center'>
							<button
								type='submit'
								className={clsx(
									'inline-flex items-center justify-center px-5 py-5 bg-[#EFC81A] rounded-md text-white w-full'
								)}
							>
								Reset Password
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
