import Image from 'next/image'
import styles from './Landing.module.scss'
import { useState } from 'react'
import Modal from '../Modal/Modal'


/* eslint-disable react/no-unescaped-entities */

type Landing = {
  image: string
}

const Landing = ({ image }: Landing) => {
  const [show, setShow] = useState<boolean>(true)
  return (
    <div className={styles.homepage} style={{backgroundImage: `url('${image}')`}}>
      <h1 className={styles.title}>Welcome to your garment's Digital Twin!</h1>
      <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={75} height={60} alt='' />
      <Modal setShow={setShow} show={show} >
        <p>
          Hello! Here you will find information on your garment's production process, materials (including innovative ones) and styling options. <br />
          Don't forget to tap on our logo and let us know your thoughts! <br />
          Enjoy!
        </p>
      </Modal> 
    </div>
  )
}

export default Landing