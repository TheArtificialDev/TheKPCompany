<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Copilot Instructions - The KP Company Website

## Project Overview
You are building a high-performance, SEO-optimized website for The KP Company, a SaaS company specializing in AI-powered creative tools and everyday utilities. The website must be lightning-fast, SEO-friendly, and built with stable, proven technologies.

## Core Brand Identity
- **Brand Promise**: "Frictionless creativity powered by AI"
- **Brand Mantra**: "Liberate. Create. Thrive."
- **Target Audience**: Gen Z and early-career creatives (college students, young professionals)
- **Personality**: Rebel-Innovator with bold, witty, articulate, and encouraging tone

## Technical Requirements

### Technology Stack (MANDATORY)
**Frontend Framework**: 
- Use **vanilla HTML5, CSS3, and JavaScript** OR **Next.js 13+ with App Router**
- NO React single-page applications without SSR
- NO client-side rendering frameworks (Vue, Angular, etc.)
- NO experimental or bleeding-edge technologies

**Why**: Maximum performance, SEO compatibility, and long-term stability

**CSS Framework**: 
- **Tailwind CSS** (latest stable version) OR **vanilla CSS with CSS Grid/Flexbox**
- NO CSS-in-JS solutions
- NO runtime CSS libraries

**Build Tools**:
- **Vite** (for vanilla) OR **Next.js built-in bundler**
- **PostCSS** for CSS processing
- **Terser** for JavaScript minification

**Performance Requirements**:
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Time to Interactive**: < 3.5 seconds

### SEO Requirements (CRITICAL)

**Meta Tags (Every Page)**:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Page-specific title with keywords]</title>
<meta name="description" content="[155-160 character description with keywords]">
<meta name="keywords" content="[relevant keywords separated by commas]">
<meta name="robots" content="index, follow">
<meta name="author" content="The KP Company">
<link rel="canonical" href="[canonical URL]">

