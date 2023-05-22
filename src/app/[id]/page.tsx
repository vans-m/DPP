import Masonry from "../components/Masonry/Masonry"
import { garments } from "../mocks/garments"
import styles from './page.module.scss'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Garment from "../components/Garment/Garment"



const GarmentPage = ({ params }: { params: { id: string } }) => {
  
  const id = params.id
  const garment = garments[id]
  if (!garment) {
    return null
  }
  return (
    <div className={styles.mainWrapper}>
      
      <Header />
      <Garment garment={garment} />
      <Footer />
      {/* {Object.keys(garments)
        .filter(id => id !== garment.id)
        .map(id => (
        <Link href={`/${id}`} key={id}>
          Go to {id}
        </Link>
        ))} */}
    </div>
  )
}

export default GarmentPage