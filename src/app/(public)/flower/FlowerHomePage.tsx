'use client'

import { useFlowerStore } from '@/store/flower.store'
import { FlowerType } from '@/types/flower.types'
import Image from 'next/image'

export function FlowerHomePage() {
	const flower = useFlowerStore(state => state.flower)

	return (
		<>
			{Number(flower?.lvl) < 20 ? (
				<Image
					alt="Seed"
					src={'/seed.png'}
					width={400}
					height={800}
					className="object-contain w-min h-96 flex justify-self-center self-center"
					draggable="false"
				/>
			) : Number(flower?.lvl) < 40 ? (
				<Image
					alt="Flower evolution 0"
					src={`/Flower-e0.png`}
					width={400}
					height={800}
					className="object-contain w-min h-96 flex justify-self-center self-center"
					draggable="false"
				/>
			) : Number(flower?.lvl) < 65 ? (
				<Image
					alt="Flower evolution 1"
					src={`/${FlowerType[Number(flower?.type)]}-e1.png`}
					width={400}
					height={800}
					className="object-contain w-min h-96 flex justify-self-center self-center"
					draggable="false"
				/>
			) : Number(flower?.lvl) < 100 ? (
				<Image
					alt="Flower evolution 2"
					src={`/${FlowerType[Number(flower?.type)]}-e2.png`}
					width={400}
					height={800}
					className="object-contain w-min h-96 flex justify-self-center self-center"
					draggable="false"
				/>
			) : (
				<Image
					alt="Flower evolution 3"
					src={`/${FlowerType[Number(flower?.type)]}-e3.png`}
					width={400}
					height={800}
					className="object-contain w-min h-96 flex justify-self-center self-center"
					draggable="false"
				/>
			)}
		</>
	)
}
