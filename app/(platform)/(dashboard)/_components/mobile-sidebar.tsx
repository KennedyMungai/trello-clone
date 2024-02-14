'use client'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import { useMobileSidebarStore } from '@/hooks/use-mobile-sidebar'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import SideBar from './sidebar'

type Props = {}

const MobileSidebar = (props: Props) => {
	const pathname = usePathname()
	const { isOpen, onClose, onOpen } = useMobileSidebarStore((state) => state)
	const [isMounted, setIsMounted] = useState<boolean>(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		onClose()
	}, [pathname, onClose])

	if (!isMounted) {
		return null
	}

	return (
		<>
			<Button
				onClick={onOpen}
				className='block md:hidden'
				variant={'ghost'}
				size={'sm'}
			>
				<Menu className='h-4 w-4' />
			</Button>
			<Sheet open={isOpen} onOpenChange={onClose}>
				<SheetTrigger asChild></SheetTrigger>
				<SheetContent side={'left'} className='p-2 pt-10'>
					{/* <SheetHeader>
					<SheetTitle></SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader> */}
					<SideBar storageKey='t-sidebar-mobile-state' />
					<SheetFooter>
						<SheetClose asChild>
							<Button
								type='submit'
								className='fixed bottom-5 z-10'
							>
								Save Changes
							</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</>
	)
}

export default MobileSidebar
