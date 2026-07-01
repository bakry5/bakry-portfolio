# Ahmed Dev — Next.js Portfolio

A modern, animated developer portfolio built with **Next.js 14**, **Framer Motion**, **React Icons**, and **Tailwind CSS**.

## ✨ Features

- **Dark theme** — Deep space aesthetic with purple/teal accent system
- **Framer Motion** — Smooth page animations, stagger reveals, scroll-triggered effects
- **React Icons** — SI icons for tech stack, FI icons for UI
- **Fully Responsive** — Mobile-first, works on all screens
- **Sections:** Hero · About · Skills · Projects · Experience · Contact · Footer
- **Interactive:** Project filter by category, animated skill bars, contact form
- **Performance:** Next.js App Router, Google Fonts via `next/font`, optimized

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout with fonts + metadata
│   ├── page.tsx          # Main page assembling all sections
│   └── globals.css       # Global styles, custom utilities, animations
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Hero with orbs, badge, CTAs, socials
│   ├── About.tsx         # Stats grid + personal intro
│   ├── Skills.tsx        # Animated progress bars + tech icons
│   ├── Projects.tsx      # Filterable project cards
│   ├── Experience.tsx    # Timeline with role cards
│   ├── Contact.tsx       # Form + info cards + socials
│   └── Footer.tsx        # Simple footer
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🎨 Customization

### Personal Info
Update in each component:
- **Name** → `Navbar.tsx`, `Footer.tsx`, `layout.tsx`
- **Bio** → `About.tsx`
- **Projects** → `Projects.tsx` (projects array)
- **Experience** → `Experience.tsx` (experiences array)
- **Skills** → `Skills.tsx` (skillGroups array)
- **Contact** → `Contact.tsx` (email, location, socials)

### Colors
In `tailwind.config.js`:
```js
accent: '#6c47ff',    // Primary purple
'accent-2': '#00d4aa', // Teal
'accent-3': '#ff6b6b', // Coral/red
```

## 📦 Dependencies

```json
{
  "next": "14.2.0",
  "framer-motion": "^11.0.0",
  "react-icons": "^5.0.0",
  "tailwindcss": "^3.4.0"
}
```

## 🌐 Deploy

```bash
# Deploy to Vercel (recommended)
npx vercel

# Or build for production
npm run build
npm start
```
