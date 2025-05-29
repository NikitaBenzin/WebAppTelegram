import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IBackgroundStore {
	backgroundUrl: string
	setBackgroundUrl: (url: string) => void
}

export const useBackgroundStore = create<IBackgroundStore>()(
	persist(
		set => ({
			backgroundUrl: '/default-bg.png',
			setBackgroundUrl: (backgroundUrl: string) =>
				set(() => ({ backgroundUrl }))
		}),
		{ name: 'background-storage' }
	)
)
