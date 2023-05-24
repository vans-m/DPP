import styles from './Material.module.scss'
import { MaterialType } from '@/app/mocks/materials'
import Gallery from '../Gallery/Gallery'
import Image from 'next/image'

type Material = {
  material: MaterialType
	description: string[]
}

const Material = ({ material, description }: Material) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.images}>
        <Image src={material.logo} alt='' width={300} height={300} style={{width: 'auto', height: '40px'}} />
        <Gallery details={material.details} />
      </div>
      <div className={styles.details}>
        {description.map(p => <p key={p}>{p}</p>)}
      </div>
    </div>
  )
}

export default Material