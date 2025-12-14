export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Xiaomi Redmi Note 14",
    description:
      'Móvil - Xiaomi Redmi Note 14, Negro medianoche, 256 GB, 8 GB RAM, 6.67" AMOLED FHD+, MediaTek Helio g99-Ultra, 5500 mAh, Android 14',
    price: 159,
    image: "/xiaomi-redmi-note-14-black-smartphone-modern-desig.jpg",
    category: "smartphones",
    featured: true,
  },
  {
    id: "2",
    name: "Apple iPhone 16e",
    description: 'Apple iPhone 16e, Negro, 128 GB, 5G, 6.1" OLED Super Retina XDR, Chip A18, iOS 18, 3561 mAh',
    price: 599,
    image: "/apple-iphone-16e-black-smartphone-elegant-design.jpg",
    category: "smartphones",
    featured: true,
  },
  {
    id: "3",
    name: "Google Pixel 10 Pro",
    description:
      'Móvil - Google Pixel 10 Pro, Obsidiana, 128 GB, 16 GB RAM, 6.3" Super Actua OLED, Google Tensor G5, 4870 mAh, Android 15',
    price: 899,
    image: "/google-pixel-10-pro-obsidian-black-smartphone-prem.jpg",
    category: "smartphones",
    featured: true,
  },
  {
    id: "4",
    name: "Samsung Galaxy S24",
    description:
      'Samsung Galaxy S24, Phantom Black, 256 GB, 8 GB RAM, 6.2" Dynamic AMOLED 2X, Exynos 2400, 4000 mAh, Android 14',
    price: 799,
    image: "/samsung-galaxy-s24-black-smartphone-sleek-design.jpg",
    category: "smartphones",
  },
  {
    id: "5",
    name: "OnePlus 12 Pro",
    description:
      'OnePlus 12 Pro, Volcanic Black, 512 GB, 16 GB RAM, 6.82" LTPO AMOLED, Snapdragon 8 Gen 3, 5400 mAh, Android 14',
    price: 949,
    image: "/oneplus-12-pro-black-smartphone-flagship.jpg",
    category: "smartphones",
  },
  {
    id: "6",
    name: "Xiaomi 14 Ultra",
    description:
      'Xiaomi 14 Ultra, Negro, 512 GB, 16 GB RAM, 6.73" AMOLED LTPO, Snapdragon 8 Gen 3, 5000 mAh, Android 14',
    price: 1099,
    image: "/xiaomi-14-ultra-black-premium-smartphone.jpg",
    category: "smartphones",
  },
]

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}
