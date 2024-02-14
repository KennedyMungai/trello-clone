'use client'

import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"

interface Props {
	errors?: {
		title?: string[]
	}
}

const FormInput = ({ errors }: Props) => {
	const {pending} = useFormStatus()

	return (
		<div className=''>
			<Input
				id='title'
				name='title'
				required
				placeholder='Enter a board title'
				className='border border-black p-2 text-stone-500 font-semibold rounded-md'
				disabled={pending}
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
