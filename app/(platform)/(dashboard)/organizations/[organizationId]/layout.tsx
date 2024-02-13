import { ReactNode } from 'react'
import OrgControl from './_components/org-control'

type Props = {
	children: ReactNode
}

const IndividualOrganizationLayout = ({ children }: Props) => {
	return (
		<>
			<OrgControl />
			{children}
		</>
	)
}

export default IndividualOrganizationLayout
