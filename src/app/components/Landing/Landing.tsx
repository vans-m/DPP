import Image from 'next/image'
import styles from './Landing.module.scss'

/* eslint-disable react/no-unescaped-entities */

type Landing = {
  image: string
}

const Landing = ({image}: Landing) => {
  return (
    <div className={styles.homepage} style={{backgroundImage: `url('${image}')`}}>
      <h1 className={styles.title}>Welcome to your garment's Digital Twin!</h1>
      <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={75} height={60} alt='' />
    </div>
  )
}

export default Landing