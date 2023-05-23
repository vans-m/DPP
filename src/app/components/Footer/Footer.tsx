import Image from 'next/image'
import styles from './Footer.module.scss'
import Wrapper from '../Wrapper/Wrapper'

const Footer = () => {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.shadow}></div>
        <div className={styles.main}>
          <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={50} height={40} alt='' />  
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
