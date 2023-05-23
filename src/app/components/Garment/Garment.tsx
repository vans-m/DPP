import Details from '../Details/Details'
import Textile from '../Textile/Textile'
import styles from './Garment.module.scss'
import { GarmentType } from '@/app/mocks/garments'


const Garment = ({garment}: {garment: GarmentType}) => {
  return (

      <div className={styles.wrapper}>
        <Details
          pictures={garment.pictures}
          sizeSystem={garment.sizeSystem}
          size={garment.size}
          season={garment.season}
          releaseDate={garment.releaseDate}
          colourName={garment.colourName}
          price={garment.price}
        />
        <Textile
          composition={garment.composition}
          manufactureCountry={garment.manufactureCountry}
          manufactureDate={garment.manufactureDate}
          sizeSystem={garment.sizeSystem}
          size={garment.size}
          weight={garment.weight}
          carbonEmissions={garment.carbonEmissions}
          background={garment.pictures[0]}
        />
      </div>

  )
}

export default Garment