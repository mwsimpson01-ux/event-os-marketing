# Event.OS "Coming Soon" Landing Page - Design Guidelines

## Design Approach
Reference-based design inspired by modern SaaS landing pages (Linear, Notion) but adapted to Event.OS's unique warm, paper-like aesthetic. This is a single-page coming soon experience that establishes brand presence with sophistication.

## Core Design Elements

### A. Typography
**Primary Font:** System UI stack (SF Pro Text, Helvetica Neue, Arial)
- Hero headline: 3.5rem (56px), font-weight 700, letter-spacing -0.03em
- Tagline: 1.35rem (22px), font-weight 600, letter-spacing -0.01em  
- Body text: 0.95rem (15px), font-weight 400-500
- Meta labels: 0.7rem uppercase, letter-spacing 0.18em, weight 600

**Color Palette:**
- Primary text: #261711 (deep warm brown)
- Muted text: #7F6F62
- Label text: #A1876B

### B. Layout System
**Spacing Units:** Tailwind primitives - predominantly p-4, p-6, p-8, p-12, p-16, p-20 for consistent rhythm
- Mobile: py-12 section padding
- Desktop: py-20 to py-24 section padding
- Container: max-w-4xl centered for content
- Card padding: p-8 to p-10

### C. Color System
**Backgrounds:**
- Page background: #F7F0E6 (light cream paper)
- Card surface: #FBF4EB (subtle lighter panel)
- Sage accent areas: #D4DEC9

**Accents:**
- Primary CTA gradient: linear-gradient(135deg, #F47B3D, #F15C23)
- Border colors: #E7D8C8, #DDCFC1
- Focus states: #F47B3D with rgba(244, 123, 61, 0.18) glow

### D. Component Library

**Hero Section (Full viewport height recommended):**
- Centered layout with max-w-3xl container
- Event.OS logotype/wordmark at top (large, 2.5rem minimum)
- Main headline: "The Operating System for Event Planning"
- Subtitle: "Launching Soon" in meta label style
- Optional: Brief 1-2 sentence description in muted text
- CTA button: "Notify Me" with orange gradient, rounded-full (999px radius)
- Background: Solid cream with optional subtle radial gradient overlay at corners

**Card Component:**
- Border-radius: 24px
- Background: #FBF4EB
- Border: 1px solid #E7D8C8
- Shadow: 0 18px 45px rgba(29, 14, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.03)
- Padding: p-8 to p-10

**Primary Button:**
- Rounded-full (pill shape)
- Padding: py-3 px-8
- Background: linear-gradient(135deg, #F47B3D, #F15C23)
- Text: white, font-weight 600, 0.95rem
- Shadow: 0 12px 28px rgba(241, 92, 35, 0.35), 0 2px 4px rgba(0, 0, 0, 0.08)
- Hover: Lift effect (translateY -1px), enhanced shadow

**Optional Email Input (if included):**
- Background: #FFFFFF
- Border-radius: 12px
- Border: 1px solid #DDCFC1
- Padding: py-3 px-4
- Focus: Border #F47B3D, glow shadow

**Status Badge/Pill:**
- Inline-flex, rounded-full
- Background: #F0E4D6
- Text: #6F6051, 0.8rem, weight 500
- Padding: py-2 px-5

### E. Layout Structure

**Single Page Layout:**
1. **Hero Section (100vh):**
   - Centered vertical and horizontal alignment
   - Event.OS logo/brand (consider stylized text treatment)
   - Headline + tagline stacked
   - Optional: 3-column feature preview cards below fold showing key capabilities
   
2. **Optional Status Section (if space permits):**
   - Small sage-accented card showing "In Development" with subtle icon
   - Expected launch timeframe in meta label style

**Responsive Breakpoints:**
- Mobile: Single column, reduced font sizes (scale down 15-20%)
- Tablet: Same as mobile with slightly larger spacing
- Desktop: Full layout as specified

### F. Animations
Minimal, sophisticated motion:
- Page load: Gentle fade-in (0.5s ease) for hero content
- Button hover: Subtle lift with smooth transition (0.18s ease)
- All transitions: 0.22s ease for color/background changes
- No scroll-triggered animations needed (single viewport page)

### G. Special Effects
**Optional Ambient Glow (for elevated feel):**
- Radial gradient overlay positioned at hero corners
- Colors: rgba(244, 163, 104, 0.15) and rgba(188, 204, 173, 0.18)
- Blur: 20-30px, subtle opacity

## Images
**Hero Background (Optional):**
No hero image needed - maintain clean cream background. If desired, add a subtle abstract geometric pattern in #F3E7D8 (10% opacity) for texture.

**Logo/Brand:**
Event.OS wordmark should be prominent - stylized text treatment in primary brown (#261711) with possible subtle orange accent underline or dot.

## Key Design Principles
- **Warmth**: Cream and brown palette creates inviting, human feel
- **Sophistication**: Generous whitespace, refined typography, subtle shadows
- **Trust**: Clean, professional layout establishes credibility
- **Simplicity**: Single-purpose page with clear messaging hierarchy
- **Tactility**: Rounded corners and soft shadows suggest touchable, approachable interface