import { useIsPopupOpen } from '@/store/isPopupOpen'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function Popup({ children }: Props) {
	const setIsPopupOpen = useIsPopupOpen(state => state.setIsPopupOpen)

	return (
		<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
			<span
				className="absolute top-0 left-0 bg-zinc-900 w-full h-full opacity-50"
				onClick={() => setIsPopupOpen(false)}
			/>
			{children}
		</div>
	)
}
