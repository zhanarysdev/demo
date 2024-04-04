import { Product } from "@/components/product";
import { TProduct } from "./lib/definitions";
import { ProductList } from "@/components/product-list";

async function getProducts(): Promise<TProduct[]> {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function Home() {
  const products = await getProducts()
  return (
    <main className="container mx-auto">
      <ProductList>
        {
          products.map((product) => <Product key={product.id} product={product} />)
        }
      </ProductList>
    </main>
  );
}
