export interface IItem {
	id: string
	name: string
	imageUrl: string
	price: number
	category: ICategory
	CategoryId: string
}

export interface ICategory {
	id: string
	name: string
	items: IItem[]
}
