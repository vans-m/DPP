import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { handleCLick } from '@/app/hooks/useIntersectionObserver'
import { MutableRefObject } from 'react'

type Footer = {
  activeSection: string
  DigitalIDSectionRef: MutableRefObject<null>
  FullDataSectionRef: MutableRefObject<null>
  TopPicksSectionRef: MutableRefObject<null>
}

const Footer = ({ activeSection, DigitalIDSectionRef, FullDataSectionRef, TopPicksSectionRef }: Footer) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <button onClick={() => handleCLick(DigitalIDSectionRef)} id={'DigitalID'} className={activeSection === 'DigitalID' ? `${styles.button} ${styles.active}` : `${styles.button}`}>Digital ID</button>
            <button onClick={() => handleCLick(FullDataSectionRef)} id={'FullData'} className={activeSection === 'FullData' ? `${styles.button} ${styles.active}` : `${styles.button}`}>Full Data</button>
          </div>
          <Link href={'https://instagram.com/scotch_soda?igshid=MmJiY2I4NDBkZg=='} target='_blank' className={styles.nav}>
            <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={45} height={35} alt='' />
          </Link>
          <div className={styles.nav}>
            <button onClick={() => handleCLick(TopPicksSectionRef)} id={'TopPicks'} className={activeSection === 'TopPicks' ? `${styles.button} ${styles.active}` : `${styles.button}`}>Our Top Picks</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

