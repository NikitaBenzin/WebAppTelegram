export interface IFlower {
	id: string
	telegramId: String
	lvl: number
	name: string
	type: FlowerType
	currentExp: number
	nextLvlExp: number
}

export enum FlowerType {
	ROSE,
	GIPSOFIL,
	CHAMOMILE
}
