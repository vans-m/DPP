import { materials, MaterialType } from './materials'

export const garments: GarmentsType = {
	'0000': {
		id: '0000',
		sizeSystem: 'EU',
		size: 'S/M',
		season: 'FW21',
		releaseDate: '2021, August 2',
		colourName: 'Ecru',
		price: '310.00 GBP',
		pictures: ['/cardigan-1.png', '/cardigan-2.png', '/cardigan-3.png'],
		composition: ['74% Wool*', '18% Alpaca', '8% Acrylic'],
		manufactureCountry: 'Italy',
		manufactureDate: '2021, July 15',
		weight: '400 g',
		journey: [
			{
				name: 'Tier 1',
				location: 'BORTOLOZZI LIDO SAS, Italy',
				id: 'OS ID: IT2022234BSHXA8'
			},
			{
				name: 'Tier 2',
				location: 'Dundar Tekstil Orme San. Tic. LTD., Turkey',
				id: 'OS ID: TR2020191NESSW6'
			},
			{
				name: 'Tier 3',
				location: 'The Knitwit Stable, Netherlands',
				id: 'OS ID: NL2035116SA2SM9'
			},
			{
				name: 'Tier 4',
				location: 'The Knitwit Stable, Netherlands',
				id: 'OS ID: NL2035116SA2SM9'
			}
		],
		mainMaterial: materials.wool,
		description: [
			'Your cardigan is the result of a collaboration with our friends Knitwit Stable, who are based here, in Netherlands. Knitted from 100% natural, undyed yarns, from 80% White Texelaar sheep and 20% alpaca that graze in the Netherlands, the creation of each cardigan from start to finish is small-scale, uses two kilos of raw wool and takes around one day.',
			'Around 800.000 sheep need shearing at least once a year, with each sheep providing around 4 kg of wool. Dutch sheep produce 2 million kg of wool each year. Since there is no wool industry in the Netherlands, there is barely any use, which is why wool is often considered a waste product (Scotch & Soda, 2021).',
			'With this collection we are investigating whether we can use Dutch wool in our collection by connecting it to our existing supply chain in Europe (Scotch & Soda, 2021).',
			'Wool is fully biodegradable when not blended with synthetic materials.'
		]
	},
	'0001': {
		id: '0001',
		sizeSystem: 'EU',
		size: 34,
		season: 'FW21',
		releaseDate: '2021, August 2',
		colourName: 'Aged White',
		price: '194.00 GBP',
		pictures: ['/jumper-1.png', '/jumper-2.png', '/jumper-3.png', '/jumper-4.png'],
		composition: ['48% Wool*', '31% Nylon', '21% Polyester'],
		manufactureCountry: 'Turkey',
		manufactureDate: '21.05.19',
		weight: '350 g',
		journey: [
			{
				name: 'Tier 1',
				location: 'Dundar Tekstil Orme San. Tic. LTD, Turkey',
				id: 'OS ID: IN2022116SB6YT7'
			},
			{
				name: 'Tier 2',
				location: 'ABHI Fab, India',
				id: 'OS ID: IN2022116SB6YT7'
			},
			{
				name: 'Tier 3',
				location: 'The Knitwit Stable, Netherlands',
				id: 'OS ID: NL2035116SA2SM9'
			},
			{
				name: 'Tier 4',
				location: 'The Knitwit Stable, Netherlands',
				id: 'OS ID: NL2035116SA2SM9'
			}
		],
		mainMaterial: materials.wool,
		description: [
			'Your jumper is the result of a collaboration with our friends Knitwit Stable, who are based here, in Netherlands. Knitted from 100% natural, undyed yarns, from 80% White Texelaar sheep and 20% alpaca that graze in the Netherlands, the creation of each cardigan from start to finish is small-scale, uses two kilos of raw wool and takes around one day.',
			'Around 800.000 sheep need shearing at least once a year, with each sheep providing around 4 kg of wool. Dutch sheep produce 2 million kg of wool each year. Since there is no wool industry in the Netherlands, there is barely any use, which is why wool is often considered a waste product (Scotch & Soda, 2021).',
			'With this collection we are investigating whether we can use Dutch wool in our collection by connecting it to our existing supply chain in Europe (Scotch & Soda, 2021).',
			'Wool is fully biodegradable when not blended with synthetic materials.'
		]
	},
	'0002': {
		id: '0002',
		sizeSystem: 'EU',
		size: 36,
		season: 'SS22',
		releaseDate: '2022, February 2',
		colourName: 'Black',
		price: '169.95 GBP',
		pictures: ['/pant-1.png', '/pant-2.png', '/pant-3.png', '/pant-4.png'],
		composition: ['60% Lyocell (Tencel™)', '40% Linen'],
		manufactureCountry: 'Turkey',
		manufactureDate: '2022, January 20',
		weight: '250 g',
		journey: [
			{
				name: 'Tier 1',
				location: 'GM TEKSTIL SARL, Turkey',
				id: 'OS ID: TR202232OHXAOTZ'
			},
			{
				name: 'Tier 2',
				location: 'ABHI Fab, India',
				id: 'OS ID: IN2022116SB6YT7'
			}
		],
		mainMaterial: materials.tencel,
		description: [
			'TENCEL™ Lyocell is made from wood pulp into a cellulosic fibre derived from beech wood, sourced from sustainable forests in Austria and neighboring countries. It is then manufactured at the Lenzing site. This manufactoring process received the European Award for the Environment from the European Commission in the category "The Technology Award for Sustainable Development".',
			'TENCEL™ Lyocell fibers have also been certified as Biobased by the United States Department of Agriculture (USDA).',
			'The material itself is biodegradable under industrial, home, soil, fresh water and marine conditions. TENCEL™ Lyocell fibres support body temperature and help to keep it cool/warm when needed. As well as this, garments from these fibres naturally feature a smooth surface area, allowing comfort for sensitive skin.'
		]
	},
	'0003': {
		id: '0003',
		sizeSystem: 'EU',
		size: 'One Size',
		season: 'FW21',
		releaseDate: '2021, August 2',
		colourName: 'Black',
		price: '199.95 GBP',
		pictures: ['/purse-1.png', '/purse-2.png', '/purse-3.png'],
		composition: ['47% Rubber', '28% Natural Waxes and Oils', '22% Plant and Mineral Fillers'],
		manufactureCountry: 'Italy',
		manufactureDate: '2021, July 25',
		weight: '150 g',
		journey: [
			{
				name: 'Tier 1',
				location: 'A.L. PAGANINI LUCIANO, Italy',
				id: 'OS ID: IT20222295C26MX'
			},
			{
				name: 'Tier 2',
				location: 'KARMA PROCESSORS PRIVATE LIMITED, India',
				id: 'OS ID: IN202035124EWE2'
			}
		],
		mainMaterial: materials.mirum,
		description: [
			'This phone purse is one of our few products from MIRUM® leather - 100% USDA certified bio-based leather laternative created from natural materials only, including agricultural waste - such as rice hulls - natural oils, rubber and cork, sourced from responsibly managed forests.',
			'MIRUM® is a plastic and chemical-free alternative to leather. This product (and all MIRUM® products) features zero plastics, no acrylic coating and no PU binders.',
			'MIRUM® is made in the USA, Peoria, Illinois, where the company also use renewable wind energy.'
		]
	},
	'0004': {
		id: '0004',
		sizeSystem: 'EU',
		size: 36,
		season: 'SS22',
		releaseDate: '2021, May 2',
		colourName: 'Multi',
		price: '119.00 GBP',
		pictures: ['/swimsuit-1.png', '/swimsuit-2.png', '/swimsuit-3.png', '/swimsuit-4.png'],
		composition: ['78% Regenerated Nylon - Econyl®', '22% Elastane'],
		manufactureCountry: 'Turkey',
		manufactureDate: '2021, April 20',
		weight: '170 g',
		journey: [
			{
				name: 'Tier 1',
				location: 'Akce Tekstil, Turkey',
				id: 'OS ID: TR20223202YBSG5'
			},
			{
				name: 'Tier 2',
				location: 'Agolab S.R.L, Italy',
				id: 'OS ID: IT2019172WPBDHE'
			}
		],
		mainMaterial: materials.econyl,
		description: [
			'This swimsuit is made of 78% Nylon waste, transformed into ECONYL® - Regenerated Nylon. The innovative material is made from fishing nets, fabric scraps, carpet flooring and industrial plastic, all gathered globally.',
			'Through purifying and recycling used conventional nylon, the same form of it is created, but regenerated and possible to recycle infinitely.',
			'For every 10,000 tons of ECONYL®, the company is able to save 70,000 barrels of crude oil and 65,100 tons of CO2-eq emissions (ECONYL®, 2020).'
		]
	}
}

type GarmentsType = Record<string, GarmentType>

export type GarmentType = {
	id: string
	sizeSystem: string
	size: number | string
	season: string
	releaseDate: string
	colourName: string
	price: string
	pictures: string[]
	composition: string[]
	manufactureCountry: string
	manufactureDate: string
	weight: string
	journey: JourneyItem[]
	mainMaterial: MaterialType
	description: string[]
}

export type JourneyItem = {
	name: string
	location: string
	id: string
}
