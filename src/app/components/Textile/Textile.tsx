import styles from './Textile.module.scss'

type Textile = {
  composition: string[]
	size: number | string
	sizeSystem: string
	manufactureDate: string
	manufactureCountry: string
	weight: string
  carbonEmissions: string
  background: string
}

const Textile = ({ composition, sizeSystem, size, manufactureDate, manufactureCountry, weight, carbonEmissions, background}: Textile) => {
  return (
    <div className={styles.background} style={
      {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${background})`
      }
    }>
      <div className={styles.wrapper}>
      <div className={styles.composition}>
        {composition.map(material => <span key={material}>{material}</span>)}
      </div>
        <div className={styles.details}>
          <span>Manufacture Country: {manufactureCountry}</span>
          <span>Manufacture Date: {manufactureDate}</span>
          <span>Size: {size}</span>
          <span>Size System: {sizeSystem}</span>
          <span>Weight: {weight}</span>
          <span>CO2 E: {carbonEmissions}</span>
        </div>
      </div>
    </div>
  )
}

export default Textile