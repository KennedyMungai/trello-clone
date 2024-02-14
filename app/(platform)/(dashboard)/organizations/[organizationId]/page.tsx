import db from '@/lib/db'
import Form from './form'

const OrganizationPage = async () => {
	const boards = await db.board.findMany()

	return (
		<div className='h-full flex flex-col space-y-4'>
			<Form />
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
