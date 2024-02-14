'use client'

import { State, create } from '@/actions/createBoard'
import { Button } from '@/components/ui/button'
import { useFormState } from 'react-dom'
import FormInput from './form-input'

type Props = {}

const Form = (props: Props) => {
	const initialState: State = { message: null, errors: {} }
	const [state, dispatch] = useFormState(create, initialState)

	return (
		<form action={dispatch}>
			<div className='flex flex-col space-y-2'>
				<FormInput />
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
