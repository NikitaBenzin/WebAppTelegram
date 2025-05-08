import { axiosClassic } from '@/api/axios'
import { IFlower } from '@/types/flower.types'

class FlowerService {
	private _Flower_URL_ = '/flower'

	async getFlowers(userId: string) {
		return axiosClassic.get<IFlower[]>(`${this._Flower_URL_}/${userId}`)
	}

	async updateFlower(data: IFlower) {
		return axiosClassic.put(`${this._Flower_URL_}`, { data })
	}
}

export default new FlowerService()
