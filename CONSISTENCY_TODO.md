# Website Consistency To-Do List

*Comprehensive action items for code and design consistency*

## 🔥 HIGH PRIORITY - Code Quality & Maintainability

### Import & Export Standardization

- [ ] **Standardize quote usage**: Choose single quotes for all imports consistently
    - [x] Fix `src/App.tsx` lines 1-10 (mix of single/double quotes)
    - [x] Fix `src/components/helpers/CallToAction.tsx`
    - [x] Fix `src/context/ProjectContext.tsx`
    - [x] Run find/replace across entire codebase
- [ ] **Standardize export patterns**: Convert all components to default exports
    - [x] Fix `src/components/helpers/RandomMemoji.tsx` (currently named export)
    - [x] Fix `src/pages/projects/ColorScales.tsx` (currently named export)
    - [ ] Audit all component files for consistency
- [ ] **Fix import paths**: Ensure all internal imports use `src/` prefix
    - [ ] Fix `src/main.tsx` line 3 (uses relative `./App.tsx`)
    - [ ] Audit entire codebase for relative imports

### Component Structure Cleanup

- [ ] **Remove unnecessary fragments**: Clean up wrapper elements
    - [ ] Fix `src/components/helpers/RandomMemoji.tsx` lines 25-31 (unnecessary `<>`)
- [ ] **Standardize prop interfaces**: Consistent formatting and optional syntax
    - [ ] Fix `src/components/helpers/RandomMemoji.tsx` interface formatting
    - [ ] Add proper TypeScript interfaces where missing
- [ ] **File extension consistency**: Ensure `.tsx` for components, `.ts` for utilities
    - [ ] Audit all files for correct extensions

---

## 🎨 MEDIUM PRIORITY - Visual Design Consistency

### Spacing Standardization

- [ ] **Audit all margin/padding usage**: Document current patterns
    - [ ] Fix `src/components/home/HomeHero.tsx` redundant `mb-0 pb-0`
    - [ ] Standardize section spacing (currently mix of `py-5`, `py-6`)
    - [ ] Create spacing utility guide
- [ ] **Bootstrap spacing audit**: Ensure consistent use of spacing classes
    - [ ] Replace custom spacing with Bootstrap utilities where possible
    - [ ] Document when custom spacing is appropriate
- [ ] **Remove spacing inconsistencies**:
    - [ ] Fix navigation gap usage (`gap-lg-3` vs standard Bootstrap)
    - [ ] Standardize button spacing in `src/components/helpers/CallToAction.tsx`

### Color System Cleanup

- [ ] **Audit color usage**: Map all color applications
    - [ ] Fix hardcoded colors in `src/styles/_buttons.scss` lines 32-45
    - [ ] Replace magic color values with semantic variables
    - [ ] Ensure consistent color class usage (`bg-coral` vs inline styles)
- [ ] **Color naming consistency**:
    - [ ] Review `src/styles/_variables.scss` color definitions
    - [ ] Ensure semantic naming throughout components
    - [ ] Create color usage documentation

### Typography Hierarchy

- [ ] **Simplify responsive typography**: Remove magic numbers
    - [ ] Fix `src/styles/_responsive_typography.scss` complex calculations
    - [ ] Reduce hero class variants (`.hero`, `.hero-sub`, `.hero-sub-med`)
    - [ ] Create clear typography scale documentation
- [ ] **Font family consistency**:
    - [ ] Audit serif vs sans-serif usage
    - [ ] Ensure consistent application of `$font-family-*` variables

---

## 🏗️ MEDIUM PRIORITY - Architecture & Performance

### Component Patterns

- [ ] **Button component standardization**:
    - [ ] Decide: Keep ButtonWrapper or use direct Button components
    - [ ] Fix mixed usage in `src/components/helpers/CallToAction.tsx`
    - [ ] Update all button implementations consistently
- [ ] **State management patterns**:
    - [ ] Standardize useState naming conventions
    - [ ] Fix complex scroll logic in `src/components/navigation/Navigation.tsx`
    - [ ] Document state management patterns

### SCSS Organization

- [ ] **Remove excessive `!important` usage**:
    - [ ] Fix `src/styles/_buttons.scss` overuse of `!important`
    - [ ] Find alternative solutions for specificity issues
- [ ] **Standardize SCSS imports**:
    - [ ] Ensure all component SCSS files import variables consistently
    - [ ] Fix `src/styles/_frequency-groups.scss` import pattern
- [ ] **Optimize Bootstrap imports**:
    - [ ] Audit `src/styles/main.scss` for unused components
    - [ ] Remove unused Bootstrap modules to reduce bundle size

