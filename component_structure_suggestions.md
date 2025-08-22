# Component Structure Improvements

## Current Component Structure Analysis

The current component structure is already well-organized, but here are some improvements to better align with the new SCSS organization:

## Suggested Improvements

### 1. Create Layout Directory
Create `src/components/layout/` for shared layout components:

```bash
mkdir src/components/layout
mv src/components/Footer.tsx src/components/layout/Footer.tsx
mv src/components/ProjectHeader.tsx src/components/layout/ProjectHeader.tsx
```

### 2. Create Pages Directory
Create `src/components/pages/` for page-specific components:

```bash
mkdir src/components/pages
mv src/components/ProjectTemplate.tsx src/components/pages/ProjectTemplate.tsx
```

### 3. Create UI Directory
Create `src/components/ui/` for pure UI components:

```bash
mkdir src/components/ui
mv src/components/helpers/ButtonWrapper.tsx src/components/ui/ButtonWrapper.tsx
```

### 4. Update Import Statements

After moving components, you'll need to update import statements in files that reference them:

#### For Footer.tsx moves:
- Update imports in main App component or layout files
- Change from: `import Footer from './components/Footer'`
- Change to: `import Footer from './components/layout/Footer'`

#### For ProjectHeader.tsx moves:
- Update imports in ProjectTemplate or other files
- Change from: `import ProjectHeader from './components/ProjectHeader'`
- Change to: `import ProjectHeader from './components/layout/ProjectHeader'`

#### For ButtonWrapper.tsx moves:
- Update imports in HomeHero.tsx and other components
- Change from: `import ButtonWrapper from '../helpers/ButtonWrapper'`
- Change to: `import ButtonWrapper from '../ui/ButtonWrapper'`

#### For ProjectTemplate.tsx moves:
- Update imports in routing or main App component
- Change from: `import ProjectTemplate from './components/ProjectTemplate'`
- Change to: `import ProjectTemplate from './components/pages/ProjectTemplate'`

## Final Recommended Structure

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
    ├── PortfolioGrid.tsx
    ├── PortfolioGridFooter.tsx
    ├── PortfolioGridImageFeatured.tsx
    ├── PortfolioGridImageInner.tsx
    ├── PortfolioGridTags.tsx
    ├── PortfolioGridTitleFeatured.tsx
    ├── PortfolioGridTitleInner.tsx
    ├── PortfolioGridTitleInnerShort.tsx
    ├── PortfolioItemFeatured.tsx
    ├── PortfolioItemStandard.tsx
    └── interfaces.ts
```

## Benefits of This Structure

1. **Clear Separation of Concerns**: Each directory has a specific purpose
2. **Better Maintainability**: Easier to locate and modify components
3. **Scalability**: Easy to add new components in appropriate categories
4. **Team Collaboration**: Clear ownership and organization
5. **Matches SCSS Organization**: Component structure aligns with stylesheet organization

## SCSS-Component Alignment

The new structure aligns perfectly with the SCSS organization:

- **Layout components** → `_hero.scss`, `_cards.scss`
- **UI components** → `_buttons.scss`
- **Home components** → `_home-hero.scss`, `_wall-of-terms.scss`, `_highlights.scss`
- **Navigation components** → `_nav.scss`
- **Portfolio components** → `_portfolio_grid.scss`, `_tags.scss`
- **Helper components** → `_memoji.scss`
- **Page-specific** → `_contact.scss`

## Implementation Notes

1. **Test after each move**: Move one component at a time and test to ensure no imports are broken
2. **Update TypeScript paths**: If using path mapping in tsconfig.json, update accordingly
3. **Check for circular dependencies**: Ensure the new structure doesn't create import cycles
4. **Update documentation**: Update any README or documentation that references component locations

This structure provides a solid foundation for future development and makes the codebase more maintainable and scalable.