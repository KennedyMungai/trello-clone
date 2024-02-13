import Logo from '@/components/logo/logo'
import { Button } from '@/components/ui/button'

type Props = {}

const NavBar = (props: Props) => {
	return (
		<div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center'>
			<div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button>
                        Login
                    </Button>
                    <Button>
                        Get Trello Clone for Free
                    </Button>
                </div>
            </div>
		</div>
	)
}

export default NavBar