<!-- Open Graph -->
<meta property="og:title" content="[Page title]">
<meta property="og:description" content="[Page description]">
<meta property="og:image" content="[Image URL]">
<meta property="og:url" content="[Page URL]">
<meta property="og:type" content="website">
<meta property="og:site_name" content="The KP Company">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page title]">
<meta name="twitter:description" content="[Page description]">
<meta name="twitter:image" content="[Image URL]">
```

**Structured Data (Required)**:
- Organization schema for company pages
- Article schema for blog posts
- Product schema for tool pages
- BreadcrumbList schema for navigation
- FAQ schema where applicable

**URL Structure**:
- Main domain: `thekp.in`
- Tool subdomains: `bookify.thekp.in`, `fictional.thekp.in`, etc.
- Clean URLs with hyphens: `/ai-tools/`, `/blog/productivity-tips/`
- NO trailing slashes for pages, YES for directories

**Image Optimization**:
- WebP format with JPEG/PNG fallbacks
- Responsive images with `srcset` and `sizes`
- Lazy loading for below-fold images
- Alt text for every image (descriptive, not keyword-stuffed)
- Proper image dimensions to prevent layout shift

**Critical Performance Optimizations**:
- Inline critical CSS (above-the-fold styles)
- Defer non-critical JavaScript
- Preload essential resources
- Minimize HTTP requests
- Use CDN for static assets
- Implement service worker for caching

## Design System

### Color Palette
```css
:root {
  /* Primary Colors */
  --color-deep-space: #0A0A0B;
  --color-electric-lime: #00FF88;
  --color-neon-green: #39FF14;
  
  /* Secondary Colors */
  --color-charcoal: #1C1C1E;
  --color-smoke: #2C2C2E;
  --color-white: #FFFFFF;
  --color-light-gray: #8E8E93;
  
  /* Accent Colors */
  --color-electric-blue: #007AFF;
  --color-amber: #FF9500;
  --color-crimson: #FF3B30;
}
```

### Typography
**Font Stack**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
**Mono Font**: `'JetBrains Mono', 'Fira Code', Consolas, monospace`

**Scale**:
- H1: 4.5rem (72px), weight: 700, line-height: 1.1
- H2: 3rem (48px), weight: 600, line-height: 1.16
- H3: 2rem (32px), weight: 500, line-height: 1.25
- H4: 1.5rem (24px), weight: 500, line-height: 1.33
- Body Large: 1.125rem (18px), weight: 400, line-height: 1.55
- Body: 1rem (16px), weight: 400, line-height: 1.5
- Small: 0.875rem (14px), weight: 400, line-height: 1.43
- Caption: 0.75rem (12px), weight: 500, line-height: 1.33

## Site Structure & Pages

### Navigation Structure
```
thekp.in/
├── index.html (Landing Page)
├── about/ (Company Profile)
├── ai-tools/ (AI Tools Category)
├── everyday-tools/ (Everyday Tools Category)
├── blog/ (Blog Hub)
├── contact/ (Contact Page)
├── privacy-policy/
├── terms-of-service/
└── sitemap.xml
```

### Subdomain Structure
- `bookify.thekp.in` - AI book writing tool
- `fictional.thekp.in` - AI fiction writing tool
- `studentassist.thekp.in` - AI study assistant
- `calciverice.thekp.in` - Scientific calculator
- `metamorph.thekp.in` - File converter
- `pdfalchemcy.thekp.in` - PDF editor
- `originality.thekp.in` - Plagiarism checker
- `qrartisan.thekp.in` - QR code generator
- `chromacapture.thekp.in` - Color extractor
- `scribecanvas.thekp.in` - Rich text editor

## Page-Specific Instructions

### Landing Page (index.html)

**SEO Title**: "The KP Company - AI-Powered Creative Tools | Frictionless Creativity"
**Meta Description**: "Liberate your creativity with AI-powered tools for writing, research, and productivity. Try Bookify, Fictional, Student Assist, and more everyday utilities for free."

**Key Sections**:
1. **Hero Section**
   - H1: "Frictionless Creativity Powered by AI"
   - Subheading: Transform ideas into reality with our suite of AI-powered tools and everyday utilities
   - Two CTAs: "Explore AI Tools" (primary), "Try Everyday Tools" (secondary)
   - Animated background with floating geometric shapes

2. **Value Proposition** (3 cards)
   - Freedom through Automation
   - Bold Resilience  
   - Thoughtful Innovation

3. **AI Tools Showcase** (3 featured tools)
   - Bookify, Fictional, Student Assist
   - Each with description, benefits, and CTA to subdomain

4. **Everyday Tools Grid** (7 tools)
   - CalciVerse, MetaMorph, PDF Alchemy, Originality, QR Artisan, ChromaCapture, ScribeCanvas

5. **Social Proof**
   - Stats with animated counters
   - "10,000+ Active Users", "50,000+ Projects Created"

6. **Final CTA Section**
   - "Ready to Liberate Your Creativity?"

### About Page (/about/)

**SEO Title**: "About The KP Company - Liberating Creativity Through AI Innovation"
**Meta Description**: "Learn about The KP Company's mission to eliminate friction from creative workflows through thoughtful AI tools and everyday utilities."

**Key Sections**:
1. **Company Story**
2. **Mission & Vision**
3. **Core Values** (4 values with icons)
4. **Our Approach** (Micro-SaaS philosophy)
5. **Contact Information**

### Blog Structure (/blog/)

**SEO Title**: "Creative AI Blog - Tips, Tutorials & Industry Insights | The KP Company"
**Meta Description**: "Discover AI creativity tips, productivity hacks, and tool tutorials. Learn how to optimize your creative workflow with expert insights."

**Categories**:
1. **AI & Creativity** (`/blog/ai-creativity/`)
2. **Productivity & Workflow** (`/blog/productivity/`)
3. **Tool Tutorials** (`/blog/tutorials/`)
4. **Industry Insights** (`/blog/industry/`)
5. **Creative Process** (`/blog/creative-process/`)

**Blog Post Template Requirements**:
- Article schema markup
- Author bio section
- Related posts
- Social sharing buttons
- Newsletter signup
- Estimated reading time
- Table of contents for long posts

## Content Guidelines

### Copywriting Rules
1. **Tone**: Bold, witty, articulate, encouraging
2. **Voice**: Rebel-Innovator archetype
3. **Avoid**: Jargon, technical complexity, corporate speak
4. **Include**: Action verbs, benefits over features, emotional triggers

### SEO Content Rules
1. **Keywords**: Primary keyword in title, H1, and first paragraph
2. **Headers**: Use H2-H6 hierarchy with keywords
3. **Content Length**: 
   - Landing pages: 1,500-2,000 words
   - Blog posts: 1,500-3,000 words
   - Tool pages: 800-1,200 words
4. **Internal Linking**: Link to related tools and content
5. **External Links**: Link to authoritative sources (open in new tab)

### Image Requirements
1. **Format**: WebP with JPEG fallback
2. **Naming**: descriptive-file-names-with-keywords.webp
3. **Alt Text**: Descriptive, not keyword-stuffed
4. **Dimensions**: Exact sizes to prevent layout shift
5. **Optimization**: Compress without quality loss

## Technical Implementation

### HTML Requirements
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- SEO meta tags here -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Content -->
    <script src="script.js" defer></script>
</body>
</html>
```

### CSS Requirements
```css
/* Use CSS custom properties for theming */
:root {
  /* Color variables */
  /* Typography variables */
  /* Spacing variables */
}

/* Mobile-first responsive design */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large desktop */ }

/* Performance optimizations */
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### JavaScript Requirements
```javascript
// Use vanilla JavaScript or minimal libraries
// Implement lazy loading
// Add smooth scrolling
// Implement form validation
// Add analytics tracking
// Implement service worker for caching

