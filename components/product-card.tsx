import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground line-clamp-3 min-h-[4.5rem] leading-relaxed">
            {product.description}
          </h3>
          <p className="text-4xl font-bold text-primary">{product.price}€</p>
        </div>
      </Card>
    </Link>
  )
}
