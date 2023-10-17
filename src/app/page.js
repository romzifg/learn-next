import List from "@/components/List"
import Link from "next/link"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">PUPOLAR</h1>
        <Link className="md:text-md text-sm underline hover:text-indigo-500 transition-all" href="/popular">Show More</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {
          anime.data.map(data => (
            <div key={data.mal_id} className="shadow-xl">
              <List title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home