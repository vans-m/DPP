import Link from 'next/link'
import styles from './page.module.scss'
import { garments } from './mocks/garments'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.helo}>Helloooooooooooo</h1>
      {Object.keys(garments).map(id => (
        <Link href={`/${id}`} key={id}>
          { id }
        </Link>
      ))}
    </main>
  )
}
