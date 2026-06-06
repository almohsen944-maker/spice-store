# Data Model: Spice Store Frontend

## Entities

### Product
Represented as a JSON object in `src/mock/products.json`.
- `id`: string (UUID)
- `name`: { en: string, ar: string }
- `slug`: string (URL friendly)
- `description`: { en: string, ar: string }
- `price`: number
- `currency`: string (default: "AED")
- `images`: string[] (URLs)
- `categoryIds`: string[] (references to Category.id)
- `rating`: number (0-5)
- `reviewsCount`: number
- `isBestSeller`: boolean
- `isFeatured`: boolean
- `stock`: number
- `tags`: string[]
- `offers`: Offer[] (inline)

### Category
Represented as a JSON object in `src/mock/categories.json`.
- `id`: string (UUID)
- `name`: { en: string, ar: string }
- `slug`: string
- `image`: string
- `description`: { en: string, ar: string }

### CartItem
Internal state managed by `CartContext`.
- `productId`: string
- `quantity`: number
- `selectedOfferId`: string (optional)

### UserSession
Persistent state in LocalStorage.
- `recentlyViewedProductIds`: string[] (last 10)
- `appliedCouponCode`: string
- `language`: "en" | "ar"

## State Transitions

- **AddToCart**: `CartContext.items` adds or updates `CartItem`.
- **ChangeLanguage**: Update `UserSession.language` and toggle `dir` attribute on `<html>`.
- **ApplyCoupon**: Validate against `mock/coupons.json` and update `UserSession.appliedCouponCode`.
