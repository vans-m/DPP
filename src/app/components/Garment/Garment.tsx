import DigitalID from '../DigitalID/DigitalID'
import Material from '../Material/Material'
import Map from '../Map/Map'
import Textile from '../Textile/Textile'
import TopPicks from '../TopPicks/TopPicks'
import styles from './Garment.module.scss'
import { GarmentType } from '@/app/mocks/garments'
import Landing from '../Landing/Landing'
import { MutableRefObject, useRef } from 'react'
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver'

type Garment = {
  garment: GarmentType
  activeSection: string
  setActiveSection: (param: string) => void
  DigitalIDSectionRef: MutableRefObject<null>
  FullDataSectionRef: MutableRefObject<null>
  TopPicksSectionRef: MutableRefObject<null>
}

const Garment = ({ garment, activeSection, setActiveSection, DigitalIDSectionRef, FullDataSectionRef, TopPicksSectionRef }: Garment) => {

  useIntersectionObserver(
    activeSection,
    setActiveSection,
    DigitalIDSectionRef,
    FullDataSectionRef,
    TopPicksSectionRef
  )

  return (
    <div className={styles.wrapper} style={
      {
        backgroundImage: `url(${garment.pictures[0]})`
      }
    }>
      <Landing image={garment.pictures[0]} />
      <div id='DigitalID' ref={DigitalIDSectionRef}>
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
      <div id='FullData' ref={FullDataSectionRef}>
        <Textile
          composition={garment.composition}
          manufactureCountry={garment.manufactureCountry}
          manufactureDate={garment.manufactureDate}
          sizeSystem={garment.sizeSystem}
          size={garment.size}
          weight={garment.weight}
          material={garment.mainMaterial}
        />
        <Map journey={garment.journey} />
        <Material
          material={garment.mainMaterial}
          description={garment.description}
        />
      </div>
      <div id='TopPicks' ref={TopPicksSectionRef}>
        <TopPicks id={garment.id} />
      </div>
    </div>
  )
}

export default Garment