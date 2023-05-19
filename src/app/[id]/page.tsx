import { garments } from "../mocks/garments"
import Link from "next/link"

const GarmentPage = ({ params }: { params: { id: string } }) => {
  
  const id = params.id
  const garment = garments[id]
  if (!garment) {
    return null
  }
  return (
    <div>
      <h1>GARMENT PAGE</h1>
      <h2>{ garment.id }</h2>
      {Object.keys(garments)
        .filter(id => id !== garment.id)
        .map(id => (
        <Link href={`/${id}`} key={id}>
          Go to {id}
        </Link>
        ))}
        <Link href={`/`}>
          Go to the homepage
        </Link>
    </div>
  )
}

export default GarmentPage