'use client'

import { useUserFlowers } from '@/hooks/useFlowers'
import { useFlowerStore } from '@/store/store'
import WebApp from '@twa-dev/sdk'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface UserData {
	id: number
	first_name: string
	last_name?: string
	username?: string
	language_code: string
	is_premium?: boolean
}
export const dynamicParams = true
export default function Home() {
	const [userData, setUserData] = useState<UserData | null>(null)
	const { flowers, isLoading } = useUserFlowers(
		!!userData,
		String(userData?.id)
	)
	const setFlower = useFlowerStore(state => state.setFlower)

	useEffect(() => {
		if (WebApp.initDataUnsafe.user) {
			setUserData(WebApp.initDataUnsafe.user as UserData)
		}
	}, [])

	return (
		<main className="px-4">
			{userData ? (
				<div className="flex flex-col gap-2">
					<div>
						<h1>Flower</h1>
						<ul>
							<li>ID: {userData.id}</li>
						</ul>
					</div>
					<div className="flex flex-col gap-4">
						{isLoading ? (
							<div>Loading...</div>
						) : (
							flowers?.map(item => (
								<Link
									key={item.id}
									className="bg-zinc-800 w-full py-2 text-center"
									href={`/flower/${item.id}`}
									onClick={() => setFlower(item)}
								>
									{item.name}
								</Link>
							))
						)}
					</div>
				</div>
			) : (
				<>
					<div>Loading...</div>
				</>
			)}
		</main>
	)
}
