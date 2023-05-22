import Details from '../Details/Details'
import Wrapper from '../Wrapper/Wrapper'
import styles from './Garment.module.scss'
import { GarmentType } from '@/app/mocks/garments'


const Garment = ({garment}: {garment: GarmentType}) => {
  return (
    <Wrapper>
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
      </div>
    </Wrapper>
  )
}

export default Garment