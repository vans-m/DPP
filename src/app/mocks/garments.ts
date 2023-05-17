import { MaterialType } from './materials'

export const garments: GarmentsType = {}

type GarmentsType = Record<string, GarmentType>

type GarmentType = {
	id: string
	name: string
	sizeSystem: string
	size: number
	season: string
	releaseDate: string
	colourName: string
	price: string
	pictures: string[]
	composition: string[]
	manufactureCountry: string
	manufactureDate: string
	weight: string
	carbonEmissions: string
	journey: JourneyItem[]
	mainMaterial: MaterialType
}

type JourneyItem = {
	name: string
	description: string
}
