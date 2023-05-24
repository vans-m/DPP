import DigitalID from '../DigitalID/DigitalID'
import Wrapper from '../Wrapper/Wrapper'
import styles from './Garment.module.scss'
import { GarmentType } from '@/app/mocks/garments'


const Garment = ({garment}: {garment: GarmentType}) => {
  return (
    <Wrapper>
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
      </div>
    </Wrapper>
  )
}

export default Garment