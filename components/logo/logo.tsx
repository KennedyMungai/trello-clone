import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const TrelloCloneLogo = (props: Props) => {
	return (
		<Link href={'/'}>
			<div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
				<Image
					src='./logo.svg'
					alt='Trello Clone'
					height={30}
					width={30}
				/>
				<p className='text-lg text-neutral-700 pb-1'>Trello Clone</p>
			</div>
		</Link>
	)
}

export default TrelloCloneLogo
