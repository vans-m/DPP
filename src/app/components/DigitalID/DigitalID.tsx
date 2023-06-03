import styles from './DigitalID.module.scss'
import Masonry from '../Masonry/Masonry'
import Image from 'next/image'
import { MaterialType } from '@/app/mocks/materials'
import { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'

/* eslint-disable react/no-unescaped-entities */

type DigitalIDProps = {
  sizeSystem: string
	size: number | string
	season: string
	releaseDate: string
	colourName: string
	price: string
  pictures: string[]
  material: MaterialType
  activeSection: string
  isVisible: boolean
}

const DigitalID = ({ pictures, sizeSystem, size, season, releaseDate, colourName, price, material, activeSection, isVisible }: DigitalIDProps) => {
  const [show, setShow] = useState<boolean>(false)
  const [hasRun, setHasRun] = useState<boolean>(false)
 
  useEffect(() => {
        if(activeSection === 'DigitalID' && !hasRun) {
          setHasRun(true)
          setShow(true);
        }
      }, [activeSection, hasRun])
  
  return (
    <div className={styles.bg}>
      <div className={`${styles.wrapper} ${isVisible && styles.active}`}>
        <Masonry images={pictures} />
        <div className={styles.details}>
          <div className={styles.listing}>
            <span>Size System: {sizeSystem}</span>
            <span>Size: {size}</span>
            <span>Season: {season}</span>
            <span>Release Date: {releaseDate}</span>
            <span>Colour Name: {colourName}</span>
            <span>Price: {price}</span>
          </div>
          <div className={styles.logo}>
            <Image src={material.logo} alt='' width={100} height={100} style={{ width: 'auto', height: '25px' }} />
          </div>
        </div>
        <Modal setShow={setShow} show={show} >
          <p>Feel free to scroll down the contents, or skip to whichever page you prefer.</p>
          <p>DIGITAL ID gives information about the essential details of your product - colour name, size, release date and season.</p>
          <p>FULL DATA goes in-depth about the material producion tiers and quantity, characteristics, environmental qualities and certifications.</p>
          <p>OUR TOP PICKS provides options that have similar appearance and material features as your scanned product, plus styling options and a 'discover' alternative.</p>
          <p>Reach out to us or share your experience on our Instagram page!</p>
        </Modal> 
      </div>
    </div>
  )
}

export default DigitalID