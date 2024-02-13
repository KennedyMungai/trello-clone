import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const IndividualOrganizationLayout = ({ children }: Props) => {
	return <div className='h-full'>{children}</div>
}

export default IndividualOrganizationLayout
