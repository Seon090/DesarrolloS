import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-primary py-8 px-4">
          <div className="container mx-auto">
            <h1 className="text-white text-4xl font-bold mb-2">Todos los Productos</h1>
            <p className="text-white/80 text-lg">Descubre nuestra selección completa de smartphones</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
