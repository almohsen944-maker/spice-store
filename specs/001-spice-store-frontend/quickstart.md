# Quickstart Validation Guide: Spice Store Frontend

## Prerequisites
- Node.js 18+
- npm or yarn

## Setup
1. `npm install`
2. `npm run dev`

## Validation Scenarios

### 1. Luxury Brand & Theme Validation
- **Action**: Open the browser to `localhost:5173`.
- **Expected Outcome**:
  - Background is Cream (#FAF7F2).
  - Headings are Dark Brown (#4E342E) with Serif typography.
  - Primary buttons are Gold (#C9A227).
  - Animations (Hero entrance, Card hover) are smooth and elegant.

### 2. RTL Layout Toggle
- **Action**: Click the language switcher in the Navbar to "Arabic".
- **Expected Outcome**:
  - `dir="rtl"` is applied to the `<html>` tag.
  - Navbar logo moves to the right.
  - Product grid layout mirrors.
  - Fonts switch to an Arabic-appropriate typeface (e.g., Noto Sans Arabic).

### 3. High Conversion Funnel
- **Action**:
  1. Go to "Featured Products" on Home.
  2. Click on a Product Card.
  3. On Product Details, wait for "Sticky Add to Cart" to appear on scroll.
  4. Click "Add to Cart".
  5. Open "Cart Drawer".
  6. Click "Checkout".
- **Expected Outcome**:
  - All transitions are smooth (Framer Motion).
  - "Sticky Add to Cart" stays visible at the bottom of the viewport.
  - Cart Drawer shows correct items and total price.
  - Checkout UI renders the multi-step form mockup.

### 4. Accessibility Check
- **Action**: Use `Tab` key to navigate the site.
- **Expected Outcome**:
  - Focus rings are visible and aesthetically consistent.
  - Skip-to-content link appears on first tab.
  - Screen reader labels (aria-labels) are present on icon-only buttons (Cart, WhatsApp).
