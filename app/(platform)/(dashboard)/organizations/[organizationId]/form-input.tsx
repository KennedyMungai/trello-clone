type Props = {}

const FormInput = (props: Props) => {
	return (
		<input
			id='title'
			name='title'
			required
			placeholder='Enter a board title'
			className='border border-black p-2 text-stone-500 font-semibold rounded-md'
		/>
	)
}

export default FormInput
