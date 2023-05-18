import Link from 'next/link'
import styles from './page.module.scss'
import { garments } from './mocks/garments'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.helo}>Helloooooooooooo</h1>
      {garments.map((garment) => (
        <Link href={`/${garment.id}`} key={garment.id}>
          { garment.id }
        </Link>
      ))}
    </main>
  )
}
