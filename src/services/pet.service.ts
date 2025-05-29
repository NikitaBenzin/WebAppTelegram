import { axiosClassic } from '@/api/axios'
import { IPetDto } from '@/types/dto/flower.dto'
import { IPet } from '@/types/pet.types'

class PetService {
	private readonly PetPrefix = '/pet/'

	async updatePetName(data: IPetDto) {
		return axiosClassic.patch<IPet>(`${this.PetPrefix}`, data)
	}
}

export default new PetService()
