import { IUser } from '@/types/user.types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IUserStore {
	user: IUser | null
	setUser: (user: IUser) => void
}

export const useUserStore = create<IUserStore>()(
	persist(
		set => ({
			user: null,
			setUser: (user: IUser) => set(() => ({ user }))
		}),
		{ name: 'user-storage' }
	)
)
