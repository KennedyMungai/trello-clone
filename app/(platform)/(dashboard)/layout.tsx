import { ReactNode } from 'react'
import DashboardNavbar from './_components/navbar'

type Props = {
	children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
	return (
		<div className='h-full pt-14'>
			<DashboardNavbar />
			{children}
		</div>
	)
}

export default DashboardLayout
