'use server'

import db from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const CreateBoard = z.object({
	title: z
		.string()
		.min(3, { message: 'A minimum length of 3 letters is required' })
})

export async function create(formData: FormData) {
	const { title } = CreateBoard.parse({
		title: formData.get('title')
	})

	await db.board.create({
		data: {
			title
		}
	})

	revalidatePath('/organizations/org_2cIyNRFX3Cb2tPdSJP7hm4bPvoc')
}
