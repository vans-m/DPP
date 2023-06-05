import Image from 'next/image'
import styles from './Landing.module.scss'
import { useState } from 'react'
import Modal from '../Modal/Modal'


/* eslint-disable react/no-unescaped-entities */

type Landing = {
  image: string
  isFirstVisit: boolean
}

const Landing = ({ image, isFirstVisit }: Landing) => {
  const [show, setShow] = useState<boolean>(true)
  const handleClose = () => setShow(false)

  return (
    <div style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className={styles.homepage} >
        <h1 className={styles.title}>Welcome to your garment's Digital Twin!</h1>
        <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={75} height={60} alt='' />
        {isFirstVisit && <Modal setShow={setShow} show={show} >
          <div className={styles.p}>
            <p>
              Hello! Here you will find information on your garment's production process, materials (including innovative ones) and styling options. <br />
              Don't forget to tap on our logo and let us know your thoughts! <br />
              Enjoy!
            </p>
            <button className={styles.button} onClick={handleClose}>
              Continue
            </button>
          </div>
        </Modal> }
      </div>
    </div>
  )
}

export default Landing