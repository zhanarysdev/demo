import { TProduct } from "@/app/lib/definitions"
import Image from "next/image"
import Link from "next/link"

export const Product = ({ product }: { product: TProduct }) => {
    return <Link href={`/products/category/${product.id}`} className="w-[300px] flex flex-col items-center shadow">
        <Image src={product.image} alt={product.title} width={200} height={300} />
        <span>{product.title}</span>
        <span>{product.rating.rate}</span>
        <span>{product.price}</span>
    </Link>
}