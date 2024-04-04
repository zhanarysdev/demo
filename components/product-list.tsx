import { ReactNode } from "react"

export const ProductList = ({ children }: { children: ReactNode }) => {
    return <div className="grid grid-cols-4 gap-4">
        {children}
    </div>
}