const OrganizationPage = () => {
	return (
		<div className='h-full'>
			<form>
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
