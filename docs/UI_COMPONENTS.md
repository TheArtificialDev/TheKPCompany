# UI Components Documentation

This document provides detailed information about the UI components used in TheKPCompany website.

## Component Architecture

The website uses a component-based architecture with reusable UI components organized in two main categories:

1. **Layout Components**: Components that form the page structure
   - Navbar
   - Footer

2. **UI Components**: Reusable UI elements
   - Button
   - Card
   - Section
   - HeroSection
   - StarRating
   - Testimonial
   - SignupForm

## Design System

### Comic-Style Aesthetic

All components follow a comic-style design with these key characteristics:
- Black borders with rounded corners
- Clean, high-contrast design
- Subtle shadows
- Interactive hover/focus states

### Custom Utility Classes

The design system relies on several custom utility classes defined in `globals.css`:

```css
/* Comic-style border */
.comic-border {
  @apply border-2 border-black rounded-lg;
}

/* Comic-style shadow */
.comic-shadow {
  @apply shadow-[4px_4px_0px_0px_rgba(0,0,0,1)];
}

/* Hero section styles */
.hero-section {
  @apply min-h-screen flex flex-col justify-center;
}

/* Page section styles */
.page-section {
  @apply py-16 px-4;
}

/* Button base styles */
.btn {
  @apply py-3 px-6 comic-border comic-shadow transition-all hover:-translate-y-1;
}
```

## Component Details

### Layout Components

#### Navbar

**Purpose**: Main navigation component displayed at the top of every page.

**Key Features**:
- Responsive design with mobile hamburger menu
- Comic-style logo
- Navigation links with hover effects
- Smooth transitions

**Implementation Details**:
- Uses React state for mobile menu toggle
- Zoom effect on hover for navigation links
- Comic border styling

#### Footer

**Purpose**: Footer displayed at the bottom of every page.

**Key Features**:
- Site navigation links
- Social media links
- Copyright information
- Comic-style design

**Implementation Details**:
- Monotone icon set from react-icons
- Responsive grid layout
- Consistent comic styling

### UI Components

#### Button

**Purpose**: Reusable button component with consistent styling.

**Props**:
- `variant`: "primary" (default) or "secondary"
- `size`: "sm", "md" (default), or "lg"
- `href`: Optional URL for link buttons
- `type`: Button type (button, submit, reset)
- `onClick`: Click handler function
- `disabled`: Boolean to disable the button
- `className`: Additional CSS classes
- `children`: Button content

**Variants**:
- **Primary**: Solid black background with white text
- **Secondary**: White background with black text and border

**Implementation Details**:
- Renders either a button or link (Next.js Link) based on props
- Comic-style border and shadow
- Hover animation (slight rise effect)
- Focus and disabled states

#### Card

**Purpose**: Container component for displaying content in a comic-style card.

**Props**:
- `title`: Card title (string or ReactNode)
- `className`: Additional CSS classes
- `children`: Card content

**Implementation Details**:
- Comic-style border and optional shadow
- Consistent padding and spacing
- Flexible content area

#### Section

**Purpose**: Wrapper component for page sections with consistent styling.

**Props**:
- `title`: Optional section title
- `subtitle`: Optional section subtitle
- `className`: Additional CSS classes
- `children`: Section content

**Implementation Details**:
- Consistent spacing and padding
- Centered title and subtitle with typography styling
- Container width control

#### HeroSection

**Purpose**: Full-screen hero section for page introductions.

**Props**:
- `title`: Hero title
- `subtitle`: Hero subtitle
- `primaryCTA`: Primary call-to-action button config
- `secondaryCTA`: Optional secondary call-to-action button config
- `backgroundImage`: Optional background image URL
- `className`: Additional CSS classes

**Implementation Details**:
- Full-screen height
- Centered content
- Responsive design for all screen sizes
- Comic-style buttons

#### StarRating

**Purpose**: Display a star rating.

**Props**:
- `rating`: Number from 1-5
- `className`: Additional CSS classes

**Implementation Details**:
- Uses monotone star icons
- Fills the appropriate number of stars based on rating
- Accessible with proper aria attributes

#### Testimonial

**Purpose**: Display a user testimonial.

**Props**:
- `author`: Testimonial author name
- `role`: Author's role or title
- `text`: Testimonial text content
- `rating`: Optional star rating (1-5)
- `className`: Additional CSS classes

**Implementation Details**:
- Comic-style card design
- Author avatar placeholder
- StarRating component integration
- Hover animation effect

#### SignupForm

**Purpose**: Email signup form for newsletter subscriptions.

**Props**:
- `className`: Additional CSS classes

**State**:
- `email`: Current input value
- `isSubmitting`: Loading state during submission
- `message`: Success/error message object

**Implementation Details**:
- Form validation for email format
- Loading state during submission
- Success/error feedback messages
- Comic-style input and button
- API integration with error handling

## Animation System

### Hover Effects

Most interactive components have hover effects:
- Buttons: Slight rise effect and shadow adjustment
- Cards: Scale effect
- Navigation links: Zoom effect

### Testimonial Carousel

The testimonials use a continuous scrolling animation:

```css
/* Animation for the testimonial track */
.testimonial-container {
  overflow: hidden;
  position: relative;
}

.testimonial-track {
  display: flex;
  animation: scroll 60s linear infinite;
}

.testimonial-track:hover {
  animation-play-state: paused;
}

.testimonial-track-reverse {
  display: flex;
  animation: scroll-reverse 60s linear infinite;
}

.testimonial-track-reverse:hover {
  animation-play-state: paused;
}

.testimonial-group {
  display: flex;
  gap: 1.5rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes scroll-reverse {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
```

## Responsive Design

All components are built with a mobile-first approach using Tailwind's responsive utilities:

- **Small screens**: Single column layouts, stacked elements
- **Medium screens**: Two column grids, horizontal forms
- **Large screens**: Multi-column layouts, more spacious design

## Accessibility Considerations

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Keyboard navigation**: Focusable interactive elements
- **ARIA attributes**: Used where appropriate for complex components
- **Color contrast**: High contrast for readability
- **Form labels**: Proper labeling of form inputs

## Component Best Practices

1. **Composition over inheritance**: Components are designed to be composed together
2. **Props with defaults**: Most props have sensible defaults
3. **TypeScript types**: All components are fully typed
4. **Consistent styling**: All components follow the same design system
5. **Responsive by default**: All components work on all screen sizes

## Future Component Enhancements

1. **Animation improvements**: Add more subtle animations for page transitions
2. **Dark mode support**: Add dark mode variants of components
3. **Additional variants**: More button and card variants
4. **Enhanced accessibility**: Improve keyboard navigation and screen reader support
5. **Component testing**: Add unit tests for all components
