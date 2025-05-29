import { axiosClassic } from '@/api/axios'
import { IUser } from '@/types/user.types'

class UserService {
	async getUser(userId: string) {
		return axiosClassic.get<IUser>(`/${userId}`)
	}

	async startHatching(userId: string) {
		return axiosClassic.get<IUser>(`/start-hatching/${userId}`)
	}
}

export default new UserService()
