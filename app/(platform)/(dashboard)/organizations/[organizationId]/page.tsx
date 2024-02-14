import { create } from '@/actions/createBoard'
import { Button } from '@/components/ui/button'
import db from '@/lib/db'

const OrganizationPage = async () => {
	const boards = await db.board.findMany()

	return (
		<div className='h-full flex flex-col space-y-4'>
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
			<div className="space-y-2">
				{boards.map((board, index) => (
					<div className="" key={index}>
						Board Name: {board.title}
					</div>
				))}
			</div>
		</div>
	)
}

export default OrganizationPage
