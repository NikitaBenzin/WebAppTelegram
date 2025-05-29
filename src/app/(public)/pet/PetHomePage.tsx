'use client'

import { usePetStore } from '@/store/pet.store'

export function PetHomePage() {
	const pet = usePetStore(state => state.pet)

	return <></>
}
