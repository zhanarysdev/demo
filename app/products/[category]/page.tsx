import { TProduct } from "@/app/lib/definitions"
import { Product } from "@/components/product"
import { ProductList } from "@/components/product-list"

async function getProductsByCategories(categoryName: string): Promise<TProduct[]> {
    const res = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export default async function Category({ params }: { params: { category: string } }) {
    const products = await getProductsByCategories(params.category)
    return <div className="container mx-auto">
        <ProductList>
            {
                products.map((product) => <Product key={product.id} product={product} />)
            }
        </ProductList>
    </div>
}