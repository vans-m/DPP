import styles from './Map.module.scss'
import { JourneyItem } from '@/app/mocks/garments'

type Map = {
  journey: JourneyItem[]
}

const Map = ({ journey }: Map) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.map}>
        
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
      <div className={styles.info}>
        <span>*Information based on November 2022 records</span>
        {!journey[3] && <span>{`**Currently working on ${journey[2] ? '' : 'Tier 3 and '}Tier 4 information`}</span>}
      </div>
    </div>
  )
}

export default Map