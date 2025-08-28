# React + TypeScript + Vite Portfolio

This template provides a production-ready React portfolio setup with Vite, TypeScript, and flexible deployment
configuration for static servers.

## Features

### 🚀 **Flexible Deployment System**

- **Production builds** for root deployment
- **Staging builds** for subdirectory deployment
- **Automatic .htaccess management** for Apache servers
- **Environment-based configuration**

### 🔗 **Clean URL Routing**

- **BrowserRouter** with clean URLs (no hash fragments)
- **SPA routing support** with Apache fallback
- **Direct URL access** works for all routes

### 🖼️ **Consistent Asset Management**

- **`asset()` utility function** for reliable image paths
- **Works across all environments** and route depths
- **No manual path adjustments** needed

### ✨ **Enhanced User Experience**

- **Automatic scroll to top** on route changes
- **Dynamic content** that refreshes on navigation
- **Responsive design** with Bootstrap integration

## Quick Start

### Development

```bash
npm install
npm run dev
```

### Production Deployment

```bash
# For root deployment (work.thismakesmehappy.co)
npm run build:production

# For subdirectory deployment (work.thismakesmehappy.co/react/)
npm run build:staging
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (default)
- `npm run build:production` - Build for root deployment
- `npm run build:staging` - Build for subdirectory deployment
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/
│   ├── helpers/
│   │   ├── RandomMemoji.tsx     # Dynamic memoji component
│   │   └── ScrollToTop.tsx      # Automatic scroll management
│   ├── layout/
│   │   ├── Footer.tsx           # Site footer
│   │   └── Navigation.tsx       # Main navigation
│   └── ...
├── helpers/
│   ├── assetPath.ts            # Asset path utility
│   └── ...
├── pages/
│   └── ...
└── styles/
    └── ...
```

## Key Technologies

- **React 19** with TypeScript
- **Vite 7** for fast development and building
- **React Router 7** for client-side routing
- **Bootstrap 5** with React Bootstrap components
- **SASS** for styling

## Deployment

This project is configured for deployment to static servers without Node.js support.
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Steps:

1. Run the appropriate build command
2. Upload `dist/` contents to your server
3. Ensure Apache mod_rewrite is enabled
4. The `.htaccess` file handles SPA routing automatically

## Development Notes

### Asset Paths

Use the `asset()` utility for all image references:

```typescript
import {asset} from '../../helpers/assetPath.ts';

<Image src = {asset("about/image.png"
)
}
/>
```

### Adding New Routes

Routes automatically get:

- Scroll to top behavior
- Dynamic memoji refresh
- Proper asset path resolution

### Environment Configuration

- `.env.production` - Root deployment settings
- `.env.staging` - Subdirectory deployment settings
- Add new `.env.*` files for additional environments

## Browser Support

This project targets modern browsers with ES2020+ support. For older browser support, additional polyfills may be
needed.

## Contributing

1. Follow the existing code style
2. Use TypeScript for all new components
3. Test both production and staging builds
4. Update documentation for new features

---

## Original Vite Template Info

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            // Other configs...

            // Remove tseslint.configs.recommended and replace with this
            ...tseslint.configs.recommendedTypeChecked,
            // Alternatively, use this for stricter rules
            ...tseslint.configs.strictTypeChecked,
            // Optionally, add this for stylistic rules
            ...tseslint.configs.stylisticTypeChecked,

            // Other configs...
        ],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
            // other options...
        },
    },
])
```

You can also
install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            // Other configs...
            // Enable lint rules for React
            reactX.configs['recommended-typescript'],
            // Enable lint rules for React DOM
            reactDom.configs.recommended,
        ],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
            // other options...
        },
    },
])
```
