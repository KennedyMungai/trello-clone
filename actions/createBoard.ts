'use server'

import db from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const CreateBoard = z.object({
	title: z.string().min(1).max(100)
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

    revalidatePath('http://localhost:3000/organizations/org_2cIyNRFX3Cb2tPdSJP7hm4bPvoc')
}
