'use client'

import flowerService from '@/services/flower.service'
import { useFlowerStore } from '@/store/flower.store'
import { useFlowerNameStore } from '@/store/flowerName.store'
import { IFlowerDto } from '@/types/dto/flower.dto'
import { useMutation } from '@tanstack/react-query'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export function useSettingsForm() {
	const { register, handleSubmit, reset } = useForm<IFlowerDto>()
	const flower = useFlowerStore(state => state.flower)
	const setFlowerName = useFlowerNameStore(state => state.setFlowerName)
	const [isPending, startTransition] = useTransition()

	const { mutate: updateMutateFlower, isPending: isDataPending } = useMutation({
		mutationKey: ['update flower'],
		mutationFn: (data: IFlowerDto) => flowerService.updateFlower(data),
		onSuccess() {
			startTransition(async () => {
				reset()
			})
		}
	})

	const onSubmit: SubmitHandler<IFlowerDto> = data => {
		data.id = String(flower?.id)
		updateMutateFlower(data)
		setFlowerName(data.name)
	}

	const isLoading = isPending || isDataPending

	return {
		register,
		handleSubmit,
		onSubmit,
		isLoading
	}
}
