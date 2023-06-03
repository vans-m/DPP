import DigitalID from '../DigitalID/DigitalID'
import Material from '../Material/Material'
import Map from '../Map/Map'
import Textile from '../Textile/Textile'
import TopPicks from '../TopPicks/TopPicks'
import styles from './Garment.module.scss'
import { GarmentType } from '@/app/mocks/garments'
import Landing from '../Landing/Landing'
import { RefObject, useRef } from 'react'
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver'

type Garment = {
  garment: GarmentType
  activeSection: string
  setActiveSection: (param: string) => void
  DigitalIDSectionRef: RefObject<HTMLDivElement>
  FullDataSectionRef: RefObject<HTMLDivElement >
  TopPicksSectionRef: RefObject<HTMLDivElement>
}

const Garment = ({ garment, activeSection, setActiveSection, DigitalIDSectionRef, FullDataSectionRef, TopPicksSectionRef }: Garment) => {

  const MaterialSectionRef = useRef(null)
  const LandingSectionRef = useRef(null)
  const TextileSectionRef = useRef(null)
  const MapSectionRef = useRef(null)

  useIntersectionObserver(
    activeSection,
    setActiveSection,
    .5,
    [
      DigitalIDSectionRef,
      TopPicksSectionRef,
      LandingSectionRef, 
      TextileSectionRef, 
      MapSectionRef, 
      MaterialSectionRef
    ]
  )

  return (
    <div className={styles.wrapper} style={
      {
        backgroundImage: `url(${garment.pictures[0]})`
      }
    }>
      <div id='Landing' ref={LandingSectionRef} className={styles.homepage} style={{scrollSnapAlign: 'center', scrollSnapStop: 'always'}}>
        <Landing image={garment.pictures[0]} />
      </div>
      <div id='DigitalID' ref={DigitalIDSectionRef} style={{scrollSnapAlign: 'start', scrollSnapStop: 'always'}}>
        <DigitalID
          pictures={garment.pictures}
          sizeSystem={garment.sizeSystem}
          size={garment.size}
          season={garment.season}
          releaseDate={garment.releaseDate}
          colourName={garment.colourName}
          price={garment.price}
          material={garment.mainMaterial}
          activeSection={activeSection}
        />
      </div>
      <div id='FullData' ref={FullDataSectionRef}>
        <div id='Textile' ref={TextileSectionRef} style={{scrollSnapAlign: 'center', scrollSnapStop: 'always'}}>
          <Textile
            composition={garment.composition}
            manufactureCountry={garment.manufactureCountry}
            manufactureDate={garment.manufactureDate}
            sizeSystem={garment.sizeSystem}
            size={garment.size}
            weight={garment.weight}
            material={garment.mainMaterial}
            isVisible={activeSection === 'FullData'}
            materialSectionRef={MaterialSectionRef}
          />
        </div>
        <div id='Map' ref={MapSectionRef} style={{scrollSnapAlign: 'center', scrollSnapStop: 'always'}}>
          <Map journey={garment.journey} />
        </div>
        <div id='Material' ref={MaterialSectionRef} style={{scrollSnapAlign: 'center', scrollSnapStop: 'always'}}>
          <Material
            material={garment.mainMaterial}
            description={garment.description}
          />
        </div>
      </div>
      <div id='TopPicks' ref={TopPicksSectionRef} style={{scrollSnapAlign: 'center', scrollSnapStop: 'always'}}>
        <TopPicks id={garment.id} />
      </div>
    </div>
  )
}

export default Garment