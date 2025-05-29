import { UserData } from '@/types/userData.types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ITelegramUserStore {
	telegramUser: UserData | null
	setTelegramUser: (telegramUser: UserData) => void
}

export const useTelegramUserStore = create<ITelegramUserStore>()(
	persist(
		set => ({
			telegramUser: null,
			setTelegramUser: (telegramUser: UserData) => set(() => ({ telegramUser }))
		}),
		{ name: 'telegramUser-storage' }
	)
)
