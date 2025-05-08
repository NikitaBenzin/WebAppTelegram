import { IFlower } from '@/types/flower.types'
import { create } from 'zustand'

interface IFlowerStore {
	flower: IFlower | null
	setFlower: (flower: IFlower) => void
}

export const useFlowerStore = create<IFlowerStore>(set => ({
	flower: null,
	setFlower: (flower: IFlower) => set(state => ({ flower }))
}))
