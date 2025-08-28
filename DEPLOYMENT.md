# Deployment Instructions

This React application is configured for flexible deployment to both production and staging environments with full SPA
routing support, automatic scroll management, and consistent asset paths.

## Build Commands

### For Production (work.thismakesmehappy.co)

```bash
npm run build:production
```

This will:

1. Build the React app with base path `/`
2. Copy `.htaccess.production` to `dist/.htaccess`
3. Configure all assets for root deployment

### For Staging (work.thismakesmehappy.co/react/)

```bash
npm run build:staging
```

This will:

1. Build the React app with base path `/react/`
2. Copy `.htaccess.staging` to `dist/.htaccess`
3. Configure all assets for subdirectory deployment

## Deployment Steps

### Production Deployment

1. Run `npm run build:production`
2. Upload all files from `dist/` folder to your server root
3. The correct `.htaccess` file is automatically included

### Staging Deployment

1. Run `npm run build:staging`
2. Create a `react/` folder on your server
3. Upload all files from `dist/` folder to the `react/` folder
4. The correct `.htaccess` file is automatically included

## Features Included

### ✅ Clean URLs & SPA Routing

- Uses BrowserRouter for clean URLs (no hash fragments)
- Apache `.htaccess` handles SPA fallback routing
- Direct URL access works (e.g., `/projects/frequency-group-apis`)

### ✅ Automatic Scroll Management

- New pages automatically scroll to top
- Smooth navigation experience
- Works with all navigation methods

### ✅ Consistent Asset Paths

- `asset()` utility function handles image paths
- Works across all environments and routes
- No manual path adjustments needed

### ✅ Dynamic Content

- RandomMemoji components re-render on route changes
- Fresh content for each page visit

## File Structure After Deployment

### Production

```
work.thismakesmehappy.co/
├── index.html
├── .htaccess (production version)
└── assets/
    ├── index-[hash].js
    ├── index-[hash].css
    └── [other assets]
```

### Staging

```
work.thismakesmehappy.co/
└── react/
    ├── index.html
    ├── .htaccess (staging version)
    └── assets/
        ├── index-[hash].js
        ├── index-[hash].css
        └── [other assets]
```

## .htaccess File Management

### How It Works

- `.htaccess.production` - Used for root deployments
- `.htaccess.staging` - Used for subdirectory deployments
- Build scripts automatically copy the correct version to `dist/.htaccess`
- **Never manually edit `dist/.htaccess`** - it gets overwritten on each build

### Creating .htaccess for New Directories

If you need to deploy to a different subdirectory (e.g., `/demo/`), create a new `.htaccess` file:

#### Template for Subdirectory Deployment

```apache
# Apache configuration for React SPA - SUBDIRECTORY VERSION
# Replace "SUBDIRECTORY_NAME" with your actual subdirectory name

# Enable URL rewriting
RewriteEngine On

# Set the base for relative rewrites
RewriteBase /SUBDIRECTORY_NAME/

# Handle client-side routing for React Router in subdirectory
# If the request is for a file or directory that exists, serve it directly
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# For subdirectory deployment: redirect to index.html within this directory
RewriteRule . index.html [L]

# Security headers
<IfModule mod_headers.c>
    # Enable HSTS
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    
    # Prevent MIME type sniffing
    Header always set X-Content-Type-Options "nosniff"
    
    # Enable XSS protection
    Header always set X-XSS-Protection "1; mode=block"
    
    # Prevent clickjacking
    Header always set X-Frame-Options "SAMEORIGIN"
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    
    # Cache CSS and JS files for 1 year
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType text/javascript "access plus 1 year"
    
    # Cache images for 1 month
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
    ExpiresByType image/webp "access plus 1 month"
    
    # Cache fonts for 1 year
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType application/font-woff "access plus 1 year"
    ExpiresByType application/font-woff2 "access plus 1 year"
    
    # Don't cache HTML files
    ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Compress files for better performance
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

#### Steps to Create New Deployment Target

1. Copy the template above to a new file (e.g., `.htaccess.demo`)
2. Replace `SUBDIRECTORY_NAME` with your target directory name
3. Create a new environment file (e.g., `.env.demo`) with `VITE_BASE_PATH=/demo/`
4. Add a new build script to `package.json`:
   ```json
   "build:demo": "tsc -b && vite build --mode demo && cp .htaccess.demo dist/.htaccess"
   ```

## Asset Path Management

### Using the asset() Utility

For consistent image paths across all environments:

```typescript
import { asset } from '../../helpers/assetPath.ts';

// Use in components:
<Image src={asset("about/image.png")} />
```

### How It Works

- **Production**: `asset("about/image.png")` → `"/about/image.png"`
- **Staging**: `asset("about/image.png")` → `"/react/about/image.png"`
- **Local dev**: Works consistently on all routes

## Testing

### Local Testing

```bash
# Test production build
npm run build:production
python3 -m http.server 8000 --directory dist

# Test staging build
npm run build:staging
mkdir -p test-server/react
cp -r dist/* test-server/react/
python3 -m http.server 8001 --directory test-server
# Then visit http://localhost:8001/react/
```

### Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation between routes works
- [ ] Direct URL access works (e.g., `/projects/`)
- [ ] Images load on all routes
- [ ] New pages scroll to top automatically
- [ ] RandomMemoji changes on route navigation
- [ ] Browser back/forward buttons work

## Troubleshooting

### Routes Return 404

- Ensure `.htaccess` file is uploaded and Apache mod_rewrite is enabled
- Check that the RewriteRule points to the correct path
- Verify Apache has proper permissions to read `.htaccess`

### Assets Not Loading

- Verify the base path in environment files matches your deployment structure
- Check that all files in `dist/assets/` are uploaded
- Ensure you're using the `asset()` utility for image paths

### Clean URLs Not Working

- Confirm Apache has mod_rewrite enabled
- Verify `.htaccess` file permissions (should be readable by web server)
- Check Apache error logs for rewrite issues

### Scroll Not Working

- Verify `ScrollToTop` component is imported and placed correctly in App.tsx
- Check browser console for JavaScript errors

### RandomMemoji Not Changing

- Ensure components have `key={location.pathname}` prop
- Verify `useLocation()` is imported from react-router-dom

### Wrong .htaccess File

- Always use the build scripts (`npm run build:production` or `npm run build:staging`)
- Never manually copy `.htaccess` files - the build scripts handle this automatically
- Check that the correct `.htaccess.*` file exists in the project root
