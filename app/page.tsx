import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/products"

export default function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Featured Products Section */}
        <section className="bg-primary py-3 px-4">
          <h2 className="text-white text-2xl font-bold">Novedades</h2>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Garantía Oficial</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todos nuestros productos cuentan con garantía oficial del fabricante.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Mejores Precios</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ofrecemos los precios más competitivos del mercado.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Envío Rápido</h3>
              <p className="text-muted-foreground leading-relaxed">Recibe tu pedido en 24-48 horas en toda España.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
