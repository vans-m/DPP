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
  digitalIDSectionRef: RefObject<HTMLDivElement>
  fullDataSectionRef: RefObject<HTMLDivElement >
  topPicksSectionRef: RefObject<HTMLDivElement>
}

const Garment = ({ garment, activeSection, setActiveSection, digitalIDSectionRef, fullDataSectionRef, topPicksSectionRef }: Garment) => {

  const materialSectionRef = useRef(null)
  const landingSectionRef = useRef(null)
  const textileSectionRef = useRef(null)
  const mapSectionRef = useRef(null)

  useIntersectionObserver(
    activeSection,
    setActiveSection,
    .5,
    [
      digitalIDSectionRef,
      topPicksSectionRef,
      landingSectionRef, 
      textileSectionRef, 
      mapSectionRef, 
      materialSectionRef
    ]
  )

  return (
    <div className={styles.wrapper} style={
      {
        backgroundImage: `url(${garment.pictures[0]})`
      }
    }>
      <div id='Landing' ref={landingSectionRef} className={styles.homepage} style={{scrollSnapAlign: 'center', scrollSnapStop: 'always'}}>
        <Landing image={garment.pictures[0]} />
      </div>
      <div id='DigitalID' ref={digitalIDSectionRef} style={{scrollSnapAlign: 'start', scrollSnapStop: 'always'}}>
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
          isVisible={activeSection === 'DigitalID'}
        />
      </div>
      <div id='FullData' ref={fullDataSectionRef}>
        <div id='Textile' ref={textileSectionRef} style={{scrollSnapAlign: 'center', scrollSnapStop: 'always'}}>
          <Textile
            composition={garment.composition}
            manufactureCountry={garment.manufactureCountry}
            manufactureDate={garment.manufactureDate}
            sizeSystem={garment.sizeSystem}
            size={garment.size}
            weight={garment.weight}
            material={garment.mainMaterial}
            isVisible={activeSection === 'Textile'}
            materialSectionRef={materialSectionRef}
          />
        </div>
        <div id='Map' ref={mapSectionRef} style={{scrollSnapAlign: 'center', scrollSnapStop: 'always'}}>
          <Map journey={garment.journey} isVisible={activeSection === 'Map'} />
        </div>
        <div id='Material' ref={materialSectionRef} style={{scrollSnapAlign: 'center', scrollSnapStop: 'always'}}>
          <Material
            material={garment.mainMaterial}
            description={garment.description}
            isVisible={activeSection === 'Material'}
          />
        </div>
      </div>
      <div id='TopPicks' ref={topPicksSectionRef} style={{scrollSnapAlign: 'center', scrollSnapStop: 'always'}}>
        <TopPicks id={garment.id} isVisible={activeSection === 'TopPicks'} />
      </div>
    </div>
  )
}

export default Garment