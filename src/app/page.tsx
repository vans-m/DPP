import Link from 'next/link'
import styles from './page.module.scss'
import { garments } from './mocks/garments'

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main>
      {Object.keys(garments).map(id => (
        <Link className={styles.link} href={`/${id}/`} key={id}>
          { id }
        </Link>
      ))}
    </main>
  )
}
