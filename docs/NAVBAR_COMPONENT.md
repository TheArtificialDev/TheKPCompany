# Navbar Component Documentation

The navbar component for TheKPCompany website follows a comic-style black and white design with subtle animations. It consists of two implementation options:

1. **Navbar.tsx** - Full-featured version using Framer Motion for animations
2. **NavbarSimple.tsx** - Fallback version using CSS animations

## Features

Both implementations include the following features:

- Responsive design with desktop and mobile views
- Comic-style borders and shadows
- Animated hamburger menu for mobile devices
- Scroll-aware styling (subtle shadow when scrolled)
- Interactive nav links with hover effects
- Mobile menu with animated entries

## Implementation Details

### Framer Motion Version (Navbar.tsx)

The primary implementation uses Framer Motion for advanced animations:

- **AnimatePresence** for handling exit animations
- Staggered animations for menu items
- Motion variants for coordinated animations
- Hover and tap animations for interactive elements

### CSS Version (NavbarSimple.tsx)

The fallback implementation uses standard CSS/Tailwind animations:

- CSS transitions for basic animations
- Tailwind's animate utilities for menu animations
- Inline styles for staggered animations
- Transform utilities for hover/tap effects

## Usage

Import and use the Navbar component in your layout:

```tsx
import Navbar from '@/components/layout/Navbar';
// Or for the simple version:
// import Navbar from '@/components/layout/NavbarSimple';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
```

## Styling Classes

The navbar utilizes these utility classes:

- `comic-border`: Black border with rounded corners
- `comic-shadow`: Black box shadow with hover effect
- `nav-link-zoom`: Zoom effect for navigation links
- Custom Tailwind animations like `animate-fadeIn`, `animate-slideDown`

## Mobile Menu Behavior

The mobile menu:
1. Appears when hamburger icon is clicked
2. Disappears when a link is clicked
3. Disappears when clicking outside the menu
4. Has staggered animation for items
5. Features hover and tap effects

## Accessibility

The navbar includes:
- Proper ARIA labels for the hamburger button
- Keyboard navigation support
- Focus management
- Semantic HTML structure
