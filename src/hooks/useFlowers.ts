import flowerService from '@/services/flower.service'
import { useQuery } from '@tanstack/react-query'

export function useUserFlowers(isEnabled: boolean, userId: string) {
	const { data: flowers, isLoading } = useQuery({
		queryKey: ['flowers'],
		queryFn: () => flowerService.getFlowers(userId),
		select: data => data.data,
		enabled: isEnabled
	})

	return { flowers, isLoading }
}
