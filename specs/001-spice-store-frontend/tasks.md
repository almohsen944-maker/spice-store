# Tasks: Spice Store Frontend

**Input**: Design documents from `/specs/001-spice-store-frontend/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Vite + React + TypeScript project at root
- [ ] T002 Install primary dependencies: tailwindcss, framer-motion, lucide-react, react-router-dom, react-helmet-async
- [ ] T003 [P] Configure Tailwind CSS with "Spice Store" color palette (Dark Brown #4E342E, Gold #C9A227, Cream #FAF7F2) in `tailwind.config.js`
- [ ] T004 [P] Setup project folder structure (src/components/ui, src/components/layout, src/hooks, src/context, src/pages, etc.)
- [ ] T005 [P] Setup base typography (Serif for headings, Sans for body) and global CSS variables in `src/assets/styles/globals.css`
- [ ] T006 [P] Configure Lucide icons and basic UI theme constants in `src/utils/constants.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure for Routing, RTL, and State that MUST be complete before user stories

- [ ] T007 Implement `LocaleContext` for LTR/RTL and language switching in `src/context/LocaleContext.tsx`
- [ ] T008 [P] Create `useLocale` hook for consuming translation and direction state in `src/hooks/useLocale.ts`
- [ ] T009 Implement `CartContext` for shopping cart state management in `src/context/CartContext.tsx`
- [ ] T010 [P] Create `useCart` hook for cart operations in `src/hooks/useCart.ts`
- [ ] T011 Setup React Router with primary route definitions in `src/App.tsx`
- [ ] T012 Create `MainLayout` component with RTL support in `src/layouts/MainLayout.tsx`
- [ ] T013 [P] Implement `AnnouncementBar` component (FR-003) in `src/components/layout/AnnouncementBar.tsx`
- [ ] T014 [P] Implement `Navbar` with language switcher and cart trigger in `src/components/layout/Navbar.tsx`
- [ ] T015 [P] Implement `Footer` with social links and navigation in `src/components/layout/Footer.tsx`
- [ ] T016 Create mock data files for products and categories in `src/mock/products.json` and `src/mock/categories.json`
- [ ] T017 [P] Implement mock service layer for data fetching in `src/services/mockApi.ts`

**Checkpoint**: Foundation ready - UI components and pages can now be built using shared context and styles.

---

## Phase 3: User Story 1 - Discovering and Browsing (Priority: P1) 🎯 MVP

**Goal**: Implement the Home page and Category browsing to showcase brand identity and discovery.

**Independent Test**: Navigate Home and Categories in LTR/RTL; verify "Arabic identity" visuals.

### Implementation for User Story 1

- [ ] T018 [P] [US1] Create `Hero` banner component with Framer Motion entrance animations in `src/components/features/Hero.tsx`
- [ ] T019 [P] [US1] Create `CategoryCard` component with luxury hover effects in `src/components/features/CategoryCard.tsx`
- [ ] T020 [P] [US1] Create `ProductCard` component (Contract-ready) in `src/components/features/ProductCard.tsx`
- [ ] T021 [US1] Implement "Best Sellers" and "Featured Products" horizontal scroll sections in `src/components/features/ProductSections.tsx`
- [ ] T022 [P] [US1] Implement "Why Choose Us" trust section in `src/components/features/WhyChooseUs.tsx`
- [ ] T023 [P] [US1] Implement "Instagram Gallery" grid in `src/components/features/InstagramGallery.tsx`
- [ ] T024 [P] [US1] Implement Home page shell in `src/pages/Home.tsx`
- [ ] T025 [P] [US1] Implement Categories listing page in `src/pages/Categories.tsx`
- [ ] T026 [P] [US1] Implement Products listing page (listing by category) in `src/pages/Products.tsx`

**Checkpoint**: User Story 1 complete. Home and product discovery are functional.

---

## Phase 4: User Story 2 - Product Evaluation (Priority: P1)

**Goal**: Implement detailed product views with marketing features (Sticky Add to Cart, Countdown).

**Independent Test**: Open Product Details; verify sticky button on scroll and countdown timer.

### Implementation for User Story 2