// Performance: Use requestAnimationFrame for animations
// Accessibility: Ensure keyboard navigation
// SEO: Update meta tags for SPA routing (if used)
```

### File Structure
```
project/
├── index.html
├── about/
│   └── index.html
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── critical.css
│   ├── js/
│   │   ├── main.js
│   │   └── analytics.js
│   ├── images/
│   │   ├── hero-bg.webp
│   │   ├── tool-icons/
│   │   └── blog-images/
│   └── fonts/
├── blog/
│   ├── index.html
│   ├── ai-creativity/
│   ├── productivity/
│   └── tutorials/
├── sitemap.xml
├── robots.txt
└── manifest.json
```

## Performance Checklist

### Before Launch
- [ ] Run Lighthouse audit (all scores 90+)
- [ ] Test on slow 3G connection
- [ ] Validate HTML/CSS
- [ ] Check mobile responsiveness
- [ ] Test keyboard navigation
- [ ] Verify screen reader compatibility
- [ ] Check color contrast ratios
- [ ] Test form submissions
- [ ] Verify all links work
- [ ] Check 404 error handling

### SEO Checklist
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics 4
- [ ] Configure Google Tag Manager
- [ ] Create robots.txt
- [ ] Set up schema markup
- [ ] Verify Open Graph tags
- [ ] Check meta descriptions (150-160 chars)
- [ ] Ensure clean URL structure
- [ ] Test page loading speed
- [ ] Verify mobile-first indexing compatibility

## Content Strategy

### Primary Keywords to Target
- "AI creativity tools"
- "Creative productivity software"
- "AI-powered writing tools"
- "Everyday utility tools"
- "Creative workflow optimization"
- "AI writing assistant"
- "Free PDF tools"
- "Creative process automation"

### Content Calendar (First Month)
**Week 1**:
- "The Rise of AI-Assisted Creativity: Enhancement vs. Replacement"
- "Bookify Tutorial: Research Organization That Actually Works"

**Week 2**:
- "The Creator's Workflow: From Chaos to Clarity"
- "Fictional World-Building: Creating Consistent Universes"

**Week 3**:
- "Digital Minimalism for Creators: Less Tools, More Results"
- "Student Assist Study Strategies: Beyond Basic Q&A"

**Week 4**:
- "The Micro-SaaS Revolution: Why Smaller Tools Win"
- "PDF Alchemy Power Tips: Advanced Document Manipulation"

### Blog Post Template
```markdown
# [Title with Primary Keyword]

[Meta description content in first paragraph]

## Introduction
[Hook + problem statement]

## Main Content
[H2 sections with keywords]
[Use H3 for subsections]
[Include relevant images]
[Add internal links to tools]

## Conclusion
[Summary + CTA to relevant tool]

## Related Tools
[Link to 2-3 relevant tools]

---
**Author**: [Author name]
**Published**: [Date]
**Updated**: [Date]
**Reading Time**: [X] minutes
**Tags**: [Relevant tags]
```

## Analytics & Tracking

### Google Analytics 4 Events
- Tool page visits
- CTA clicks
- Form submissions
- Blog post engagement
- Newsletter signups
- External link clicks
- Download events

### Key Metrics to Track
- Organic search traffic
- Conversion rates (trial signups)
- Page load times
- Bounce rates
- User engagement
- Tool adoption rates
- Blog post performance

## Deployment Instructions

### Pre-deployment
1. Minify CSS and JavaScript
2. Optimize images
3. Generate sitemap
4. Set up redirects
5. Configure caching headers
6. Test all forms
7. Verify analytics

### Post-deployment
1. Submit sitemap to search engines
2. Set up monitoring
3. Configure uptime alerts
4. Test all functionality
5. Monitor performance metrics
6. Check for broken links

## Maintenance Schedule

### Daily
- Monitor site uptime
- Check error logs
- Review analytics data

### Weekly
- Update blog content
- Check broken links
- Review performance metrics
- Update social media

### Monthly
- SEO audit
- Performance optimization
- Content calendar planning
- Analytics review

## Common Pitfalls to Avoid

1. **Don't** use experimental CSS features without fallbacks
2. **Don't** load unnecessary JavaScript on pages
3. **Don't** forget alt text for images
4. **Don't** use generic meta descriptions
5. **Don't** ignore mobile optimization
6. **Don't** forget to compress images
7. **Don't** use too many external fonts
8. **Don't** skip schema markup
9. **Don't** forget canonical URLs
10. **Don't** ignore Core Web Vitals

## Success Criteria

### Technical
- Lighthouse Performance Score: 90+
- Lighthouse SEO Score: 95+
- Lighthouse Accessibility Score: 90+
- Core Web Vitals: All green
- Mobile-friendly test: Pass

### SEO
- Organic traffic growth: 20% month-over-month
- Top 10 rankings for primary keywords
- Featured snippets for tool-related queries
- Local pack inclusion (if applicable)
- Backlink acquisition: 5+ quality links per month

### Business
- Trial signup conversion: 3%+ from organic traffic
- Email list growth: 100+ subscribers per month
- Tool adoption rate: 10%+ of visitors try a tool
- Blog engagement: 2+ minutes average session
- Social shares: 50+ per month

Remember: Every decision should prioritize performance, SEO, and user experience. When in doubt, choose the simpler, more stable solution over the complex, cutting-edge option.