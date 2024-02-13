import { SignUp } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const SignUpPage = (props: Props) => {
	return (
		<div className='flex items-center justify-between'>
			<SignUp />
		</div>
	)
}

export default SignUpPage
