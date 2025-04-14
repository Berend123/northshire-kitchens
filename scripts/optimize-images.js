const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images';
const outputDir = 'public/images/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
);

async function optimizeImage(file) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    try {
        await sharp(inputPath)
            .webp({ quality: 80 }) // Adjust quality as needed (0-100)
            .resize(1200, null, { // Max width 1200px, maintain aspect ratio
                withoutEnlargement: true,
                fit: 'inside'
            })
            .toFile(outputPath);
        
        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(2);
        
        console.log(`✅ ${file}:`);
        console.log(`   Original: ${(inputStats.size / 1024 / 1024).toFixed(2)}MB`);
        console.log(`   Optimized: ${(outputStats.size / 1024 / 1024).toFixed(2)}MB`);
        console.log(`   Saved: ${savings}%\n`);
    } catch (error) {
        console.error(`❌ Error processing ${file}:`, error);
    }
}

async function processImages() {
    console.log('🎨 Starting image optimization...\n');
    
    for (const file of imageFiles) {
        await optimizeImage(file);
    }
    
    console.log('✨ Image optimization complete!');
}

processImages(); 