import { QueryClient } from '@tanstack/react-query'
import type { Metadata } from 'next'
import { Caveat, Geist } from 'next/font/google'
import Script from 'next/script'

import { Layout } from '@/components/layout/Layout'
import QueryProvider from '@/components/QueryProvider'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const caveat = Caveat({
	variable: '--font-caveat',
	subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
	title: 'Flower',
	description: 'Grow me, please.'
}

const queryClient = new QueryClient()

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<Script
					src="https://telegram.org/js/telegram-web-app.js"
					strategy="lazyOnload"
				/>
			</head>
			<body className={`${caveat.variable} antialiased`}>
				<QueryProvider>
					<Layout>{children}</Layout>
				</QueryProvider>
			</body>
		</html>
	)
}
