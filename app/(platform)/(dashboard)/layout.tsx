import { ReactNode } from 'react'
import DashboardNavbar from './_components/navbar'

type Props = {
	children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
	return (
		<div className='h-full'>
			<DashboardNavbar />
			{children}
		</div>
	)
}

export default DashboardLayout
