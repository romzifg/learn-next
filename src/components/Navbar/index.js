import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link className="font-bold text-2xl text-white" href="/">ANIMELIST</Link>
                <input placeholder="Search" />
            </div>
        </header>
    )
}

export default Navbar