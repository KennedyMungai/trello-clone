import { OrganizationList } from '@clerk/nextjs'

type Props = {}

const CreateOrganizationPage = (props: Props) => {
	return <OrganizationList hidePersonal />
}

export default CreateOrganizationPage
