import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const TrelloCloneLogo = (props: Props) => {
	return (
		<Link href={'/'}>
			<div>
				<Image
					src='./logo.svg'
					alt='Trello Clone'
					height={30}
					width={30}
				/>
			</div>
		</Link>
	)
}

export default TrelloCloneLogo
