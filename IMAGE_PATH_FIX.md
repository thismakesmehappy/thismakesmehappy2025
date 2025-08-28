# Image Path Fix Guide - COMPLETED ✅

## Problem (SOLVED)

Images were working inconsistently across different environments:

- ✅ Local development (root route): `"about/image.png"` works
- ❌ Local development (nested routes): Need `"/about/image.png"`
- ✅ Staging (root route): `"about/image.png"` works
- ❌ Staging (nested routes): Neither `"about/image.png"` nor `"/about/image.png"` work

## Solution (IMPLEMENTED)

Use the `asset()` utility function for all image paths.

### Import the utility:

```typescript
import { asset } from '../../helpers/assetPath.ts';
```

### Replace image src attributes:

```typescript
// Before (inconsistent):
src="about/image.png"
src="/about/image.png"

// After (works everywhere):
src={asset("about/image.png")}
```

## How it works:

- **Production**: `asset("about/image.png")` → `"/about/image.png"`
- **Staging**: `asset("about/image.png")` → `"/react/about/image.png"`
- **Local dev**: Works consistently on all routes

## Files Updated ✅

### Already Updated:

- ✅ `src/components/home/HomeHero.tsx`
- ✅ `src/components/home/WhereAndWho.tsx`
- ✅ `src/helpers/assetPath.ts` (utility created)

### Status: COMPLETE

All main image references have been updated to use the `asset()` utility.

### Finding Remaining References:

If you add new images, use this command to find any that don't use the asset utility:

```bash
find src -name "*.tsx" -o -name "*.ts" | xargs grep -n 'src="[^h]' | grep -v asset
```

### Quick Fix Command:

For simple cases, you can use sed to replace patterns:

```bash
# Replace src="path/image.ext" with src={asset("path/image.ext")}
sed -i '' 's/src="\([^"]*\.[a-z]*\)"/src={asset("\1")}/g' filename.tsx
```

## Testing Results ✅:

1. ✅ Build and test locally: `npm run dev`
2. ✅ Test nested routes (like `/projects/`)
3. ✅ Build and test staging: `npm run build:staging`
4. ✅ Upload to staging and test all routes

## Alternative: Vite Import Method

For frequently used images, you can also import them directly:

```typescript
import heroImage from '/about/bernardo_square.png';

// Then use:
<Image src={heroImage} />
```

This method gets the images processed by Vite's asset pipeline and generates optimized paths automatically.

---

## Status: ✅ COMPLETED

All image path issues have been resolved. The `asset()` utility ensures consistent image loading across all environments
and routes.
