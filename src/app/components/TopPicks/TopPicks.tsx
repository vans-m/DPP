import Image from 'next/image'
import styles from './TopPicks.module.scss'
import { garments } from '@/app/mocks/garments'
import Link from 'next/link'

type TopPicksProps = {
  id: string
  isVisible: boolean
}

const TopPicks = ({id, isVisible}: TopPicksProps) => {
  const topPick = id === '0001' ? garments['0000'] : garments['0001']
  const otherItems = Object.keys(garments).filter(g => g != topPick.id && g != id)
  const item1 = garments[otherItems[0]]
  const item2 = garments[otherItems[1]]
  const item3 = garments[otherItems[2]]
  
  return (
    <div className={styles.bg}>
      <div className={`${styles.wrapper} ${isVisible && styles.active}`}>
        <div className={styles.title}>
          <span className={styles.top}>You may also love:</span>
          <span>Wool</span>
        </div>
        <Link href={`/${topPick.id}/`} className={styles.topPick}>
          <div className={styles.imgWrapperPick}>
            <Image className={styles.imgPick} src={topPick.pictures[0]} alt='' width={150} height={150} />
          </div>
          <div className={styles.details}>
            <span>Manufacture Country: {topPick.manufactureCountry}</span>
            <span>{topPick.composition.join(', ')}</span>
            <span>Size: {topPick.size}</span>
            <span>Size System: {topPick.sizeSystem}</span>
            <span>Price: {topPick.price}</span>
            <Image className={styles.logo} src={topPick.mainMaterial.logo} alt='' width={150} height={150} style={{ height: '25px', width: 'fit-content' }} />
          </div>
        </Link>
        <div className={styles.bottom}>
            <div className={styles.picSection}>
              <span>Style With:</span>
              <div className={styles.picItems}>
                <Link href={`/${item1.id}/`} className={styles.imgWrapper}>
                  <Image className={styles.img} src={item1.pictures[0]} alt='' width={160} height={160} />
                </Link>
                <Link href={`/${item2.id}/`}  className={styles.imgWrapper}>
                  <Image className={styles.img} src={item2.pictures[0]} alt='' width={160} height={160} />
                </Link>
              </div>
            </div>
            <div className={styles.picSection}>
            <span>Discover:</span>
            <Link href={`/${item3.id}/`}  className={styles.imgWrapper}>
              <Image className={styles.img} src={item3.pictures[0]} alt='' width={160} height={160} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPicks