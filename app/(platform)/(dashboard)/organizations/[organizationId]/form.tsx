'use client'

import { State, create } from '@/actions/create-board'
import { CreateBoard } from '@/actions/create-board/schema'
import { Button } from '@/components/ui/button'
import { useAction } from '@/hooks/use-action'
import { createSafeAction } from '@/lib/create-safe-action'
import { useFormState } from 'react-dom'
import FormInput from './form-input'

type Props = {}

const Form = (props: Props) => {
	const initialState: State = { message: null, errors: {} }
	const [state, dispatch] = useFormState(create, initialState)

	const { execute, FieldErrors } = useAction(createBoard, {
		onSuccess: (data) => {
			console.log(data, 'SUCCESS!')
		},
		onError: (error) => {
			console.log(error, 'ERROR!')
		}
	})

	const onSubmit = (formData: FormData) => {
		const title = formData.get('title') as string

		execute({ title })
	}

	return (
		<form action={onSubmit}>
			<div className='flex flex-col space-y-2'>
				<FormInput errors={FieldErrors} />
			</div>
			<Button type='submit' className='mt-3'>
				Submit
			</Button>
		</form>
	)
}

export default Form

export const createBoard = createSafeAction(CreateBoard, handler)
