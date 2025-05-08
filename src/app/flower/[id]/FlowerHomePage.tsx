'use client'

import { useFlowerStore } from '@/store/store'

interface Props {
	id: string
}

export function FlowerHomePage({ id: flowerId }: Props) {
	const flower = useFlowerStore(state => state.flower)

	return (
		<div>
			<h1>Flower ID: {flowerId}</h1>
			<p>{flower?.name}</p>
		</div>
	)
}
