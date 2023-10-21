import List from "@/components/List"
import Header from "@/components/List/Header"

const Page = async ({ params }) => {
    const { keyword } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
    const searchAnime = await response.json()

    return (
        <>
            <section>
                <Header title={`Pencarian Anime ${keyword}`} />
                <List api={searchAnime} />
            </section>
        </>
    )
}

export default Page