- [ ] T027 [P] [US2] Implement `CountdownTimer` component (Contract-ready) in `src/components/ui/CountdownTimer.tsx`
- [ ] T028 [P] [US2] Implement `StickyAddToCart` component with Framer Motion visibility in `src/components/features/StickyAddToCart.tsx`
- [ ] T029 [P] [US2] Implement `BundleOffer` component for cross-selling in `src/components/features/BundleOffer.tsx`
- [ ] T030 [US2] Create Product Details page layout in `src/pages/ProductDetails.tsx`
- [ ] T031 [US2] Implement Image Gallery with zoom/lightbox effect in `src/components/features/ProductGallery.tsx`
- [ ] T032 [US2] Integrate "Recently Viewed" logic in `src/hooks/useRecentlyViewed.ts`

**Checkpoint**: User Story 2 complete. Customers can now evaluate products with premium visual feedback.

---

## Phase 5: User Story 3 - Cart & Checkout Experience (Priority: P1)

**Goal**: Implement the shopping cart drawer and a high-conversion Checkout UI.

**Independent Test**: Add items to cart; open drawer; verify free shipping progress; navigate to Checkout.

### Implementation for User Story 3

- [ ] T033 [P] [US3] Implement `CartDrawer` with Radix UI / Headless UI for accessibility in `src/components/layout/CartDrawer.tsx`
- [ ] T034 [P] [US3] Implement `FreeShippingBanner` with progress bar in `src/components/features/FreeShippingBanner.tsx`
- [ ] T035 [P] [US3] Implement `CouponArea` with validation states in `src/components/features/CouponArea.tsx`
- [ ] T036 [US3] Create Shopping Cart page for mobile/fallback in `src/pages/Cart.tsx`
- [ ] T037 [US3] Implement multi-step Checkout UI (form mockups) in `src/pages/Checkout.tsx`
- [ ] T038 [P] [US3] Implement `TrustBadges` component in `src/components/ui/TrustBadges.tsx`

**Checkpoint**: User Story 3 complete. Full conversion funnel from discovery to checkout UI is ready.

---

## Phase 6: User Story 4 - Brand & Support (Priority: P2)

**Goal**: Implement secondary pages (About, Contact, FAQ) and the floating support button.

**Independent Test**: Visit About/Contact; verify WhatsApp button opens chat.

### Implementation for User Story 4

- [ ] T039 [P] [US4] Implement `FloatingWhatsAppButton` in `src/components/ui/WhatsAppButton.tsx`
- [ ] T040 [P] [US4] Implement `FAQAccordion` component in `src/components/features/FAQAccordion.tsx`
- [ ] T041 [P] [US4] Implement "About Us" brand story page in `src/pages/About.tsx`
- [ ] T042 [P] [US4] Implement "Contact Us" page with form mockup in `src/pages/Contact.tsx`
- [ ] T043 [P] [US4] Create `Newsletter` signup section in `src/components/features/Newsletter.tsx`

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Visual polish, loading states, accessibility audit, and performance.

- [ ] T044 [P] Implement `Skeleton` loaders for product cards and sections in `src/components/ui/Skeleton.tsx`
- [ ] T045 [P] Implement `EmptyState` and `ErrorState` components in `src/components/ui/States.tsx`
- [ ] T046 [P] Add SEO metadata to all pages using `react-helmet-async`
- [ ] T047 Perform accessibility audit (keyboard nav, screen readers) and fix ARIA issues
- [ ] T048 Optimize images and implement lazy loading for off-screen components
- [ ] T049 Final visual polish: Spacing consistency, animation easing, and mobile touch targets
- [ ] T050 Run `quickstart.md` validation scenarios

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)** → **Foundational (Phase 2)** → **User Stories (Phases 3-5 in parallel)** → **Polish (Phase 7)**

### User Story Dependencies
- **US1, US2, US3** are the core funnel. US1 should be completed first to provide the discovery context.
- **US4** can be done anytime after Phase 2 but has lower priority.

### Parallel Opportunities
- T003-T006 (Theme, Folders, Styles, Constants)
- T013-T015 (Navbar, Footer, Announcement Bar)
- T018-T020 (Hero, CategoryCard, ProductCard)
- T039-T043 (Secondary pages and support)

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Setup and Foundational.
2. Build Home page, Categories, and Product Cards.
3. Validate "Luxury Arabic Identity" and RTL layout.

### Incremental Delivery
1. Foundation -> Theme & Routing ready.
2. US1 -> Discovery ready.
3. US2 -> Evaluation ready.
4. US3 -> Conversion ready.
5. US4 -> Support ready.
6. Polish -> Production ready.

---

## Notes
- Every component must support `dir="rtl"` context.
- Framer Motion animations should be defined in a reusable way in `src/assets/styles/animations.ts`.
- Use Tailwind's `group` and `peer` for complex state interactions in product cards.
