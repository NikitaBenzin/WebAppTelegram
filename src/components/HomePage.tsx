'use client'

import { useUser } from '@/hooks/useUser'
import userService from '@/services/user.service'
import { useTelegramUserStore } from '@/store/telegram.store'
import { UserData } from '@/types/userData.types'
import WebApp from '@twa-dev/sdk'
import { useEffect } from 'react'

import { useUserStore } from '@/store/user.store'
import { IPet } from '@/types/pet.types'
import { EggHatching } from './EggHatching'
import Guide from './ui/Guide'

export function HomePage() {
	const setTelegramUser = useTelegramUserStore(state => state.setTelegramUser)
	const telegramUserData = useTelegramUserStore(state => state.telegramUser)
	const setUserStore = useUserStore(state => state.setUser)
	const userData = useUserStore(state => state.user)

	const { user, isLoading } = useUser(
		!!telegramUserData,
		String(telegramUserData?.id)
	)
	useEffect(() => {
		if (WebApp.initDataUnsafe.user) {
			setTelegramUser(WebApp.initDataUnsafe.user as UserData)
		}
	}, [])

	const startHatching = async () => {
		// Save PetUser to the storage for begining and show which pet does user get.
		const { data } = await userService.startHatching(
			String(telegramUserData?.id)
		)
		setUserStore(data)
	}

	return (
		<>
			{telegramUserData && !isLoading && (
				<div className="w-full flex flex-col gap-2">
					{!!user?.pets?.length ? (
						<>
							{!user?.pets[0]?.pet?.hatched && (
								<EggHatching pet={userData?.pets[0].pet as IPet} />
							)}
						</>
					) : (
						<Guide onComplete={() => startHatching()} />
					)}
				</div>
			)}
		</>
	)
}
