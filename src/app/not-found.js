"use client"

import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={62} className="text-color-accent" />
                <h3 className="text-color-accent text-5xl font-bold">
                    NOT FOUND
                </h3>
                <Link href="/" className="text-color-primary hover:text-color-accent transition-all underline text-xl">Back Home</Link>
            </div>
        </div>
    )
}

export default NotFound