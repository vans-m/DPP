"use client"

import { garments } from "../mocks/garments"
import styles from './page.module.scss'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Garment from "../components/Garment/Garment"
import { useRef, useState } from "react"

const GarmentPage = ({ params }: { params: { id: string } }) => {
  const [activeSection, setActiveSection] = useState('')
  const DigitalIDSectionRef = useRef(null)
  const FullDataSectionRef = useRef(null)
  const TopPicksSectionRef = useRef(null)

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
        DigitalIDSectionRef={DigitalIDSectionRef}
        FullDataSectionRef={FullDataSectionRef}
        TopPicksSectionRef={TopPicksSectionRef}
      />
      <Footer activeSection={activeSection}
        DigitalIDSectionRef={DigitalIDSectionRef}
        FullDataSectionRef={FullDataSectionRef}
        TopPicksSectionRef={TopPicksSectionRef}
      />
    </div>
  )
}

export default GarmentPage
