import { SignIn } from '@clerk/nextjs'

type Props = {}

const SignInPage = (props: Props) => {
	return (
		<div className='flex items-center justify-between'>
			<SignIn />
		</div>
	)
}

export default SignInPage
