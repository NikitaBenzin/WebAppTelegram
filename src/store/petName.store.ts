import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IPetNameStore {
	name: String | null
	setPetName: (petName: String) => void
}

export const usePetNameStore = create<IPetNameStore>()(
	persist(
		set => ({
			name: null,
			setPetName: (petName: String) => set({ name: petName })
		}),
		{
			name: 'petName-storage'
		}
	)
)
