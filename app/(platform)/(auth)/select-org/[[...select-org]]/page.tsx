import { OrganizationList } from '@clerk/nextjs'

type Props = {}

const CreateOrganizationPage = (props: Props) => {
	return (
		<OrganizationList
			hidePersonal
			afterSelectOrganizationUrl={'/organizations/:id'}
			afterCreateOrganizationUrl={'/organizations/:id'}
		/>
	)
}

export default CreateOrganizationPage
