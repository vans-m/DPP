import styles from './Material.module.scss'
import { MaterialType } from '@/app/mocks/materials'
import Gallery from '../Gallery/Gallery'
import Image from 'next/image'

type Material = {
  material: MaterialType
  description: string[]
  isVisible: boolean
}

const Material = ({ material, description, isVisible }: Material) => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.wrapper} ${isVisible && styles.active}`}>
        <div className={styles.images}>
          <Image src={material.logo} alt='' width={150} height={150} style={{ height: '35px', width: 'fit-content' }} />
          <Gallery details={material.details} />
        </div>
        <div className={styles.details}>
          {description.map(p => <p key={p} className={styles.p}>{p}</p>)}
        </div>
      </div>
    </div>
  )
}

export default Material