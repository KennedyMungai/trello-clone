import { auth } from '@clerk/nextjs'

type Props = {
	params: {
		organizationId: string
	}
}

const OrganizationPage = ({ params: { organizationId } }: Props) => {
	const { userId, orgId } = auth()

	return (
		<div className='h-full'>
			<p>Organization: {orgId}</p>
			<p>User: {userId}</p>
		</div>
	)
}

export default OrganizationPage
