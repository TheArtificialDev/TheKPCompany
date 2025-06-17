<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# TheKPCompany Website

This is a Next.js website with a comic-style black and white design featuring subtle animations. The site has a responsive layout and is built with TypeScript and Tailwind CSS.

## Design Guidelines

- Use a black and white color scheme with comic-style borders (rounded corners)
- Add subtle animations to components for user interactions
- Ensure all components have the comic-style aesthetic
- Make sure all hero sections occupy the full screen height and width
- Use `comic-border` and `comic-shadow` utility classes for consistent styling

## Project Structure

- `src/app`: Next.js App Router pages
- `src/components`: Reusable React components
  - `layout`: Layout components (Navbar, Footer)
  - `ui`: UI components (Button, Card, Section, etc.)
- `src/lib`: Utility functions and hooks
- `src/types`: TypeScript type definitions

## Animation Guidelines

- Use Framer Motion for component animations
- Use GSAP for more complex animations
- Keep animations subtle and smooth
- Add hover effects to interactive elements

## Pages

The website consists of the following pages:
1. Landing page
2. Products page
3. Why TheKPCompany page
4. About Us page
5. Careers page
6. Blog page
7. Contact page

Each page follows a similar structure with a hero section at the top and content sections below.

## Styling

The project uses Tailwind CSS with custom utility classes defined in globals.css:
- `comic-border`: Adds a black border with rounded corners
- `comic-shadow`: Adds a black box shadow
- `hero-section`: Styles for full-height hero sections
- `page-section`: Base styles for content sections
- `btn`: Base button styles

## Animation Approach

- Most components use the following pattern:
  - `initial`: Initial state of the component (usually hidden)
  - `whileInView`: State when component enters viewport
  - `whileHover`: State when component is hovered
  - `whileTap`: State when component is clicked/tapped
  - `transition`: Animation timing and easing
  - `viewport`: Configuration for viewport detection
