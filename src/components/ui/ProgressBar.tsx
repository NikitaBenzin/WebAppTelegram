'use client'
import { useFlowerStore } from '@/store/flower.store'
import Image from 'next/image'

interface Props {}

export function ProgressBar({}: Props) {
	const flower = useFlowerStore(state => state.flower)
	const percents = Math.floor(
		(Number(flower?.currentExp) / Number(flower?.nextLvlExp)) * 100
	)
	return (
		<>
			<div className="relative mt-8 max-w-11/12 rounded-full h-6 dark:bg-background-secondary flex">
				<div
					className="bg-success h-6 rounded-full font-bold text-blue-100 text-center p-0.5"
					style={{ width: `${percents}%` }}
				>
					{percents >= 20 ? `${percents}%` : ''}
				</div>
				<div className="absolute bottom-0 right-0 translate-x-8 translate-y-3">
					<Image
						alt="Star"
						src="/star-icon.png"
						width={55}
						height={55}
						draggable="false"
					/>
				</div>
			</div>
		</>
	)
}
