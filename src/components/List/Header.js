import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <Link
                className="md:text-xl text-sm underline hover:text-indigo-500 transition-all"
                href={linkHref}>
                {linkTitle}
            </Link>
        </div>
    )
}

export default Header