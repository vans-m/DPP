export const materials: MaterialsType = {}

type MaterialsType = Record<string, MaterialType>

export type MaterialType = {
	id: string
	name: string
	details: string[]
	logo: string
}
