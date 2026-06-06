# Research: Spice Store Frontend

## Decision: RTL Implementation Strategy
- **Decision**: Use Tailwind's built-in `rtl` and `ltr` variants along with a custom `dir` attribute on the `<html>` or `<body>` tag.
- **Rationale**: Tailwind's `rtl:` variant provides a declarative way to handle directional styles. For Framer Motion, animations like `x: 100` need to be dynamically adjusted based on the current direction (e.g., `x: isRTL ? -100 : 100`).
- **Alternatives considered**: Logical properties (`ms`, `me` instead of `ml`, `mr`). These are powerful but can be less intuitive for complex custom animations in Framer Motion.

## Decision: Luxury Brand Identity Styling
- **Decision**: Implement a strict "Golden Ratio" or "8pt Grid" based spacing system. Use high-contrast serif typography for headings (e.g., Playfair Display) and clean sans-serif for body (e.g., Montserrat/Inter).
- **Rationale**: Premium brands often use generous whitespace and elegant serif fonts to convey value and history.
- **Alternatives considered**: Standard "modern" flat design. Rejected as it fails the "luxury" and "Arabic identity" requirements.

## Decision: SEO Strategy for Vite SPA
- **Decision**: Use `react-helmet-async` for client-side metadata management. For production, use `vite-plugin-ssr` or `vite-ssg` to pre-render static pages.
- **Rationale**: Pure SPAs are harder for some search engines to index. Pre-rendering the Home and Product pages ensures high visibility and faster initial load.
- **Alternatives considered**: Full Next.js migration. Rejected because the project is specified as React + Vite.

## Decision: Accessibility (WCAG) Implementation
- **Decision**: Use Radix UI primitives or Headless UI for complex components like Drawers, Modals, and Accordions.
- **Rationale**: These libraries handle the complex ARIA attributes and focus management required for WCAG compliance out of the box.
- **Alternatives considered**: Manual ARIA implementation. Rejected as it is error-prone and increases maintenance cost.

## Decision: Mock Data & Service Strategy
- **Decision**: Use a centralized `services/` layer that returns Promises with simulated latency. Store data in static JSON files.
- **Rationale**: Simulates real API behavior (loading states, error handling) while remaining a frontend-only project.
- **Alternatives considered**: Direct imports of JSON in components. Rejected as it makes transitioning to a real API harder.
