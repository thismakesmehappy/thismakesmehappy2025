# SCSS Reorganization Plan

## Current Issues
- `main.scss` has mixed inline styles that should be extracted
- Styles are not consistently organized by component hierarchy
- Some component-specific styles are scattered

## Proposed SCSS File Structure

### Foundation Files (Keep as-is)
- `_variables.scss` - Global variables and Bootstrap overrides
- `_fonts.scss` - Font imports and typography base
- `_responsive_typography.scss` - Typography responsive rules

### Utility Files
- `_utilities.scss` - **NEW** - Extract inline image utilities, grid utilities
- `_animations.scss` - **NEW** - Extract card hover effects and transitions

### Component Files (Organized by component hierarchy)

#### Layout Components
- `_hero.scss` - **NEW** - Extract hero section styles, headshot styles
- `_cards.scss` - **NEW** - Extract card enhancements from main.scss

#### Navigation (Keep existing)
- `_nav.scss` - Navigation styles

#### Home Page Components
- `_home-hero.scss` - **NEW** - Headshot and home hero specific styles
- `_wall-of-terms.scss` - **NEW** - Wall of terms component styles
- `_highlights.scss` - **NEW** - Quick wins and highlights styles

#### Portfolio Components (Keep existing but enhance)
- `_portfolio_grid.scss` - Portfolio grid styles (already exists)
- `_tags.scss` - Tag styles (already exists)

#### Helper Components
- `_buttons.scss` - Button styles (already exists)
- `_memoji.scss` - Memoji styles (already exists)

#### Page-Specific Styles
- `_contact.scss` - Contact page styles (already exists)
- `_gradients.scss` - Gradient utilities (already exists)

## Files to Create/Extract

### 1. `_utilities.scss`
Extract from main.scss:
- `.inline-image-height` and `.inline-image-width` (lines 130-136)
- `.grid-image` responsive styles (lines 138-143)

### 2. `_hero.scss`
Extract from main.scss:
- `.hero-section` styles (lines 145-148)

### 3. `_home-hero.scss`
Extract from main.scss:
- `#headshot` styles (lines 150-169)

### 4. `_wall-of-terms.scss`
Extract from main.scss:
- `#wall-of-terms` styles (lines 171-183)

### 5. `_highlights.scss`
Extract from main.scss:
- `#quick-wins` styles (lines 185-205)

### 6. `_cards.scss`
Extract from main.scss:
- `.card` enhancements (lines 108-117)

### 7. `_animations.scss`
Extract from main.scss:
- Portfolio grid hover effects (lines 120-128)
- Card hover transitions (already in card styles)

## Updated main.scss Import Order

```scss
// Foundation
@import 'variables';
@import 'fonts';
@import 'responsive_typography';

// Utilities
@import 'utilities';
@import 'animations';
@import 'gradients';

// Layout Components
@import 'hero';
@import 'cards';

// Navigation
@import 'nav';

// Home Components
@import 'home-hero';
@import 'wall-of-terms';
@import 'highlights';

// Portfolio Components
@import 'portfolio_grid';
@import 'tags';

// Helper Components
@import 'buttons';
@import 'memoji';

// Page-Specific
@import 'contact';
```

## Component Structure Suggestions

### Current Structure is Good, Minor Improvements:

1. **Create a `layout/` directory** for shared layout components:
   - Move `Footer.tsx` to `src/components/layout/Footer.tsx`
   - Move `ProjectHeader.tsx` to `src/components/layout/ProjectHeader.tsx`

2. **Create a `pages/` directory** for page-specific components:
   - Move `ProjectTemplate.tsx` to `src/components/pages/ProjectTemplate.tsx`

3. **Organize home components better:**
   - Keep `home/` directory as-is, it's well organized

4. **Consider creating a `ui/` directory** for pure UI components:
   - Move `ButtonWrapper.tsx` from `helpers/` to `ui/`
   - Keep `CallToAction.tsx`, `RandomMemoji.tsx`, `TogglePlusMinus.tsx` in `helpers/`

### Suggested Final Component Structure:
```
src/components/
├── layout/
│   ├── Footer.tsx
│   └── ProjectHeader.tsx
├── pages/
│   └── ProjectTemplate.tsx
├── ui/
│   └── ButtonWrapper.tsx
├── helpers/
│   ├── CallToAction.tsx
│   ├── RandomMemoji.tsx
│   └── TogglePlusMinus.tsx
├── home/
│   ├── Highlights.tsx
│   ├── HomeHero.tsx
│   ├── LookingFor.tsx
│   ├── WallOfTerms.tsx
│   └── WhereAndWho.tsx
├── navigation/
│   ├── NavMenu.tsx
│   └── Navigation.tsx
└── portfolioGrid/
    └── [existing files]
```

## Benefits of This Organization

1. **Clear separation of concerns** - Each file has a single responsibility
2. **Component-style alignment** - SCSS structure matches component hierarchy
3. **Better maintainability** - Easier to find and modify specific styles
4. **Improved performance** - Smaller, focused files load faster
5. **Team collaboration** - Clear ownership and organization
6. **Scalability** - Easy to add new components and styles

## Implementation Priority

1. **High Priority:** Extract utilities, hero, and home component styles
2. **Medium Priority:** Reorganize component structure
3. **Low Priority:** Fine-tune import order and add additional organization