import styles from './DigitalID.module.scss'

import Masonry from '../Masonry/Masonry'
import Image from 'next/image'
import { MaterialType } from '@/app/mocks/materials'

type Details = {
  sizeSystem: string
	size: number | string
	season: string
	releaseDate: string
	colourName: string
	price: string
  pictures: string[]
  material: MaterialType
}

const Details = ({ pictures, sizeSystem, size, season, releaseDate, colourName, price, material}: Details) => {
  return (
    
      <div className={styles.wrapper}>
        <Masonry images={pictures} />
        <div className={styles.details}>
          <div className={styles.listing}>
            <span>Size System: {sizeSystem}</span>
            <span>Size: {size}</span>
            <span>Season: {season}</span>
            <span>Release Date: {releaseDate}</span>
            <span>Colour Name: {colourName}</span>
            <span>Price: {price}</span>
          </div>
          <div className={styles.logo}>
            <Image src={material.logo} alt='' width={100} height={100} style={{ width: 'auto', height: '35px' }} />
          </div>
        </div>
      </div>
    
  )
}

export default Details