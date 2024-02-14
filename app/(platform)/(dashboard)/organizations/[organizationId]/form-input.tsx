interface Props {
	errors?: {
		title?: string[]
	}
}

const FormInput = ({ errors }: Props) => {
	return (
		<div className=''>
			<input
				id='title'
				name='title'
				required
				placeholder='Enter a board title'
				className='border border-black p-2 text-stone-500 font-semibold rounded-md'
			/>
			{errors?.title?.map((error, index) => (
				<p key={index} className='text-rose-500'>
					{error}
				</p>
			))}
		</div>
	)
}

export default FormInput
