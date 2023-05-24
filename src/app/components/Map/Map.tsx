import Image from 'next/image'
import styles from './Map.module.scss'
import { JourneyItem } from '@/app/mocks/garments'

type Map = {
  journey: JourneyItem[]
}

const Map = ({ journey }: Map) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.map}>
        <span>The journey:</span>
        <span>Join Us On a Trip Down Memory Lane!</span>
        <Image src={'/map.png'} width={600} height={600} alt='' style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className={styles.tiers}>
        {journey.map((place, i) => {
          return (
            <div key={place.name} className={styles.tierElement}>
              <div className={styles.tier}>
                <span>Tier {i + 1}</span>
              </div>
              <div className={styles.details}>
                <span>{place.location}</span>
                <span>{place.id}</span>
              </div>
            </div>
          )
        })}
      </div>
      <span className={styles.info}>*Information based on November 2022 records</span>
    </div>
  )
}

export default Map