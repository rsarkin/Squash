# Squash &amp; Pickleball Club — Premium Booking &amp; Membership Portal

Welcome to the **Squash &amp; Pickleball Club** digital portal — a state-of-the-art, high-end, responsive booking engine and club showcases platform. Crafted with meticulously polished aesthetic tokens and high-performance interactive states, this website is designed for elite athletic clubs looking to offer a premium, friction-free booking experience.

Designed as a **portfolio showcase**, the codebase is modularly structured to serve as a high-fidelity front-end design system that can be easily plugged into local database APIs and payment gateways.

---

## 🎨 Design System &amp; Premium Aesthetics

The interface is customized from the ground up to reflect a luxurious, high-contrast sports arena theme:
*   **Backdrop / Brand Color:** Forest Green (`#00492C`) — representing premium turf fields and courts.
*   **Highlight Accent:** Electric Yellow (`#FBBA16`) — providing high contrast for highlights, CTAs, and active tags.
*   **Typography:** Google Font **Poppins** — for bold, crisp, geometric text readability.
*   **Glassmorphism:** Custom frosted glass utility sheets (`.glass`, `.glass-dark`, `.glass-blue`) leveraging GPU-accelerated backdrop blur filters and fine translucent white borders.

---

## ⚡ Key Highlights &amp; Features

### 1. GPU-Optimized Loading Screen (Preloader)
An immersive entrance animation built using Framer-inspired specifications. It breaks the viewport into 5 vertical columns that collapse dynamically with custom timing intervals, revealing the primary logo card (`"ELITE PICKLEBALL CLUB"`) in a smooth brand-fade transition.
*   Uses performant hardware-accelerated CSS `scaleY` and `opacity` transition properties rather than browser layout recalculations.

### 2. Dual-Directional Infinite Loop Photo Marquee
Located inside the **Court Build Surface Specifications** section, this component renders 6 premium club photos in a seamless infinite marquee loop:
*   **Row 1:** Scrolls Right to Left (featuring Sports Cafe, Pro Shop, and Match Action).
*   **Row 2:** Scrolls Left to Right (featuring Surface Technology, Club Life group, and Tournaments in progress).
*   *Interaction:* Employs performant CSS translates and pauses scrolling animation on mouse hover for accessibility.

### 3. Skyscanner-Inspired Time Slot Stacking
Inside the booking engine (`/book`), traditional slot grids are replaced by horizontal flight-ticket styled card rows.
*   **Left Details:** Displays the session time range, duration, and a stylized court arena indicator badge (`Court A` / `Court B`).
*   **Center-Right Status Badge:** Features dynamic status badges (pulsing green indicator for **Available**, custom lock indicator for **Occupied/Sold Out**, and high-contrast styling for **Your Choice**).
*   **Interactive Cards:** The entire card wrapper operates as a unified clickable target, delegating handlers safely to prevent nested HTML button validation warnings.

### 4. Three-Phase Selection &amp; Checkout State Engine
The booking page manages a complex flow without page redirects, keeping state transactions quick and clean:
1.  **Phase 1: Choice Matrix** — Select active dates (including past unselectable states) and courts, filter by Day/Night sessions, and select slot times.
2.  **Phase 2: Review Booking** — Displays a Bento-style review box summary indicating court details, date, time window, equipment line-items (**FREE**), and payment totals. Checkbox triggers enable/disable order checkout.
3.  **Phase 3: success Checkmark** — Triggers a successful transaction ticket pass showing receipt parameters, a randomly generated Ticket Pass Code (`SQ-XXXXXX`), and an animated SVG checkmark drawing itself on mount.

---

## 🛠️ Technology Stack

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript (Strict Mode verification)
*   **Styling:** TailwindCSS &amp; Custom Glassmorphism CSS Modules
*   **Icons:** Lucide React

---

## 🚀 Future Roadmap &amp; Commercial Integration

This application is built to easily scale from a static frontend portfolio to a full-stack SaaS product. 

### 🔧 Recommended Backend Integrations:
1.  **Authentication:** Integrate **NextAuth.js** or **Clerk** to support login configurations for members.
2.  **Database &amp; Booking Queue:** 
    *   Map `TimeSlot` generation to database schema using **PostgreSQL** or **MongoDB** via **Prisma ORM**.
    *   Protect against duplicate slot reservations under heavy traffic by managing lock lists inside **Redis**.
3.  **Payment Gateway:** Incorporate checkout triggers via **Stripe API** or **Razorpay** within the Phase 2 booking state transaction pipeline.

---

## 📦 Getting Started

First, install dependencies:
```bash
npm install
```

Next, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

To build the static optimized production bundle:
```bash
npm run build
```
