# Customization Guide

This React application is set up with a flexible customization system using SCSS and Tailwind CSS. Here's how to customize different aspects of your application.

## 🎨 Styling Architecture

### File Structure
```
src/
├── styles/
│   ├── variables.scss      # SCSS variables for colors, spacing, etc.
│   ├── components.scss     # Custom component styles
│   └── main.scss          # Main SCSS file that imports everything
├── components/
│   ├── ui/                # shadcn/ui components (auto-generated)
│   ├── layout/            # Layout components
│   └── forms/             # Form components
└── pages/                 # Page components
```

## 🔧 Customizing Colors and Variables

### 1. SCSS Variables (`src/styles/variables.scss`)
Edit the SCSS variables to change global styling:

```scss
// Brand Colors
$primary-color: #3b82f6;      // Change primary color
$secondary-color: #64748b;    // Change secondary color
$accent-color: #f59e0b;       // Change accent color

// Typography
$font-family-sans: 'Inter', system-ui, sans-serif;
$font-family-mono: 'Fira Code', monospace;

// Spacing
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
// ... add more as needed
```

### 2. Tailwind CSS Variables (`src/tailwind.css`)
shadcn/ui components use CSS custom properties for theming. You can customize these:

```css
:root {
  --primary: oklch(0.205 0 0);      /* Change primary color */
  --secondary: oklch(0.97 0 0);     /* Change secondary color */
  --accent: oklch(0.97 0 0);        /* Change accent color */
  --radius: 0.625rem;               /* Change border radius */
  /* ... more variables */
}
```

## 🎯 Customizing Components

### 1. Custom Component Styles (`src/styles/components.scss`)
Add your own component variations:

```scss
// Example: Custom button variations
.btn-custom {
  @apply px-4 py-2 rounded-md font-medium transition-colors;
  
  &.btn-gradient {
    background: linear-gradient(135deg, $primary-color, $accent-color);
    @apply text-white hover:opacity-90;
  }
  
  &.btn-outline-custom {
    border: 2px solid $primary-color;
    @apply text-blue-600 hover:bg-blue-50;
  }
}

// Example: Custom card styles
.card-custom {
  @apply bg-white rounded-lg shadow-md border border-gray-200 p-6;
  
  &.card-hover {
    @apply hover:shadow-lg hover:scale-105 transition-all duration-300;
  }
}
```

### 2. Extending shadcn/ui Components
You can extend shadcn/ui components by creating wrapper components:

```tsx
// src/components/ui/custom-button.tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'outline-custom'
  children: React.ReactNode
}

export function CustomButton({ variant, className, children, ...props }: CustomButtonProps) {
  return (
    <Button
      className={cn(
        'btn-custom',
        variant && `btn-${variant}`,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
```

## 🚀 Adding New Pages

1. Create a new page component in `src/pages/`:
```tsx
// src/pages/NewPage.tsx
export function NewPage() {
  return (
    <div className="fade-in">
      <h1 className="text-3xl font-bold text-gradient mb-6">New Page</h1>
      <div className="card-custom">
        <p>Your content here...</p>
      </div>
    </div>
  )
}
```

2. Add the route to `src/App.tsx`:
```tsx
import { NewPage } from '@/pages/NewPage'

// Add to your routes
<Route path="new-page" element={<NewPage />} />
```

3. Add navigation link to `src/components/layout/Header.tsx`:
```tsx
<Link to="/new-page" className="text-gray-700 hover:text-blue-600 transition-colors">
  New Page
</Link>
```

## 📱 Responsive Design

Use Tailwind's responsive utilities combined with SCSS variables:

```scss
// Custom responsive container
.container-responsive {
  padding: 0 $spacing-md;
  
  @media (min-width: $breakpoint-md) {
    padding: 0 $spacing-lg;
  }
  
  @media (min-width: $breakpoint-lg) {
    padding: 0 $spacing-xl;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

## 🎭 Adding Animations

Create reusable animations in your SCSS:

```scss
// src/styles/animations.scss
.slide-in-left {
  animation: slideInLeft 0.5s ease-out;
}

.bounce-in {
  animation: bounceIn 0.6s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

## 🔍 Adding New shadcn/ui Components

To add more shadcn/ui components:

```bash
# Add specific components
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add dialog

# See all available components
npx shadcn@latest add
```

## 📝 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Lint code
npm run lint
```

## 🎨 Theme Customization Tips

1. **Consistent Color Palette**: Use your SCSS variables consistently across components
2. **Typography Scale**: Define font sizes in your variables for consistency
3. **Spacing System**: Use the spacing variables instead of arbitrary values
4. **Component Variants**: Create component variations using SCSS mixins and classes
5. **Dark Mode**: shadcn/ui supports dark mode out of the box - customize the `.dark` class variables

## 🔧 Extending Tailwind Configuration

To add custom Tailwind utilities, edit `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        'brand-blue': '#3b82f6',
        'brand-purple': '#8b5cf6',
      },
      fontFamily: {
        // Add custom fonts
        'custom-sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Add custom spacing
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
```

This setup gives you maximum flexibility to customize your application while maintaining a clean, scalable architecture!