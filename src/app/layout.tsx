import { QueryClient } from '@tanstack/react-query'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import QueryProvider from './components/QueryProvider'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
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
					strategy="beforeInteractive"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	)
}
