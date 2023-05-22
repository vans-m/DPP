import Link from "next/link"
import styles from './Header.module.scss'
import Image from "next/image"

const Header = () => {
  return (
    <div className={styles.header}>
        <Link href={`/`}>
          <Image className={styles.image} src={'/s&s-logo-ext.svg'} width={140} height={55} alt='' />
        </Link>
    </div>
  )
}

export default Header