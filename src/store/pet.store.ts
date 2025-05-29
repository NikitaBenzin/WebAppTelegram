import { IPet } from '@/types/pet.types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IPetStore {
	pet: IPet | null
	setPet: (pet: IPet) => void
}

export const usePetStore = create<IPetStore>()(
	persist(
		set => ({
			pet: null,
			setPet: (pet: IPet) => set({ pet })
		}),
		{
			name: 'pet-storage'
		}
	)
)
