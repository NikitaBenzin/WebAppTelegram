import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IIsPopupOpenStore {
	isPopupOpen: boolean | null
	setIsPopupOpen: (isPopupOpen: boolean) => void
}

export const useIsPopupOpen = create<IIsPopupOpenStore>()(
	persist(
		set => ({
			isPopupOpen: null,
			setIsPopupOpen: (isPopupOpen: boolean) => set({ isPopupOpen })
		}),
		{
			name: 'isPopupOpen-storage'
		}
	)
)
