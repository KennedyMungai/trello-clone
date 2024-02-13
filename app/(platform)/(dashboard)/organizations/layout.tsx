import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const OrganizationLayout = ({ children }: Props) => {
	return (
		<main className='h-full md:pt-4 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto'>
			<div className='flex gap-x-7'>
				<div className='w-64 shrink-0 hidden md:block'>
                    {/* SideBar */}
                </div>
				{children}
			</div>
		</main>
	)
}

export default OrganizationLayout
