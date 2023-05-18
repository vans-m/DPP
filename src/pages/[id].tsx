import { garments } from "@/app/mocks/garments"
import Link from "next/link"
import { useRouter } from "next/router"

const GarmentPage = () => {
  const router = useRouter()
  const id = router.query.id as string
  const garment = id && garments[id]
  if (!garment) {
    return null
  }
  console.log("helo", router.query.id)
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