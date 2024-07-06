export default function CustomCheckbox({ agree, onAgree }) {
	return (
		<label className='custom-checkbox'>
			<input
				type='checkbox'
				name='terms_and_conditions'
				className='checkbox'
				onChange={onAgree}
				value={agree}
			/>
			I agree to terms & conditions
		</label>
	);
}
