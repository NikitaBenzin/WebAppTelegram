import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IFlowerNameStore {
	name: String | null
	setFlowerName: (flowerName: String) => void
}

export const useFlowerNameStore = create<IFlowerNameStore>()(
	persist(
		set => ({
			name: null,
			setFlowerName: (flowerName: String) => set({ name: flowerName })
		}),
		{
			name: 'flowerName-storage'
		}
	)
)
