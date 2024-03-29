import { Button } from '@/components/ui/button'
import { Link, Medal } from 'lucide-react'
import TooltipTemplate from '../../components/hover/Tooltip'

const MarketingPage = () => {
	return (
		<div className='flex items-center justify-center flex-col'>
			<div className='flex items-center justify-center flex-col'>
				<div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
					<Medal className='h-6 w-6 mr-2' />
					No. 1 task management
				</div>
				<h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
					Trello Clone Helps Teams Move
				</h1>
				<div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit'>
					Work Forward.
				</div>
			</div>
			<div className='text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto'>
				Collaborate, Manage Projects and Reach New Productivity Peaks.
				From high rises to the home office, the way your team works is
				unique - accomplish it all with Trello Clone
			</div>
			<TooltipTemplate message={'Get Trello Clone For Free'}>
				<Button>
					<Link href='/sign-up'>Something</Link>
				</Button>
			</TooltipTemplate>
		</div>
	)
}

export default MarketingPage
