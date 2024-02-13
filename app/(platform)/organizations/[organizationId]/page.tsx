import React from 'react'

type Props = {
	params: {
		organizationId: string
	}
}

const OrganizationPage = ({ params: { organizationId } }: Props) => {
	return <div>{organizationId}</div>
}

export default OrganizationPage
