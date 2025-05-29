'use client'

import { MiniLoader } from '@/components/ui/MiniLoader'
import dynamic from 'next/dynamic'

const DynamicHomePage = dynamic(
	() => import('@/components/HomePage').then(mod => mod.HomePage),
	{ ssr: false, loading: () => <MiniLoader /> }
)

export default function Home() {
	return (
		<>
			<DynamicHomePage />
		</>
	)
}
