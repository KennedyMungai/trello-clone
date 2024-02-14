'use client'

import { State, create } from '@/actions/createBoard'
import { Button } from '@/components/ui/button'
import { useFormState } from 'react-dom'

type Props = {}

const Form = (props: Props) => {
	const initialState: State = { message: null, errors: {} }
	const [state, dispatch] = useFormState(create, initialState)

	return (
		<form action={dispatch}>
			<div className='flex flex-col space-y-2'>
				<input
					id='title'
					name='title'
					required
					placeholder='Enter a board title'
					className='border border-black p-2 text-stone-500 font-semibold rounded-md'
				/>
				{state?.errors?.title?.map((error, index) => (
					<p key={index} className='text-rose-500'>
						{error}
					</p>
				))}
			</div>
			<Button type='submit' className='mt-3'>
				Submit
			</Button>
		</form>
	)
}

export default Form
