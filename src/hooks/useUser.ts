import userService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export function useUser(isEnabled: boolean, userId: string) {
	const { data: user, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: () => userService.getUser(userId),
		select: data => data.data,
		enabled: isEnabled
	})

	return { user, isLoading }
}
