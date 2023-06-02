import { MaterialType } from '@/app/mocks/materials'
import styles from './Textile.module.scss'
import { handleCLick } from '@/app/hooks/useIntersectionObserver'
import { MutableRefObject } from 'react'

type Textile = {
  composition: string[]
	size: number | string
	sizeSystem: string
	manufactureDate: string
	manufactureCountry: string
  weight: string
  material: MaterialType
  materialSectionRef: MutableRefObject<null>
}

const Textile = ({ composition, sizeSystem, size, manufactureDate, manufactureCountry, weight, material, materialSectionRef}: Textile) => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
      <div className={styles.composition}>
          {composition.map((material, i) => {
            if (i === 0) return (<button key={material} className={styles.button} onClick={() => handleCLick(materialSectionRef)}><span className={styles.span}>{material}</span></button>)
            else return (<span key={material} className={styles.span}>{material}</span>)
          })}
      </div>
      {material.name === 'Wool' && <span className={styles.wool}>*Wool naturally sourced and gathered by the Knitwit Stable</span>}
      <div className={styles.details}>
        <span>Manufacture Country: {manufactureCountry}</span>
        <span>Manufacture Date: {manufactureDate}</span>
        <span>Size: {size}</span>
        <span>Size System: {sizeSystem}</span>
        <span>Weight: {weight}</span>
        </div>
      </div>
    </div>
  )
}

export default Textile