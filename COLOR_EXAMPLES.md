# Custom Color System Usage Examples

Your Bootstrap project now includes 6 custom color scales, each with 11 shades (50-950). Here's how to use them:

## Available Color Scales

### 1. Ocean Blue (`$ocean-*`)
- **Base Color**: `$ocean-500` (#0ea5e9)
- **Range**: `$ocean-50` (lightest) to `$ocean-950` (darkest)

### 2. Coral (`$coral-*`)
- **Base Color**: `$coral-500` (#ef4444)
- **Range**: `$coral-50` (lightest) to `$coral-950` (darkest)

### 3. Forest Green (`$forest-*`)
- **Base Color**: `$forest-500` (#22c55e)
- **Range**: `$forest-50` (lightest) to `$forest-950` (darkest)

### 4. Sunset Orange (`$sunset-*`)
- **Base Color**: `$sunset-500` (#f59e0b)
- **Range**: `$sunset-50` (lightest) to `$sunset-950` (darkest)

### 5. Lavender Purple (`$lavender-*`)
- **Base Color**: `$lavender-500` (#a855f7)
- **Range**: `$lavender-50` (lightest) to `$lavender-950` (darkest)

### 6. Slate Gray (`$slate-*`)
- **Base Color**: `$slate-500` (#64748b)
- **Range**: `$slate-50` (lightest) to `$slate-950` (darkest)

## Bootstrap Theme Colors (Updated)

- **Primary**: Ocean Blue (`$ocean-500`)
- **Secondary**: Slate Gray (`$slate-500`)
- **Success**: Forest Green (`$forest-500`)
- **Info**: Ocean Light (`$ocean-400`)
- **Warning**: Sunset Orange (`$sunset-500`)
- **Danger**: Coral (`$coral-500`)
- **Light**: Slate Light (`$slate-50`)
- **Dark**: Slate Dark (`$slate-800`)

## How to Use

### 1. Bootstrap Utility Classes
```html
<!-- Standard Bootstrap colors -->
<div class="bg-primary text-white">Ocean Blue Background</div>
<button class="btn btn-success">Forest Green Button</button>

<!-- Custom color classes (automatically generated) -->
<div class="bg-ocean text-white">Ocean Background</div>
<div class="bg-coral text-white">Coral Background</div>
<div class="bg-forest text-white">Forest Background</div>
<div class="bg-sunset text-white">Sunset Background</div>
<div class="bg-lavender text-white">Lavender Background</div>
<div class="bg-slate text-white">Slate Background</div>

<!-- Custom buttons -->
<button class="btn btn-ocean">Ocean Button</button>
<button class="btn btn-coral">Coral Button</button>
<button class="btn btn-forest">Forest Button</button>
```

### 2. Custom Gradient Classes
```html
<!-- Ocean to Lavender gradient text -->
<h1 class="text-gradient">Beautiful Gradient Text</h1>

<!-- Sunset to Coral gradient text -->
<h2 class="text-gradient-sunset">Warm Gradient Text</h2>

<!-- Forest to Ocean gradient text -->
<h3 class="text-gradient-forest">Cool Gradient Text</h3>
```

### 3. In SCSS/CSS
```scss
// Using variables in your custom styles
.custom-element {
  background-color: $ocean-100;
  border: 1px solid $ocean-300;
  color: $ocean-800;
  
  &:hover {
    background-color: $ocean-200;
  }
}

// Creating gradients
.custom-gradient {
  background: linear-gradient(45deg, $forest-400, $ocean-500);
}

// Using different shades for depth
.card-stack {
  background: $slate-50;
  box-shadow: 
    0 1px 3px rgba($slate-900, 0.12),
    0 1px 2px rgba($slate-900, 0.24);
}
```

### 4. Component Examples
```html
<!-- Alert with custom colors -->
<div class="alert" style="background-color: var(--bs-forest-100); border-color: var(--bs-forest-300); color: var(--bs-forest-800);">
  Custom forest-themed alert
</div>

<!-- Badge with custom color -->
<span class="badge bg-lavender">New Feature</span>

<!-- Card with custom styling -->
<div class="card" style="border-left: 4px solid var(--bs-ocean-500);">
  <div class="card-body">
    <h5 class="text-ocean">Ocean-themed Card</h5>
  </div>
</div>
```

## Color Scale Usage Guidelines

- **50-100**: Very light backgrounds, subtle highlights
- **200-300**: Light backgrounds, disabled states
- **400-500**: Primary colors, active states (500 is the base)
- **600-700**: Hover states, emphasis
- **800-900**: Text on light backgrounds, strong emphasis
- **950**: Very dark text, high contrast

## Tips

1. **Consistency**: Use the same color family for related elements
2. **Contrast**: Pair light shades with dark text, dark shades with light text
3. **Hierarchy**: Use darker/lighter shades to show importance levels
4. **Accessibility**: Ensure sufficient contrast ratios for text readability
5. **Theming**: Mix and match color families for unique brand identities