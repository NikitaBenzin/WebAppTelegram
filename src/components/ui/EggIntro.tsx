'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function EggIntro() {
	const [show, setShow] = useState(true)

	useEffect(() => {
		// Автоматически скрыть через 3 секунды
		const timeout = setTimeout(() => setShow(false), 3000)
		return () => clearTimeout(timeout)
	}, [])

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<motion.img
						src="/egg-hatching.png" // Замени на свою иконку яйца
						alt="Egg"
						className="w-40 h-auto"
						initial={{ opacity: 0, scale: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.2, ease: 'easeOut' }}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
