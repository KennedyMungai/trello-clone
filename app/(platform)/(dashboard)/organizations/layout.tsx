import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const OrganizationLayout = ({ children }: Props) => {
	return <div className='h-full md:pt-4 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto'>{children}</div>
}

export default OrganizationLayout
