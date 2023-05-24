import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shadow}></div>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <Link href={''}>Digital ID</Link>
            <Link href={''}>Full Data</Link>
          </div>
          <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={45} height={35} alt='' />
          <div className={styles.nav}>
            <Link href={''}>Our Top Picks</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
