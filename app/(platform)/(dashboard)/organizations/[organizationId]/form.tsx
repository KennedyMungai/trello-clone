'use client'

import { State, create } from '@/actions/createBoard'
import { Button } from '@/components/ui/button'
import { useFormState } from 'react-dom'

type Props = {}

const Form = (props: Props) => {
    const initialState: State = {message: null, errors: {}}
    const [state, dispatch] = useFormState(create, initialState)

	return (
		<form action={dispatch}>
			<input
				id='title'
				name='title'
				required
				placeholder='Enter a board title'
				className='border border-black p-2 text-stone-500 font-semibold rounded-md'
			/>
			<Button type='submit' className='ml-5'>
				Submit
			</Button>
		</form>
	)
}

export default Form
