# UI Component Contracts: Spice Store Frontend

## Core UI Components

### Button
**Props**:
- `variant`: "primary" | "secondary" | "outline" | "ghost"
- `size`: "sm" | "md" | "lg"
- `isLoading`: boolean
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode
- `children`: ReactNode

### ProductCard
**Props**:
- `product`: Product (Data Model)
- `layout`: "grid" | "list"
- `onAddToCart`: (productId: string) => void

### CountdownTimer
**Props**:
- `expiryDate`: Date
- `onExpiry`: () => void
- `size`: "sm" | "md" | "lg"

### AnnouncementBar
**Props**:
- `messages`: string[]
- `interval`: number (ms)

## Page Layouts

### MainLayout
**Props**:
- `children`: ReactNode
- `showAnnouncement`: boolean (default: true)

## Hooks Contracts

### useCart
**Return**:
- `items`: CartItem[]
- `addItem`: (productId: string, quantity: number) => void
- `removeItem`: (productId: string) => void
- `clearCart`: () => void
- `totalPrice`: number

### useLocale
**Return**:
- `language`: "en" | "ar"
- `dir`: "ltr" | "rtl"
- `setLanguage`: (lang: "en" | "ar") => void
- `t`: (key: string) => string (Translation helper)
