export const materials: MaterialsType = {
	wool: {
		id: '001',
		name: 'Wool',
		details: [
			{
				image: 'pic1',
				description: 'NO WASH'
			},
			{
				image: 'pic2',
				description: 'NO DISCOMFORT'
			},
			{
				image: 'pic3',
				description: 'NO ITCH'
			},
			{
				image: 'pic4',
				description: 'NO GREENWASH'
			}
		],
		logo: 'pic-logo'
	},
	tencel: {
		id: '002',
		name: 'Tencel™',
		details: [
			{
				image: 'pic1',
				description: 'BREATHABLE'
			},
			{
				image: 'pic2',
				description: 'GENTLE ON SKIN'
			},
			{
				image: 'pic3',
				description: 'NATURAL COMFORT'
			},
			{
				image: 'pic4',
				description: 'BIODEGRADABLE'
			}
		],
		logo: 'pic-logo'
	},
	mirum: {
		id: '003',
		name: 'Mirum®',
		details: [
			{
				image: 'pic1',
				description: 'ZERO PLASTICS'
			},
			{
				image: 'pic2',
				description: 'ANIMAL FREE'
			},
			{
				image: 'pic3',
				description: 'HIGHLY DURABLE'
			},
			{
				image: 'pic4',
				description: 'BIONEUTRAL'
			}
		],
		logo: 'pic-logo'
	},
	econyl: {
		id: '004',
		name: 'Econyl®',
		details: [
			{
				image: 'pic1',
				description: 'DAMAGE-RESISTANT'
			},
			{
				image: 'pic2',
				description: 'CIRCULAR PRODUCE'
			},
			{
				image: 'pic3',
				description: 'FLEXIBLE'
			},
			{
				image: 'pic4',
				description: 'LIVE & REPEAT'
			}
		],
		logo: 'pic-logo'
	}
}

type MaterialsType = Record<string, MaterialType>

type DetailsType = {
	image: string
	description: string
}

export type MaterialType = {
	id: string
	name: string
	details: DetailsType[]
	logo: string
}
