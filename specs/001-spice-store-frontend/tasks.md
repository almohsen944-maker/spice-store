# Tasks: Spice Store Frontend

**Input**: Design documents from `/specs/001-spice-store-frontend/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup & Design System (Shared Infrastructure)

**Purpose**: Project initialization and enterprise-grade design system foundation

- [ ] T001 Initialize Vite + React + TypeScript project with strict compiler options
- [ ] T002 Install primary dependencies: tailwindcss, framer-motion, lucide-react, react-router-dom, react-helmet-async, clsx, tailwind-merge
- [ ] T003 [P] Configure Tailwind CSS with luxury Arabic palette (Dark Brown #4E342E, Gold #C9A227, Cream #FAF7F2) in `tailwind.config.js`
- [ ] T003a [P] Define Design Tokens for Shadows (Luxury soft), Radius (Premium rounded), and Spacing (8pt Grid) in `tailwind.config.js`
- [ ] T003b [P] Configure Tailwind color opacity variants and luxury accent shades for states (hover, active, focus)
- [ ] T004 [P] Setup scalable Atomic Design folder structure (src/components/ui/atoms, molecules, organisms, features, layout)
- [ ] T005 [P] Setup base typography (Luxury Serif headings, clean Sans body) in `src/assets/styles/globals.css`
- [ ] T005a [P] Implement Fluid Typography scale using CSS `clamp()` and modular scale in `src/assets/styles/typography.css`
- [ ] T005b [P] Configure font loading strategy (Self-hosting, display: swap) for core Arabic/Latin fonts
- [ ] T006 [P] Configure Lucide icons and base UI animation presets in `src/utils/animations.ts`
- [ ] T006a [P] Initialize Storybook for component-driven development and documentation in `.storybook/`
- [ ] T006b [P] Setup `clsx` and `tailwind-merge` utility for clean class management in `src/utils/cn.ts`
- [ ] T006c [P] Configure `vite-plugin-imagemin` for automatic high-quality asset optimization in `vite.config.ts`

---

## Phase 2: Foundational Framework (Blocking Prerequisites)

**Purpose**: Core infrastructure for Routing, RTL, State, Motion, and UX behavior

- [ ] T007 Implement `LocaleContext` for LTR/RTL and i18n switching logic in `src/context/LocaleContext.tsx`
- [ ] T008 [P] Create `useLocale` hook for consuming translation and direction state in `src/hooks/useLocale.ts`
- [ ] T009 Implement `CartContext` for high-performance shopping cart state in `src/context/CartContext.tsx`
- [ ] T010 [P] Create `useCart` hook with optimistic UI update logic in `src/hooks/useCart.ts`
- [ ] T010a [P] Implement `ThemeContext` for Dark Mode / Light Mode support and persistence in `src/context/ThemeContext.tsx`
- [ ] T011 Setup React Router with primary route definitions and scroll-to-top behavior in `src/App.tsx`
- [ ] T012 Create `MainLayout` component with RTL support and luxury spacing in `src/layouts/MainLayout.tsx`
- [ ] T012a [P] Create `MotionProvider` for global AnimatePresence and micro-interactions in `src/context/MotionContext.tsx`
- [ ] T012b [P] Integrate Lenis for high-end smooth scrolling performance in `src/hooks/useSmoothScroll.ts`
- [ ] T013 [P] Implement `AnnouncementBar` with luxury transition effects in `src/components/layout/AnnouncementBar.tsx`
- [ ] T014 [P] Implement `Navbar` with sticky behavior, language switcher, and cart badge in `src/components/layout/Navbar.tsx`
- [ ] T015 [P] Implement `Footer` with multi-column layout and social engagement in `src/components/layout/Footer.tsx`
- [ ] T016 Create comprehensive mock data files in `src/mock/products.json` and `src/mock/categories.json`
- [ ] T017 [P] Implement async mock service layer with simulated network latency in `src/services/mockApi.ts`
- [ ] T017a [P] Implement `ErrorBoundaries` with luxury "oops" states in `src/components/ui/ErrorBoundaries.tsx`
- [ ] T017b [P] Setup Zod validation schemas for all form-based interactions in `src/utils/validation.ts`

---

## Phase 2.5: UI Primitives (Atomic Design - Atoms)

**Purpose**: Build the reusable building blocks for visual consistency

- [ ] T017c [P] Implement `Button` atom with luxury variants (Gold, Dark Brown, Outline, Ghost) and loading states
- [ ] T017d [P] Implement `Badge` atom for product status, offers, and inventory counts in `src/components/ui/atoms/Badge.tsx`
- [ ] T017e [P] Implement `Input` and `Select` primitives with luxury focus rings and accessibility in `src/components/ui/atoms/Input.tsx`
- [ ] T017f [P] Implement `Modal` and `Drawer` primitives with accessible focus traps (Radix/Headless) in `src/components/ui/atoms/Overlays.tsx`
- [ ] T017g [P] Implement `Skeleton` atom for high-end perceived performance in `src/components/ui/atoms/Skeleton.tsx`
- [ ] T017h [P] Document all atoms in Storybook for visual audit

**Checkpoint**: Foundation & Primitives ready - Feature implementation can now scale with 100% visual consistency.

---

## Phase 3: User Story 1 - Discovering and Browsing (Priority: P1) 🎯 MVP

**Goal**: Implement the Home page and Category browsing with premium visual identity.

**Independent Test**: Navigate Home and Categories in LTR/RTL; verify "Arabic identity" visuals and animations.

### Implementation for User Story 1

- [ ] T018 [P] [US1] Create `Hero` banner with parallax effects and Framer Motion entrance in `src/components/features/Hero.tsx`
- [ ] T019 [P] [US1] Create `CategoryCard` with luxury hover transformations in `src/components/features/CategoryCard.tsx`
- [ ] T020 [P] [US1] Create `ProductCard` with advanced micro-interactions (zoom, quick-add) in `src/components/features/ProductCard.tsx`
- [ ] T020b [P] [US1] Implement `QuickViewModal` for fast product evaluation in `src/components/features/QuickViewModal.tsx`
- [ ] T021 [US1] Implement "Best Sellers" and "Featured" horizontal sliders (Swiper/Embla) in `src/components/features/ProductSliders.tsx`
- [ ] T022 [P] [US1] Implement "Why Choose Us" trust section with custom luxury icons in `src/components/features/WhyChooseUs.tsx`
- [ ] T023 [P] [US1] Implement "Instagram Gallery" grid with interactive lightbox in `src/components/features/InstagramGallery.tsx`
- [ ] T024 [P] [US1] Implement Home page shell with staggered entry animations in `src/pages/Home.tsx`
- [ ] T025 [P] [US1] Implement Categories listing page with luxury grid in `src/pages/Categories.tsx`
- [ ] T026 [P] [US1] Implement Products listing page with advanced filtering/sorting in `src/pages/Products.tsx`
- [ ] T026a [US1] Audit US1 pages for responsive refinements (mobile/tablet/desktop breakpoints)
- [ ] T026b [P] [US1] Implement `SearchOverlay` with staggered animations and recent search history

**Checkpoint**: User Story 1 complete. Home and discovery are functional with luxury aesthetics.

---

## Phase 4: User Story 2 - Product Evaluation (Priority: P1)

**Goal**: Implement detailed product views with advanced marketing features and micro-interactions.

**Independent Test**: Open Product Details; verify sticky button on scroll and countdown timer.

### Implementation for User Story 2

- [ ] T027 [P] [US2] Implement `CountdownTimer` molecule with luxury typography in `src/components/ui/molecules/CountdownTimer.tsx`
- [ ] T028 [P] [US2] Implement `StickyAddToCart` mobile/desktop bar with visibility on scroll thresholds
- [ ] T029 [P] [US2] Implement `BundleOffer` component with "Add Bundle" logic in `src/components/features/BundleOffer.tsx`
- [ ] T030 [US2] Create Product Details page with flexible layout and high-quality imagery in `src/pages/ProductDetails.tsx`
- [ ] T031 [US2] Implement `ProductGallery` with pinch-to-zoom (mobile) and luxury desktop lightbox
- [ ] T032 [US2] Integrate `RecentlyViewed` hook with LocalStorage persistence in `src/hooks/useRecentlyViewed.ts`
- [ ] T032a [P] [US2] Implement `ReviewsSection` with star ratings and luxury spacing in `src/components/features/ReviewsSection.tsx`
- [ ] T032c [P] [US2] Implement `SpecsTable` (Origin, Aroma, Intensity) in `src/components/features/SpecsTable.tsx`
- [ ] T032d [P] [US2] Document evaluation components in Storybook

**Checkpoint**: User Story 2 complete. High-conversion product experience is ready.

---

## Phase 5: User Story 3 - Cart & Checkout Experience (Priority: P1)

**Goal**: Implement the shopping cart drawer and a high-conversion Checkout UI with visual trust.

**Independent Test**: Add items to cart; open drawer; verify free shipping progress; navigate to Checkout.

### Implementation for User Story 3

- [ ] T033 [P] [US3] Implement accessible `CartDrawer` with optimistic state updates and luxury transitions
- [ ] T034 [P] [US3] Implement `FreeShippingBanner` with animated progress and luxury "Qualified" states
- [ ] T035 [P] [US3] Implement `CouponArea` with luxury "Applied" feedback in `src/components/features/CouponArea.tsx`
- [ ] T036 [US3] Create Shopping Cart page for deep mobile navigation in `src/pages/Cart.tsx`
- [ ] T037 [US3] Implement multi-step Checkout UI (form mockups) with luxury progress tracking in `src/pages/Checkout.tsx`
- [ ] T038 [P] [US3] Implement `TrustBadges` component with security and service icons in `src/components/ui/TrustBadges.tsx`
- [ ] T038a [US3] Implement smooth step-transitions for Checkout steps using `Framer Motion`

**Checkpoint**: User Story 3 complete. Full conversion funnel is ready.

---

## Phase 6: User Story 4 - Brand & Support (Priority: P2)

**Goal**: Implement secondary pages and support features with consistent luxury styling.

**Independent Test**: Visit About/Contact; verify WhatsApp button opens chat.

### Implementation for User Story 4

- [ ] T039 [P] [US4] Implement `FloatingWhatsAppButton` with subtle luxury pulse animation in `src/components/ui/atoms/WhatsAppButton.tsx`
- [ ] T040 [P] [US4] Implement `FAQAccordion` with luxury expand/collapse transitions in `src/components/features/FAQAccordion.tsx`
- [ ] T041 [P] [US4] Implement "About Us" brand story page with parallax storytelling elements in `src/pages/About.tsx`
- [ ] T042 [P] [US4] Implement "Contact Us" with luxury form and success feedback in `src/pages/Contact.tsx`
- [ ] T043 [P] [US4] Create `Newsletter` section with luxury "Thank You" micro-interaction in `src/components/features/Newsletter.tsx`

---

## Phase 7: Polish & Production Readiness

**Purpose**: Visual polish, loading states, accessibility audit, performance, and QA.

- [ ] T044 [P] Finalize `Skeleton` loaders for all primary sections and cards for high perceived performance
- [ ] T045 [P] Implement `EmptyState` and `ErrorState` components with brand illustrations in `src/components/ui/States.tsx`
- [ ] T046 [P] Add SEO metadata and social graph (OpenGraph/Twitter) to all routes using `react-helmet-async`
- [ ] T046a [P] Implement JSON-LD structured data (Product, Org, Breadcrumbs) in `src/components/seo/StructuredData.tsx`
- [ ] T047 Perform comprehensive A11y audit (Keyboard, Screen Reader, Focus management) and fix issues
- [ ] T047a [P] Implement `SkipToContent` component for enhanced accessibility navigation
- [ ] T048 Optimize all images (WebP/AVIF format) and implement luxury blurred placeholders
- [ ] T048a [P] Implement Code Splitting and dynamic imports for non-critical pages to reduce bundle size
- [ ] T049 Final visual audit: Spacing consistency, color contrast, and mobile touch target audit
- [ ] T049a [P] Complete Storybook documentation for all UI features and components
- [ ] T049b Perform QA validation: Lighthouse Audit (Goal: 100/100/100/100) and fix remaining issues
- [ ] T049c [P] Configure security headers and CSP in `public/_headers` for production readiness
- [ ] T049d [P] Perform bundle analysis and optimize vendor chunks for fast loading
- [ ] T050 Run `quickstart.md` validation scenarios for final sign-off

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)** → **Foundational (Phase 2)** → **UI Primitives (Phase 2.5)** → **User Stories (Phases 3-5 in parallel)** → **Polish (Phase 7)**

### User Story Dependencies
- **US1, US2, US3** are the core funnel. US1 should be completed first to provide the discovery context.
- **US4** can be done anytime after Phase 2 but has lower priority.

### Parallel Opportunities
- T003-T006c (Theme, Folders, Styles, Storybook, optimization)
- T013-T015 (Navbar, Footer, Announcement Bar)
- T018-T020b (Hero, CategoryCard, ProductCard, QuickView)
- T039-T043 (Secondary pages and support)
- T017c-T017g (UI Primitives can be built in parallel)

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Setup and Foundational.
2. Build UI Primitives (Atoms).
3. Build Home page, Categories, and Product Cards.
4. Validate "Luxury Arabic Identity" and RTL layout.

### Incremental Delivery
1. Foundation & Primitives -> Theme, Motion & Core UI ready.
2. US1 -> Discovery ready.
3. US2 -> Evaluation ready.
4. US3 -> Conversion ready.
5. US4 -> Support ready.
6. Polish -> Production ready with 100% QA and documentation.

---

## Notes
- Every component must support `dir="rtl"` context natively via CSS variables or Tailwind.
- Framer Motion animations should be defined in a reusable way in `src/utils/animations.ts`.
- Use Tailwind's `group` and `peer` for complex state interactions in cards.
- Ensure all images have descriptive `alt` text and components use semantic HTML tags.
- Use atomic design principles for folder organization.
