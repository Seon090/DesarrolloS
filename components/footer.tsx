import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[rgb(15,23,42)] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SMARTWAVE</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Tu tienda de confianza para los últimos smartphones y productos electrónicos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-white/70 hover:text-white transition-colors">
                  Servicio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Email: info@smartwave.com</li>
              <li>Tel: +34 900 123 456</li>
              <li>Horario: Lun-Vie 9:00-18:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} SMARTWAVE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
