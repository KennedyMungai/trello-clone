import React from 'react'

type Props = {
	params: {
		organizationId: string
	}
}

const OrganizationPage = ({ params: { organizationId } }: Props) => {
	return <div className='h-full'>{organizationId}</div>
}

export default OrganizationPage
