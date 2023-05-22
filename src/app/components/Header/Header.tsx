import Link from "next/link"
import styles from './Header.module.scss'
import Image from "next/image"
import Wrapper from "../Wrapper/Wrapper"

const Header = () => {
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className="wrapper">
          <Link href={`/`}>
            <Image className={styles.image} src={'/s&s-logo-ext.svg'} width={140} height={55} alt='' />
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header