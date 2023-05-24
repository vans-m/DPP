import Link from "next/link"
import styles from './Header.module.scss'
import Image from "next/image"
import Wrapper from "../Wrapper/Wrapper"

const Header = () => {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <Link href={`/`}>
            <Image className={styles.image} src={'/s&s-logo-ext.svg'} width={140} height={55} alt='' />
          </Link>
        </div>
        <div className={styles.shadow}></div>
      </div>
    </Wrapper>
  )
}

export default Header