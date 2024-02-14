'use server'

import db from '@/lib/db'
import { revalidatePath } from 'next/cache'

export const deleteBoard = async (id: string) => {
	await db.board.delete({
		where: {
			id
		}
	})

	revalidatePath('/organizations/org_2cIyNRFX3Cb2tPdSJP7hm4bPvoc')
}
