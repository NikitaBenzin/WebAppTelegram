import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	children: ReactNode
}

export function Button({ children, isLoading, ...props }: Props) {
	return (
		<div className="mb-3">
			<button
				className={twMerge(
					'bg-button-primary text-text-primary min-w-[252px] py-3 rounded-xl text-2xl font-extrabold hover:scale-105 hover:bg-button-secondary duration-300 cursor-pointer',
					isLoading && 'opacity-75 cursor-not-allowed'
				)}
				disabled={isLoading}
				{...props}
			>
				{children}
			</button>
		</div>
	)
}
