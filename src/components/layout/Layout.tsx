'use client'

import { type PropsWithChildren } from 'react'
import { Footer } from './content/Footer'
import { Header } from './content/Header'

export function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<Header />
			<main className="flex flex-col justify-center items-start p-4 w-full">{children}</main>
			<Footer />
		</>
	)
}
