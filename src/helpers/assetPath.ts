/**
 * Utility function to generate correct asset paths for all environments
 * Works consistently in:
 * - Local development (root and nested routes)
 * - Production deployment (root)
 * - Staging deployment (subdirectory)
 */
export function getAssetPath(relativePath: string): string {
  // Get the base URL from Vite's configuration
  const baseUrl = import.meta.env.BASE_URL;
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  
  // Combine base URL with the asset path
  // BASE_URL already includes trailing slash, so we don't need to add one
  return `${baseUrl}${cleanPath}`;
}

// Alternative shorter function name for convenience
export const asset = getAssetPath;
