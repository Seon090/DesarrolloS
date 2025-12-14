import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getProductById, products } from "@/lib/products"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-12 flex items-center justify-center">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                <p className="text-6xl font-bold text-primary mb-8">{product.price}€</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Descripción</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{product.description}</p>
              </div>

              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-semibold">Características destacadas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pantalla de alta resolución con tecnología avanzada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Procesador de última generación para máximo rendimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Batería de larga duración con carga rápida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cámara profesional con IA integrada</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 pt-6">
                <Button size="lg" className="flex-1 h-14 text-lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Añadir al carrito
                </Button>
                <Button size="lg" variant="outline" className="h-14 text-lg bg-transparent">
                  Comprar ahora
                </Button>
              </div>

              <div className="bg-muted p-6 rounded-lg space-y-2">
                <p className="font-semibold">Información de envío</p>
                <p className="text-sm text-muted-foreground">
                  Envío gratis en pedidos superiores a 50€. Entrega en 24-48 horas.
                </p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-8">También te puede interesar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                    <div className="group cursor-pointer">
                      <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center p-8 mb-4">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          width={300}
                          height={300}
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                      <p className="text-2xl font-bold text-primary">{relatedProduct.price}€</p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
