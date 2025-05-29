'use client'

import { useBackgroundStore } from '@/store/background.store'
import { type PropsWithChildren } from 'react'
import { Footer } from './content/Footer'
import { Header } from './content/Header'

export function Layout({ children }: PropsWithChildren<unknown>) {
	const backgroundUrl = useBackgroundStore(s => s.backgroundUrl)

	return (
		<div
			id="layout"
			className="min-h-screen w-full bg-cover bg-center"
			style={{
				backgroundImage: `url(${backgroundUrl})`
			}}
		>
			<Header />
			<main className="flex flex-col justify-center items-start p-4 w-full">
				{children}
			</main>
			<Footer />
		</div>
	)
}
