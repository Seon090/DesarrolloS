"use client"

import Link from "next/link"
import { Search, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  const [cartCount, setCartCount] = useState(1)

  return (
    <header className="bg-[rgb(15,23,42)] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity">
            SMARTWAVE
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="search"
                placeholder="Buscar productos aquí"
                className="w-full bg-transparent border-2 border-white/20 text-white placeholder:text-white/60 pr-12 h-12 rounded-none focus-visible:ring-white focus-visible:ring-offset-0"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-12 w-12 text-white hover:bg-white/10"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link href="/" className="text-base font-medium hover:text-primary transition-colors underline">
              Home
            </Link>
            <Link href="/products" className="text-base font-medium hover:text-primary transition-colors">
              Product
            </Link>
            <Link href="/service" className="text-base font-medium hover:text-primary transition-colors">
              Service
            </Link>
            <Link href="/cart" className="relative hover:opacity-80 transition-opacity">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[rgb(132,204,22)] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
