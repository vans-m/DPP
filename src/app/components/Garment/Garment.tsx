import DigitalID from '../DigitalID/DigitalID'
import Material from '../Material/Material'
import Map from '../Map/Map'
import Textile from '../Textile/Textile'
import TopPicks from '../TopPicks/TopPicks'
import styles from './Garment.module.scss'
import { GarmentType } from '@/app/mocks/garments'


const Garment = ({garment}: {garment: GarmentType}) => {
  return (

      <div className={styles.wrapper}>
        <DigitalID
          pictures={garment.pictures}
          sizeSystem={garment.sizeSystem}
          size={garment.size}
          season={garment.season}
          releaseDate={garment.releaseDate}
          colourName={garment.colourName}
          price={garment.price}
          material={garment.mainMaterial}
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
        <Map journey={garment.journey} />
        <Material
          material={garment.mainMaterial}
          description={garment.description}
        />
        <TopPicks id={garment.id} />
      </div>
      
  )
}

export default Garment