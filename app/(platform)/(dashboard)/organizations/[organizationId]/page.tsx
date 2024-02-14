import db from '@/lib/db'

const OrganizationPage = () => {
	async function create(formData: FormData) {
		'use server'

		const title = formData.get('title') as string

		db.board.create({
			data: {
				title
			}
		})
	}

	return (
		<div className='h-full'>
			<form action={create}>
				<input
					id='title'
					name='title'
					required
					placeholder='Enter a board title'
					className='border border-black p-2 text-stone-500 font-semibold'
				/>
			</form>
		</div>
	)
}

export default OrganizationPage
