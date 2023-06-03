"use client"

import { garments } from "../mocks/garments"
import styles from './page.module.scss'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Garment from "../components/Garment/Garment"
import { useRef, useState } from "react"

const GarmentPage = ({ params }: { params: { id: string } }) => {
  const [activeSection, setActiveSection] = useState('')
  const digitalIDSectionRef = useRef(null)
  const fullDataSectionRef = useRef(null)
  const topPicksSectionRef = useRef(null)

  const id = params.id
  const garment = garments[id]
  if (!garment) {
    return null
  }

  return (
    <div className={styles.mainWrapper}>
      <Header />
      <Garment garment={garment}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        digitalIDSectionRef={digitalIDSectionRef}
        fullDataSectionRef={fullDataSectionRef}
        topPicksSectionRef={topPicksSectionRef}
      />
      <Footer activeSection={activeSection}
        digitalIDSectionRef={digitalIDSectionRef}
        fullDataSectionRef={fullDataSectionRef}
        topPicksSectionRef={topPicksSectionRef}
      />
    </div>
  )
}

export default GarmentPage
