'use client'

import { ReactNode } from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '../ui/tooltip'

type Props = {
	children: ReactNode
	message: string
}

const TooltipTemplate = ({ children, message }: Props) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent>{message}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default TooltipTemplate
