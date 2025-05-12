import { UserData } from '@/types/userData.types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IUserStore {
	user: UserData | null
	setUser: (user: UserData) => void
}

export const useUserStore = create<IUserStore>()(
	persist(
		set => ({
			user: null,
			setUser: (user: UserData) => set(() => ({ user }))
		}),
		{ name: 'user-storage' }
	)
)
