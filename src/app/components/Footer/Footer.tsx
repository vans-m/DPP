import Image from 'next/image'
import styles from './Footer.module.scss'
import Wrapper from '../Wrapper/Wrapper'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Wrapper>
        <div className={styles.shadow}></div>
          <div className={styles.content}>
            <div className={styles.nav}>
              <Link href={''}>Digital ID</Link>
              <Link href={''}>Full Data</Link>
            </div>
            <div className={styles.main}>
              <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={45} height={35} alt='' />
            <div className={styles.nav}>
              <Link href={''}>Our Top Picks</Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Footer
