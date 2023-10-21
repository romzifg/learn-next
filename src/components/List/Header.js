import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-3xl font-bold text-color-primary">{title}</h1>
            {
                linkHref && linkTitle ?
                    <Link
                        className="md:text-xl text-sm underline hover:text-color-accent text-color-primary transition-all"
                        href={linkHref}>
                        {linkTitle}
                    </Link> : null
            }
        </div>
    )
}

export default Header