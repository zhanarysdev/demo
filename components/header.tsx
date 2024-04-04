import Link from "next/link"

export const Header = () => {
    return <header className="shadow p-4">
        <div className="container mx-auto">
            <Link href={"/"}>Main</Link>
        </div>
    </header>
}