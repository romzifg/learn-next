import List from "@/components/List"
import Header from "@/components/List/Header"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Show More" linkHref="/populer" />
        <List api={topAnime} />
      </section>
    </>
  )
}

export default Home