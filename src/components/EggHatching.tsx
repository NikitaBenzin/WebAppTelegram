import { useIsPopupOpen } from '@/store/isPopupOpen'
import { usePetStore } from '@/store/pet.store'
import { usePetNameStore } from '@/store/petName.store'
import { IPet } from '@/types/pet.types'
import Image from 'next/image'
import { FaPen } from 'react-icons/fa'
import { ChangeName } from './SettingsForm/ChangeName'

interface Props {
	pet: IPet
}

export function EggHatching({ pet }: Props) {
	const setIsPopupOpen = useIsPopupOpen(state => state.setIsPopupOpen)
	const isPopupOpen = useIsPopupOpen(state => state.isPopupOpen)
	const petName = usePetNameStore(state => state.name)

	const setPet = usePetStore(state => state.setPet)
	setPet(pet)

	return (
		<div className="flex flex-col items-center justify-center gap-3">
			{/* <EggIntro /> */}
			<Image
				alt="Egg"
				src="/egg-hatching.png"
				width={120}
				height={144}
				draggable="false"
				// className="max-w-[120px] h-auto"
			/>
			<button
				className="cursor-pointer flex items-center justify-center gap-3 border-2 px-4 py-1 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
				type="button"
				onClick={() => setIsPopupOpen(true)}
			>
				{petName}
				<FaPen />
			</button>

			{isPopupOpen && <ChangeName />}
		</div>
	)
}
