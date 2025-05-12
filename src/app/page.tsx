'use client'

import { MiniLoader } from '@/components/ui/MiniLoader'
import dynamic from 'next/dynamic'

const DynamicStartPage = dynamic(
	() => import('@/components/StartPage').then(mod => mod.StartPage),
	{ ssr: false, loading: () => <MiniLoader /> }
)

export default function Home() {
	return (
		<>
			<DynamicStartPage />
		</>
	)
}
