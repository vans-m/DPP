import Image from 'next/image'
import styles from './Footer.module.scss'
import Wrapper from '../Wrapper/Wrapper'

const Footer = () => {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={50} height={40} alt='' />  
      </div>
    </Wrapper>
  )
}

export default Footer