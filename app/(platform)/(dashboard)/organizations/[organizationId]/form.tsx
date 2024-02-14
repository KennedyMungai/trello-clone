'use client'

import { create } from '@/actions/createBoard'
import { Button } from '@/components/ui/button'

type Props = {}

const Form = (props: Props) => {
	return (
		<form action={create}>
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
