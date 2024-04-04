import { TProduct } from "@/app/lib/definitions"
import { Product } from "@/components/product"

async function getProduct(id: string): Promise<TProduct> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id)
    return <div className="container mx-auto">
        <Product product={product} />
    </div>
}