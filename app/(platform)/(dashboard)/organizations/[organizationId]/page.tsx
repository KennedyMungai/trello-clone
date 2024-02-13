import { OrganizationSwitcher, auth } from '@clerk/nextjs'

type Props = {
	params: {
		organizationId: string
	}
}

const OrganizationPage = ({ params: { organizationId } }: Props) => {
	const { userId, orgId } = auth()

	return (
		<div className='h-full'>
			<OrganizationSwitcher />
		</div>
	)
}

export default OrganizationPage
