#!/usr/bin/env node

/**
 * Copy Blog Images to Public Folder
 * 
 * This script copies all images from src/assets/blogs/ to public/blogs/
 * so they're accessible in production builds on GitHub Pages.
 * 
 * Run this before building: npm run copy-images
 */

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'src', 'assets', 'blogs');
const targetDir = path.join(__dirname, '..', 'public', 'blogs');

/**
 * Recursively copy directory contents
 */
function copyDirectory(source, target) {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
    console.log(`✓ Created directory: ${path.relative(process.cwd(), target)}`);
  }

  // Read source directory
  const items = fs.readdirSync(source);

  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(sourcePath, targetPath);
    } else if (stat.isFile()) {
      // Only copy image files
      const ext = path.extname(item).toLowerCase();
      const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
      
      if (imageExtensions.includes(ext)) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`✓ Copied: ${path.relative(sourceDir, sourcePath)} → ${path.relative(process.cwd(), targetPath)}`);
      }
    }
  });
}

/**
 * Main execution
 */
function main() {
  console.log('\n🖼️  Copying blog images to public folder...\n');

  try {
    // Check if source directory exists
    if (!fs.existsSync(sourceDir)) {
      console.error(`❌ Error: Source directory not found: ${sourceDir}`);
      process.exit(1);
    }

    // Copy all images
    copyDirectory(sourceDir, targetDir);

    console.log('\n✅ Blog images copied successfully!\n');
  } catch (error) {
    console.error('\n❌ Error copying images:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
