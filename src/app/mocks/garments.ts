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
	co2e: string
	journey: {
		tier1: string
		tier2: string
		tier3: string
	}
	mainMaterial: MaterialType
}
