import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from './Button'

const slides = [
	{
		id: 1,
		title: 'Welcome!',
		description: 'Raise a pet with your friends in Telegram!'
	},
	{
		id: 2,
		title: 'Take Care',
		description: 'Feed, play, and care for your pet daily.'
	},
	{
		id: 3,
		title: 'Earn Rewards',
		description: 'Watch ads, get items, and grow your pet faster!'
	}
]

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
	const [current, setCurrent] = useState(0)
	const [direction, setDirection] = useState(0)

	// useEffect(() => {
	// 	const hasSeen = localStorage.getItem('hasSeenTutorial')
	// 	if (hasSeen) onComplete()
	// }, [onComplete])

	const next = () => {
		if (current === slides.length - 1) {
			localStorage.setItem('hasSeenTutorial', 'true')
			onComplete()
		} else {
			setDirection(1)
			setCurrent(prev => prev + 1)
		}
	}

	const prev = () => {
		if (current > 0) {
			setDirection(-1)
			setCurrent(prev => prev - 1)
		}
	}

	return (
		<div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4">
			<div className="relative w-full max-w-md h-96 bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
				<AnimatePresence initial={false} custom={direction}>
					<motion.div
						key={slides[current].id}
						custom={direction}
						initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="absolute w-full h-full p-8 flex flex-col items-center justify-center text-center"
					>
						<h2 className="text-2xl font-bold mb-4">{slides[current].title}</h2>
						<p className="text-gray-700 text-base">
							{slides[current].description}
						</p>
					</motion.div>
				</AnimatePresence>
				<div className="absolute bottom-6 left-0 right-0 flex justify-between px-6">
					<Button
						onClick={prev}
						disabled={current === 0}
						className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-white disabled:opacity-50"
					>
						Back
					</Button>
					<Button
						onClick={next}
						className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
					>
						{current === slides.length - 1 ? 'Finish' : 'Next'}
					</Button>
				</div>
			</div>
		</div>
	)
}
