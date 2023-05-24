import Image from 'next/image'
import styles from './Masonry.module.scss'
import Wrapper from '../Wrapper/Wrapper'


const Masonry = ({ images }: { images: string[] }) => {
  return (
    <Wrapper>
        <div className={styles.grid} >
        <div className={styles.halfGrid}>
          <div className={styles.gridItem}>
            <Image src={images[0]} alt='' style={{ width: '100%', height: 'auto' }} width={500} height={500} />
          </div>
          <div className={styles.gridItem}>
            <Image src={images[2]} alt='' style={{ width: '100%', height: 'auto' }} width={500} height={500} />
          </div>
        </div>
        <div className={styles.halfGrid}>
          <div className={styles.gridItem}>
            <Image src={images[1]} alt='' style={{ width: '100%', height: 'auto' }} width={500} height={500} />
          </div>
          {images[3] && <div className={styles.gridItem}>
            <Image src={images[3]} alt='' style={{ width: '100%', height: 'auto' }} width={500} height={500} />
          </div>}
        </div>
      </div>
    </Wrapper>
  )
}

export default Masonry