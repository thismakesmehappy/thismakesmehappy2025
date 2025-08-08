import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Testing fixed HandleAssets.getAsset method...');

// Simulate the fixed implementation
class HandleAssets {
    static getAsset(asset) {
        // This is the fixed implementation using relative path
        return new URL(`../assets/${asset}`, import.meta.url).href;
    }
}

// Test with the same asset used in Home.tsx
const result = HandleAssets.getAsset('homepage/nickelodeon_splat.png');
console.log('Fixed result:', result);

// Check if the path resolves to an actual file
const expectedPath = join(__dirname, 'src', 'assets', 'homepage', 'nickelodeon_splat.png');
console.log('Expected file path:', expectedPath);

// Test with different assets
console.log('Testing other assets:');
console.log('Amazon smile:', HandleAssets.getAsset('homepage/amazon_smile.png'));
console.log('Dragon logo:', HandleAssets.getAsset('homepage/logo_dragon_7548.png'));