---

## 🔍 LOW PRIORITY - Polish & Optimization

### Performance Optimization

- [ ] **Image optimization**:
    - [ ] Add lazy loading for images
    - [ ] Optimize image sizes and formats
    - [ ] Add proper alt text patterns
- [ ] **Component optimization**:
    - [ ] Fix `RandomMemoji` recalculation on every render
    - [ ] Add React.memo where appropriate
    - [ ] Optimize re-renders in `PortfolioGrid`

### Accessibility Improvements

- [ ] **ARIA labels and semantic HTML**:
    - [ ] Add missing ARIA labels to navigation
    - [ ] Ensure proper heading hierarchy
    - [ ] Fix any div click handlers (use buttons instead)
- [ ] **Color contrast audit**:
    - [ ] Test all color combinations for WCAG compliance
    - [ ] Fix any contrast issues found
- [ ] **Keyboard navigation**:
    - [ ] Test all interactive elements with keyboard
    - [ ] Add focus indicators where missing

### Error Handling & Validation

- [ ] **Add prop validation**:
    - [ ] Add runtime prop validation for critical components
    - [ ] Add error boundaries for component failures
- [ ] **Asset loading**:
    - [ ] Add error handling for missing images
    - [ ] Add fallback images where appropriate

---

## 📱 RESPONSIVE DESIGN AUDIT

### Breakpoint Consistency

- [ ] **Standardize breakpoint usage**:
    - [ ] Audit all responsive patterns
    - [ ] Ensure consistent use of Bootstrap breakpoints
    - [ ] Fix custom breakpoint usage where inappropriate
- [ ] **Mobile-first approach**:
    - [ ] Ensure all components follow mobile-first patterns
    - [ ] Fix desktop-first implementations
    - [ ] Test all components on mobile devices

### Grid System Consistency

- [ ] **Bootstrap Grid audit**:
    - [ ] Ensure consistent use of Bootstrap grid
    - [ ] Fix custom flex layouts where Bootstrap grid is more appropriate
    - [ ] Document when custom layouts are necessary

---

## 🧪 TESTING & DOCUMENTATION

### Code Quality Tools

- [ ] **Set up linting rules**:
    - [ ] Configure ESLint for import/export consistency
    - [ ] Add Prettier for code formatting
    - [ ] Set up pre-commit hooks
- [ ] **Add visual regression testing**:
    - [ ] Set up screenshot testing for components
    - [ ] Add tests for responsive breakpoints

### Documentation

- [ ] **Create style guide**:
    - [ ] Document approved import/export patterns
    - [ ] Create component usage guidelines
    - [ ] Document color and typography systems
- [ ] **Component documentation**:
    - [ ] Add JSDoc comments to all components
    - [ ] Document prop interfaces
    - [ ] Create usage examples

---

## 🔍 ADDITIONAL AREAS TO INVESTIGATE

*These weren't fully covered in the initial review and need deeper analysis:*

### Content Consistency

- [ ] **Text content audit**:
    - [ ] Check for consistent tone and voice
    - [ ] Ensure consistent capitalization patterns
    - [ ] Fix any typos or grammatical inconsistencies
- [ ] **Image consistency**:
    - [ ] Audit image styles and treatments
    - [ ] Ensure consistent image sizing patterns
    - [ ] Check for consistent image quality

### Animation & Interactions

- [ ] **Transition consistency**:
    - [ ] Audit all CSS transitions and animations
    - [ ] Ensure consistent timing and easing
    - [ ] Document animation patterns
- [ ] **Hover states**:
    - [ ] Ensure all interactive elements have hover states
    - [ ] Make hover effects consistent across components

### Form & Input Patterns

- [ ] **Form consistency** (if any forms exist):
    - [ ] Audit form styling and validation patterns
    - [ ] Ensure consistent input styling
    - [ ] Check error message patterns

### Loading States & Feedback

- [ ] **Loading patterns**:
    - [ ] Add loading states for async operations
    - [ ] Ensure consistent loading indicators
    - [ ] Add proper error states

---

## 📊 COMPLETION TRACKING

### Progress Overview

- **High Priority**: ⬜ 0/12 completed
- **Medium Priority**: ⬜ 0/15 completed
- **Low Priority**: ⬜ 0/8 completed
- **Additional Areas**: ⬜ 0/10 completed

### Estimated Timeline

- **High Priority**: 2-3 days
- **Medium Priority**: 3-4 days
- **Low Priority**: 2-3 days
- **Additional Areas**: 2-3 days
- **Total Estimated**: 9-13 days

---

*Last Updated: August 26, 2025*  
*Total Items: 45+ action items*
