import { create } from '@/actions/createBoard'
import { Button } from '@/components/ui/button'

const OrganizationPage = () => {
	return (
		<div className='h-full'>
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
		</div>
	)
}

export default OrganizationPage
