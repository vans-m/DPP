import Image from 'next/image'
import styles from './Footer.module.scss'



const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={50} height={40} alt='' />
    </div>
  )
}

export default Footer