# Light/Dark Mode Implementation

## Overview
This portfolio now supports both light and dark modes with a beautiful toggle button in the footer. The theme preference is persisted in localStorage for a seamless user experience across sessions.

## Color Philosophy

### Light Mode Colors
The light mode has been carefully designed with a premium, modern aesthetic:

**Background Colors:**
- `--background: #fafafa` - Soft off-white that reduces eye strain compared to pure white
- `--background-secondary: #ffffff` - Pure white for elevated surfaces
- `--background-tertiary: #f5f5f5` - Subtle gray for depth variations

**Text Colors:**
- `--text-primary: #1a1a1a` - Deep charcoal for excellent readability without harsh blacks
- `--text-secondary: #525252` - Medium gray for secondary content
- `--text-tertiary: #737373` - Lighter gray for tertiary content
- `--text-muted: #a3a3a3` - Very light gray for muted text and metadata

**Card Styling:**
- `--card-background: rgba(255, 255, 255, 0.95)` - Slightly transparent white for glassmorphism effect
- `--card-border: rgba(0, 0, 0, 0.08)` - Subtle borders that don't overwhelm
- `--card-hover-border: rgba(168, 85, 247, 0.3)` - Purple accent on hover for interactivity

**Shadows:**
- Soft, natural shadows that create depth without being heavy
- `--shadow-glow: 0 0 20px rgba(168, 85, 247, 0.2)` - Subtle purple glow for special elements

**Background Gradient:**
```css
background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 50%, #e8e8e8 100%);
```
A gentle gradient that adds visual interest without distraction.

### Dark Mode Colors
Dark mode maintains the original cosmic aesthetic:

**Background Colors:**
- `--background: #0a0a0a` - Deep black for true dark mode
- `--background-secondary: #1a1a1a` - Slightly elevated surfaces
- `--background-tertiary: #262626` - Further elevation for layering

**Text Colors:**
- `--text-primary: #ffffff` - Pure white for maximum contrast
- `--text-secondary: #d4d4d4` - Light gray for secondary text
- `--text-tertiary: #a3a3a3` - Medium gray for less important text
- `--text-muted: #737373` - Darker gray for muted content

**Card Styling:**
- `--card-background: rgba(26, 26, 26, 0.7)` - Glassmorphism effect with dark tone
- `--card-border: rgba(255, 255, 255, 0.1)` - Subtle light borders
- `--card-hover-border: rgba(168, 85, 247, 0.5)` - Vibrant purple on hover

**Shadows:**
- Deeper, more dramatic shadows for depth
- `--shadow-glow: 0 0 30px rgba(168, 85, 247, 0.4)` - Stronger purple glow

**Background Gradient:**
```css
background: radial-gradient(ellipse at 50% 0%, #1a1a2e 0%, #23235b 60%, #2d2d54 100%);
```
The original cosmic gradient with purple tones.

### Accent Colors (Same in both modes)
- `--accent-pink: #ff6ec7` - Vibrant pink
- `--accent-purple: #a855f7` - Rich purple (primary brand color)
- `--accent-orange: #ff8c42` - Warm orange

These colors remain consistent to maintain brand identity.

## Implementation Details

### Theme Context
Location: `contexts/ThemeContext.tsx`

The ThemeContext provides:
- Current theme state ('light' | 'dark')
- `toggleTheme()` function to switch between modes
- Automatic localStorage persistence
- Proper hydration handling to avoid SSR mismatches

### CSS Variables
Location: `app/globals.css`

All theme-dependent styling uses CSS custom properties (variables) that change based on the `[data-theme]` attribute on the document root.

### Theme Toggle Button
Location: `components/Footer.tsx`

The toggle button features:
- Smooth icon transitions between Sun (light mode) and Moon (dark mode)
- Scale animations on hover and click
- Proper ARIA labels for accessibility
- Located in the footer's bottom section alongside legal links

### Usage in Components

To use theme-aware colors in your components:

```tsx
// Use inline styles with CSS variables
<div style={{ color: 'var(--text-primary)' }}>Text</div>

// Or access the theme directly
const { theme } = useTheme();
```

## Scrollbar Styling
Scrollbars are also theme-aware:
- Light mode: Gray on light gray background
- Dark mode: Dark gray on darker background

## Transition Effects
All theme changes include smooth 300ms transitions on:
- Background colors
- Text colors
- Border colors
- Icon rotations and scales

This creates a polished, professional feel when switching themes.

## Default Theme
The application defaults to dark mode on first visit, which aligns with the original design aesthetic and is generally preferred for developer portfolios.

## Browser Compatibility
- Works in all modern browsers
- Falls back gracefully in older browsers
- Uses `localStorage` for persistence (with proper checks for SSR)
- Respects user's `prefers-reduced-motion` setting for animations

## Future Enhancements
Potential improvements:
- System preference detection (auto-switch based on OS theme)
- Custom theme colors
- High contrast mode for accessibility
- Additional accent color options
