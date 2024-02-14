'use client'

import db from '@/lib/db'

export const deleteBoard = async (id: string) => {
	await db.board.delete({
		where: {
			id
		}
	})
}
