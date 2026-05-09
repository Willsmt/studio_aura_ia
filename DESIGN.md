---
name: Studio Aura
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#121212'
  on-primary-container: '#7e7d7d'
  inverse-primary: '#5f5e5e'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#cac6c3'
  on-tertiary: '#32302f'
  tertiary-container: '#131211'
  on-tertiary-container: '#807d7b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-sm:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.05em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.03em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.2em
  button:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.15em
spacing:
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 20px
  stack-unit: 8px
---

## Brand & Style

The design system is centered on the concept of "Discreet Luxury." It evokes the quiet confidence of a high-end boutique hotel or a contemporary art gallery. The brand personality is sophisticated, architectural, and curated, favoring a "less is more" approach that allows visual content and negative space to communicate value.

The visual style is a blend of **Minimalism** and **High-Contrast Elegance**. It relies on impeccable typography, a restricted color palette, and a rigid adherence to a grid. The atmosphere is intentional and calm, utilizing dark surfaces to create an immersive, cinematic experience for the user.

## Colors

The palette is anchored in a deep, monochromatic foundation to emphasize the "dark mode" aesthetic. 

- **Primary Background:** A near-black charcoal (#121212) serves as the canvas, providing depth and a sense of exclusivity.
- **Accent Gold:** Rich Gold (#C5A059) is used sparingly for highlights, borders, and interactive states to represent premium craftsmanship.
- **Surface Neutrals:** Two tiers of grey (#2A2A2A and #4A4A4A) are utilized for UI layering, input fields, and secondary containers.
- **Typography:** Off-white (#F5F5F5) is the primary text color to ensure high readability while avoiding the harshness of pure white against dark backgrounds.

## Typography

This design system uses a high-contrast typographic pairing to establish a refined hierarchy. 

**Playfair Display** (Serif) is reserved for headlines and display text. Its elegant curves and varied stroke weights convey a sense of heritage and bespoke service.

**Montserrat** (Sans-Serif) handles all functional and body text. To maintain the premium feel, body text uses a lighter font weight (300) and generous letter spacing. Small labels and buttons should always be set in uppercase with high tracking (letter spacing) to mimic the aesthetic of architectural signage.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model on desktop to ensure that content feels curated like an art piece within a frame. 

- **Grid:** A 12-column grid is used for desktop with wide 32px gutters to prevent visual clutter.
- **Margins:** Large outer margins (80px on desktop) create a sense of breathability and focus.
- **Rhythm:** Spacing follows a strict 8px incremental scale (the `stack-unit`). Vertical rhythm is intentionally slow, with generous padding between sections (often 120px to 160px) to force a deliberate scroll speed.
- **Responsive:** On mobile, the grid collapses to 4 columns with reduced margins (20px), while maintaining the same 8px spacing logic for consistency.

## Elevation & Depth

In keeping with the minimalist "gallery" aesthetic, depth is communicated through **Tonal Layers** and **Hairline Dividers** rather than shadows.

- **Stacking:** The background is #121212. Elevated components (like cards or menus) use #2A2A2A. This subtle shift in tone creates a "stacked" effect without the need for heavy drop shadows.
- **Hairline Outlines:** To define edges, use 1px solid borders in #C5A059 (for high-priority items) or #2A2A2A (for subtle separation).
- **Glassmorphism:** For navigation bars or modal overlays, a subtle backdrop blur (20px) with a 20% opacity charcoal fill may be used to maintain context while focusing the user's attention.

## Shapes

The shape language is strictly **Sharp (0px)**. All containers, buttons, and input fields must feature 90-degree corners. This evokes a sense of architectural precision, structural integrity, and timeless design. Avoid all rounded corners, as they detract from the serious and high-end tone of the studio.

## Components

### Buttons
Primary buttons are ghost-style with a 1px Gold (#C5A059) border and uppercase text. On hover, they transition to a solid Gold fill with black text. Secondary buttons have no border and use a Gold underline.

### Input Fields
Inputs are composed of a single 1px hairline bottom border in #4A4A4A. The label sits above the line in `label-caps` style. Upon focus, the border transitions to Gold.

### Cards
Cards are flat containers using the #2A2A2A tonal layer. They do not have shadows. Imagery within cards should have a subtle 0.98 scale transition on hover to create a sense of tactile depth.

### Dividers
Dividers are 1px thick. Horizontal dividers should often be centered with significant margin on either side, while vertical hairline dividers are used to separate navigation elements or gallery metadata.

### Gallery Components
Large-scale image masks and immersive full-screen transitions are encouraged to showcase the studio's portfolio projects with maximum impact.