import styles from './Header.module.scss'
import Image from "next/image"

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Image className={styles.image} src={'/s&s-logo-ext.svg'} width={140} height={55} alt='' />
      </div>
    </div>
  )
}

export default Header