import { garments, GarmentType } from "@/app/mocks/garments"
import Link from "next/link"

export const getStaticPaths = () => {
  const garmentPaths = garments.map(garment => {
    return {
      params: {id: garment.id}
    }
  })
  return {
    paths: garmentPaths,
    fallback: false
  }
}

export const getStaticProps = (context: { params: { id: string } }) => {
  const id = context.params.id
  const item = garments.find(garment => garment.id === id)

  return {
    props: { garment: item }
  }
}

const GarmentPage = ({ garment }: {garment: GarmentType}) => {
  return (
    <div>
      <h1>GARMENT PAGE</h1>
      <h2>{ garment.id }</h2>
      {garments
        .filter(g => g.id !== garment.id)
        .map(g => (
        <Link href={`/${g.id}`} key={g.id}>
          Go to the other one
        </Link>
        ))}
        <Link href={`/`}>
          Go to the homepage
        </Link>
    </div>
  )
}

export default GarmentPage