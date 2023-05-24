export const materials: MaterialsType = {
	wool: {
		id: '001',
		name: 'Wool',
		details: [
			{
				image: '/wool-1.jpeg',
				description: 'NO WASH'
			},
			{
				image: '/wool-2.jpeg',
				description: 'NO DISCOMFORT'
			},
			{
				image: '/wool-3.jpeg',
				description: 'NO ITCH'
			},
			{
				image: '/wool-4.jpg',
				description: 'NO GREENWASH'
			}
		],
		logo: '/wool-logo.webp'
	},
	tencel: {
		id: '002',
		name: 'Tencel™',
		details: [
			{
				image: '/tencel-1.jpg',
				description: 'BREATHABLE'
			},
			{
				image: '/tencel-2.png',
				description: 'GENTLE ON SKIN'
			},
			{
				image: '/tencel-3.jpg',
				description: 'NATURAL COMFORT'
			},
			{
				image: '/tencel-4.jpg',
				description: 'BIODEGRADABLE'
			}
		],
		logo: '/tencel-logo.png'
	},
	mirum: {
		id: '003',
		name: 'Mirum®',
		details: [
			{
				image: '/mirum-1.jpeg',
				description: 'ZERO PLASTICS'
			},
			{
				image: '/mirum-2.png',
				description: 'ANIMAL FREE'
			},
			{
				image: '/mirum-3.jpeg',
				description: 'HIGHLY DURABLE'
			},
			{
				image: '/mirum-4.jpeg',
				description: 'BIONEUTRAL'
			}
		],
		logo: '/mirum-logo.jpg'
	},
	econyl: {
		id: '004',
		name: 'Econyl®',
		details: [
			{
				image: '/econyl-1.jpeg',
				description: 'DAMAGE-RESISTANT'
			},
			{
				image: '/econyl-2.png',
				description: 'CIRCULAR PRODUCE'
			},
			{
				image: '/econyl-3.jpeg',
				description: 'FLEXIBLE'
			},
			{
				image: '/econyl-4.jpeg',
				description: 'LIVE & REPEAT'
			}
		],
		logo: '/econyl-logo.jpg'
	}
}

type MaterialsType = Record<string, MaterialType>

export type DetailsType = {
	image: string
	description: string
}

export type MaterialType = {
	id: string
	name: string
	details: DetailsType[]
	logo: string
}
