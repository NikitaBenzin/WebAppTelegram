'use client'

import { PAGE } from '@/config/public-page.config'
import { useUserFlowers } from '@/hooks/useFlowers'
import { useFlowerStore } from '@/store/flower.store'
import { useFlowerNameStore } from '@/store/flowerName.store'
import { useUserStore } from '@/store/user.store'
import { IFlower } from '@/types/flower.types'
import { UserData } from '@/types/userData.types'
import WebApp from '@twa-dev/sdk'
import Link from 'next/link'
import { useEffect } from 'react'
import { MiniLoader } from './ui/MiniLoader'

export function StartPage() {
	const setFlower = useFlowerStore(state => state.setFlower)
	const setUser = useUserStore(state => state.setUser)
	const setFlowerName = useFlowerNameStore(state => state.setFlowerName)
	const userData = useUserStore(state => state.user)
	const { flowers, isLoading } = useUserFlowers(
		!!userData,
		String(userData?.id)
	)
	useEffect(() => {
		if (WebApp.initDataUnsafe.user) {
			setUser(WebApp.initDataUnsafe.user as UserData)
		}
	}, [])

	const setVariables = (item: IFlower) => {
		setFlower(item)
		setFlowerName(item.name)
	}

	return (
		<>
			{userData ? (
				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-4">
						{isLoading ? (
							<MiniLoader />
						) : Number(flowers?.length) === 0 ? (
							<p className="font-semibold text-center text-2xl">
								You don't have a flower yet.
							</p>
						) : (
							flowers?.map(item => (
								<Link
									key={item.id}
									className="text-2xl w-full py-3 text-center bg-button-primary font-bold rounded-xl hover:scale-105 hover:bg-button-secondary duration-300"
									href={PAGE.FLOWER}
									onClick={() => setVariables(item)}
								>
									{item.name}
								</Link>
							))
						)}
					</div>
				</div>
			) : (
				<>
					<MiniLoader />
				</>
			)}
		</>
	)
}
