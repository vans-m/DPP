import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { handleCLick } from '@/app/hooks/useIntersectionObserver'
import { RefObject } from 'react'

type Footer = {
  activeSection: string
  digitalIDSectionRef: RefObject<HTMLDivElement>
  fullDataSectionRef: RefObject<HTMLDivElement>
  topPicksSectionRef: RefObject<HTMLDivElement>
}

const Footer = ({ activeSection, digitalIDSectionRef, fullDataSectionRef, topPicksSectionRef }: Footer) => {

  const isFullDataActive =
    activeSection === 'Textile' ||
    activeSection === 'Map' ||
    activeSection === 'Material'
    

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <button onClick={() => handleCLick(digitalIDSectionRef)} id={'DigitalID'} className={activeSection === 'DigitalID' ? `${styles.button} ${styles.active}` : `${styles.button}`}>Digital ID</button>
            <button onClick={() => handleCLick(fullDataSectionRef)} id={'FullData'} className={isFullDataActive ? `${styles.button} ${styles.active}` : `${styles.button}`}>Full Data</button>
          </div>
          <Link href={'https://instagram.com/scotch_soda?igshid=MmJiY2I4NDBkZg=='} target='_blank' className={styles.nav}>
            <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={45} height={35} alt='' />
          </Link>
          <div className={styles.nav}>
            <button onClick={() => handleCLick(topPicksSectionRef)} id={'TopPicks'} className={activeSection === 'TopPicks' ? `${styles.button} ${styles.active}` : `${styles.button}`}>Our Top Picks</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

