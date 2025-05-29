import { IItem } from './additional.types'
import { IPet } from './pet.types'

// enums
export type PetMood = 'HAPPY' | 'SAD'
export type PetAction = 'PET' | 'FEED' | 'PLAY'

export interface IUser {
	id: string
	telegramId: string
	name?: string
	avatarUrl?: string
	pets: IPetUser[]
	items: IUserItem[]
	createdAt: string // ISO string
}

export interface IUserItem {
	id: string
	userId: string
	itemId: string
	item: IItem
	equipped: boolean
	acquiredAt: string
}

export interface IPetUser {
	id: string
	userId: string
	petId: string
	role: 'owner' | 'co_parent'
	joinedAt: string
	pet: IPet
}
