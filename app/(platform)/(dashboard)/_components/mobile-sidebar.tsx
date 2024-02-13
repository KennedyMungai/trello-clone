'use client'

import { useMobileSidebarStore } from '@/hooks/use-mobile-sidebar'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {}

const MobileSidebar = (props: Props) => {
	const pathname = usePathname()
	const { isOpen, onClose, onOpen } = useMobileSidebarStore((state) => state)
	const [isMounted, setIsMounted] = useState<boolean>(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	return <div>MobileSidebar</div>
}

export default MobileSidebar
