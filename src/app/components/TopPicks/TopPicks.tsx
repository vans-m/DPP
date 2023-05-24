import Image from 'next/image'
import styles from './TopPicks.module.scss'
import Wrapper from '../Wrapper/Wrapper'
import { garments } from '@/app/mocks/garments'

const TopPicks = ({id}: {id: string}) => {
  const topPick = garments['0000']
  const otherItems = Object.keys(garments).filter(g => g != '0000' && g != id)
  const item1 = garments[otherItems[0]].pictures[0]
  const item2 = garments[otherItems[1]].pictures[0]
  const item3 = garments[otherItems[2]].pictures[0]
  
  return (
    <Wrapper>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span className={styles.top}>You may also love:</span>
          <span>Wool</span>
        </div>
        <div className={styles.topPick}>
          <Image src={topPick.pictures[0]} alt='' width={150} height={150} style={{ height: '100%', width: 'auto' }} />
          <div className={styles.details}>
            <span>Manufacture Country: {topPick.manufactureCountry}</span>
            <span>{topPick.composition.join(', ')}</span>
            <span>Size: {topPick.size}</span>
            <span>Size System: {topPick.sizeSystem}</span>
            <span>Price: {topPick.price}</span>
            <Image className={styles.logo} src={topPick.mainMaterial.logo} alt='' width={150} height={150} style={{ height: 'auto', width: '40px' }} />
          </div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.picSection}>
              <span>Style With:</span>
              <div className={styles.picItems}>
                <div className={styles.imgWrapper}>
                  <Image src={item1} alt='' width={70} height={70} style={{ height: '100%', width: 'auto' }} />
                </div>
                <div className={styles.imgWrapper}>
                  <Image src={item2} alt='' width={70} height={70} style={{ height: '100%', width: 'auto' }} />
                </div>
              </div>
            </div>
            <div className={styles.picSection}>
            <span>Discover:</span>
            <div className={styles.imgWrapper}>
              <Image src={item3} alt='' width={70} height={70} style={{ height: '100%', width: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default TopPicks