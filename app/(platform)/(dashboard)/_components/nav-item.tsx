'use client'

import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Activity, CreditCard, Layout, Settings } from 'lucide-react'

export type Organization = {
	id: string
	slug: string
	imageUrl: string
	name: string
}

type Props = {
	isActive: boolean
	isExpanded: boolean
	organization: Organization
	onExpand: (id: string) => void
}

const NavItem = ({ isActive, isExpanded, onExpand, organization }: Props) => {
	const routes = [
		{
			label: 'Boards',
			icon: <Layout className='h-4 w-4 mr-2' />,
			href: `/organizations/${organization.id}`
		},
		{
			label: 'Activity',
			icon: <Activity className='h-4 w-4 mr-2' />,
			href: `/organizations/${organization.id}/activity`
		},
		{
			label: 'Settings',
			icon: <Settings className='h-4 w-4 mr-2' />,
			href: `/organizations/${organization.id}/settings`
		},
		{
			label: 'Billing',
			icon: <CreditCard className='h-4 w-4 mr-2' />,
			href: `/organizations/${organization.id}/billing`
		}
	]

	return (
		<AccordionItem value={organization.id} className='border-none'>
			<AccordionTrigger
				onClick={() => onExpand(organization.id)}
				className={cn(
					'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline',
					isActive && !isExpanded && 'bg-sky-500/10 text-sky-700'
				)}
			>
				<div className='flex items-center gap-x-2'>
					<div className='w-7 h-7 relative'>
						<Image
							src={organization.imageUrl}
							alt={organization.name}
							fill
						/>
					</div>
					<span className='text-sm font-semibold text-slate-400'>
						{organization.name}
					</span>
				</div>
			</AccordionTrigger>
		</AccordionItem>
	)
}

export default NavItem
