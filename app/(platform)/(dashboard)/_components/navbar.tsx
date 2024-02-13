import Logo from '@/components/logo/logo'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

type Props = {}

const DashboardNavbar = (props: Props) => {
	return (
		<nav className='fixed top-0 z-50 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center'>
			<div className='flex items-center gap-x-4'>
				<div className='hidden md:flex'>
					<Logo />
				</div>
			</div>
			<Button
				size={'sm'}
				className='rounded-sm hidden md:block h-auto py-1.5 px-2 mx-5'
			>
				Create
			</Button>
			<Button size={'sm'} className='rounded-sm block md:hidden'>
				<Plus />
			</Button>
		</nav>
	)
}

export default DashboardNavbar
