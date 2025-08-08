console.log('Testing HandleAssets with Vite-style explicit imports...');

// Simulate the explicit import approach
const assetMap = {
    'homepage/nickelodeon_splat.png': '/src/assets/homepage/nickelodeon_splat.png',
    'homepage/amazon_smile.png': '/src/assets/homepage/amazon_smile.png',
    'homepage/logo_dragon_7548.png': '/src/assets/homepage/logo_dragon_7548.png',
};

class HandleAssets {
    static getAsset(asset) {
        if (assetMap[asset]) {
            return assetMap[asset];
        }
        console.warn(`Asset not found in asset map: ${asset}. Using fallback path.`);
        return `/src/assets/${asset}`;
    }
}

// Test with the assets used in the application
console.log('Testing assets:');
console.log('Nickelodeon splat:', HandleAssets.getAsset('homepage/nickelodeon_splat.png'));
console.log('Amazon smile:', HandleAssets.getAsset('homepage/amazon_smile.png'));
console.log('Dragon logo:', HandleAssets.getAsset('homepage/logo_dragon_7548.png'));

// Test with non-existent asset
console.log('Non-existent asset:', HandleAssets.getAsset('homepage/nonexistent.png'));