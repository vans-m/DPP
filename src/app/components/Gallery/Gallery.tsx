import Image from 'next/image'
import styles from './Gallery.module.scss'
import { DetailsType } from '@/app/mocks/materials'


const Gallery = ({ details }: { details: DetailsType[] }) => {
  return (
    <div className={styles.grid} >
      {details.map(detail => {
        return (
          <div className={styles.gridItem} key={detail.description} >
            <Image className={styles.image} src={detail.image} alt='' fill />
            <div className={styles.description}>
              <span>{detail.description}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Gallery