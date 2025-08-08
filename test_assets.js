console.log('Testing HandleAssets.getAsset method...');

// Simulate the current implementation
class HandleAssets {
    static getAsset(asset) {
        // This is the current problematic implementation
        return new URL(`/assets/${asset}`, import.meta.url).href;
    }
}

// Test with the same asset used in Home.tsx
const result = HandleAssets.getAsset('homepage/nickelodeon_splat.png');
console.log('Current result:', result);
console.log('Expected: A proper URL to the asset');