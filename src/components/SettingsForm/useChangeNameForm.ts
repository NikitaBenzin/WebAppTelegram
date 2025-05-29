'use client'

import petService from '@/services/pet.service'
import { usePetStore } from '@/store/pet.store'
import { usePetNameStore } from '@/store/petName.store'
import { IPetDto } from '@/types/dto/flower.dto'
import { useMutation } from '@tanstack/react-query'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export function usePetNameForm() {
	const { register, handleSubmit, reset } = useForm<IPetDto>()
	const [isPending, startTransition] = useTransition()

	const pet = usePetStore(state => state.pet)
	const setPetName = usePetNameStore(state => state.setPetName)

	const { mutate: updateMutatePet, isPending: isDataPending } = useMutation({
		mutationKey: ['update flower'],
		mutationFn: (data: IPetDto) => petService.updatePetName(data),
		onSuccess() {
			startTransition(async () => {
				reset()
			})
		}
	})
	const onSubmit: SubmitHandler<IPetDto> = data => {
		data.id = String(pet?.id)
		updateMutatePet(data)
		setPetName(data.name)
	}
	const isLoading = isPending || isDataPending
	return {
		register,
		handleSubmit,
		onSubmit,
		isLoading
	}
}
