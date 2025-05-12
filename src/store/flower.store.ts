import { IFlower } from '@/types/flower.types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IFlowerStore {
	flower: IFlower | null
	setFlower: (flower: IFlower) => void
}

export const useFlowerStore = create<IFlowerStore>()(
	persist(
		set => ({
			flower: null,
			setFlower: (flower: IFlower) => set({ flower })
		}),
		{
			name: 'flower-storage'
		}
	)
)
