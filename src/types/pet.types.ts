import { IPetUser, PetAction, PetMood } from './user.types'

export interface IPet {
	id: string
	name?: string
	hatched: boolean
	hatchTime?: string
	type: PetType
	status?: IPetStatus
	users: IPetUser[]
	petActionLog: IPetActionLog[]
	createdAt: string
}

export interface IPetStatus {
	id: string
	petId: string
	mood: PetMood
	energy: number
	hunger: number
	updatedAt: string
}

export interface IPetActionLog {
	id: string
	petId: string
	userId: string
	action: PetAction
	createdAt: string
}

export enum PetType {
	'WHITE_CAT',
	'ORANGE_CAT',
	'HAT_CAT',
	'DEER',
	'RABBIT',
	'PANDA',
	'HASKY',
	'PENGUIN'
}
