import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.scss'
import { garments } from './mocks/garments'

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main className={styles.homepage}>
      <h1 className={styles.title}>Welcome to your garment's Digital Twin!</h1>
      {Object.keys(garments).map(id => (
        <Link className={styles.link} href={`/${id}/`} key={id}>
          { id }
        </Link>
      ))}
      <Image className={styles.image} src={'/s&s-logo-transparent.png'} width={75} height={60} alt='' />
    </main>
  )
}
