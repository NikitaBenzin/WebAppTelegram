import { axiosClassic } from '@/api/axios'
import { IFlowerDto } from '@/types/dto/flower.dto'
import { IFlower } from '@/types/flower.types'

class FlowerService {
	private _Flower_URL_ = '/flower'

	async getFlowers(userId: string) {
		return axiosClassic.get<IFlower[]>(`${this._Flower_URL_}/${userId}`)
	}

	async updateFlower(data: IFlowerDto) {
		return axiosClassic.put(`${this._Flower_URL_}`, { data })
	}
}

export default new FlowerService()
