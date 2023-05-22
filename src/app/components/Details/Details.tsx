import Image from 'next/image'
import styles from './Details.module.scss'

type Details = {
  sizeSystem: string
	size: number | string
	season: string
	releaseDate: string
	colourName: string
	price: string
	pictures: string[]
}

const Details = ({ pictures, sizeSystem, size, season, releaseDate, colourName, price}: Details) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.images}>
        {pictures.map(pic => <Image key={pic} src={pic} width={180} height={180} alt='' />)}
      </div>
      <div className={styles.details}>
        <span>Size System: {sizeSystem}</span>
        <span>Size: {size}</span>
        <span>Season: {season}</span>
        <span>Release Date: {releaseDate}</span>
        <span>Colour Name: {colourName}</span>
        <span>Price: {price}</span>
      </div>
    </div>
  )
}

export default Details