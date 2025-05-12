'use client'

import { type PropsWithChildren } from 'react'
import { Footer } from './content/Footer'
import { Header } from './content/Header'

export function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<Header />
			<main className="p-4">{children}</main>
			<Footer />
		</>
	)
}
