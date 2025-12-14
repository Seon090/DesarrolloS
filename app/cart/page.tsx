"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Xiaomi Redmi Note 14",
      price: 159,
      quantity: 1,
      image: "/xiaomi-redmi-note-14-black-smartphone.jpg",
    },
  ])

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 4.99
  const total = subtotal + shipping

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-primary py-8 px-4">
          <div className="container mx-auto">
            <h1 className="text-white text-4xl font-bold">Carrito de Compras</h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {cartItems.length === 0 ? (
            <Card className="p-12 text-center space-y-6">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
                <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Tu carrito está vacío</h2>
              <p className="text-muted-foreground">Añade productos para empezar tu compra</p>
              <Button asChild size="lg">
                <Link href="/products">Ver productos</Link>
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="p-6">
                    <div className="flex gap-6">
                      <div className="w-32 h-32 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                          <p className="text-2xl font-bold text-primary mt-2">{item.price}€</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                            <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, 1)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 space-y-6 sticky top-24">
                  <h2 className="text-2xl font-bold">Resumen del pedido</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between text-lg">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">{subtotal.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="text-muted-foreground">Envío</span>
                      <span className="font-semibold">{shipping === 0 ? "Gratis" : `${shipping.toFixed(2)}€`}</span>
                    </div>
                    {subtotal < 50 && (
                      <p className="text-sm text-muted-foreground">
                        Añade {(50 - subtotal).toFixed(2)}€ más para envío gratis
                      </p>
                    )}
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-primary">{total.toFixed(2)}€</span>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" className="w-full h-14 text-lg">
                    Proceder al pago
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full h-14 text-lg bg-transparent">
                    <Link href="/products">Seguir comprando</Link>
                  </Button>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
