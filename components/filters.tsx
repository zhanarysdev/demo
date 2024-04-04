import Link from "next/link"

async function getCategories(): Promise<string[]> {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export const Filters = async () => {
    const categories = await getCategories()
    return <div className="container mx-auto shadow p-4 my-4">
        <ul className="flex gap-4">
            {categories.map((category, index) => <Link key={`${category} - ${index}`} href={`/products/${category}`}>{category}</Link>)}
        </ul>
    </div>
}