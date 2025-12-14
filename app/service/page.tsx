import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[rgb(15,23,42)] to-[rgb(30,41,59)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 text-balance">Servicio al Cliente</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed text-pretty">
              Estamos aquí para ayudarte. Nuestro equipo de expertos está disponible para resolver todas tus dudas.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center space-y-4 border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Soporte Técnico</h3>
              <p className="text-muted-foreground leading-relaxed">
                Asistencia técnica especializada para resolver cualquier problema con tu dispositivo.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Garantía Extendida</h3>
              <p className="text-muted-foreground leading-relaxed">
                Amplía la garantía de tu producto y protege tu inversión por más tiempo.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Devoluciones</h3>
              <p className="text-muted-foreground leading-relaxed">
                30 días para devoluciones sin preguntas. Tu satisfacción es nuestra prioridad.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Configuración</h3>
              <p className="text-muted-foreground leading-relaxed">
                Te ayudamos a configurar tu nuevo dispositivo y transferir todos tus datos.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Asesoramiento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nuestros expertos te ayudan a elegir el producto perfecto para tus necesidades.
              </p>
            </Card>

            <Card className="p-8 text-center space-y-4 border-2 hover:border-primary transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Atención 24/7</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estamos disponibles las 24 horas del día, los 7 días de la semana para atenderte.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre completo
                </label>
                <Input id="name" placeholder="Tu nombre" className="h-12" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="tu@email.com" className="h-12" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Asunto
                </label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?" className="h-12" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." className="min-h-[150px]" />
              </div>
              <Button type="submit" size="lg" className="w-full h-12 text-base">
                Enviar mensaje
              </Button>
            </form>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  )
}
