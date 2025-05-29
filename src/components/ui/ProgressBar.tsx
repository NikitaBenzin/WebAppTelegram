'use client'
import Image from 'next/image'

interface Props {}

export function ProgressBar({}: Props) {
	return (
		<>
			<div className="relative mt-8 w-5/6 rounded-full h-6 bg-background-secondary flex self-center">
				<div className="absolute bottom-0 right-0 translate-y-3 translate-x-4">
					<Image
						alt="Star"
						src="/star-icon.png"
						width={50}
						height={50}
						draggable="false"
					/>
				</div>
			</div>
		</>
	)
}
