# Deployment Guide

## Complete Build & Deploy Process

**Important**: Always run deployment from the **root directory**, not from `src/`!

### Step 1: Generate Components (from `src/` directory)
```bash
cd src
python buildblog.py
python build_projects.py  
python build.py
cd ..
```

### Step 2: Deploy (from **root** directory)
```bash
npm run deploy
```

This will:
1. Run `copy-images` script (copies blog images to `public/blogs/`)
2. Run `vite build` (builds the site, copies `public/` to `dist/`)
3. Deploy `dist/` folder to GitHub Pages

### Quick Deploy Command (from root directory)
```bash
# First, generate components
cd src && python buildblog.py && python build_projects.py && python build.py && cd ..

# Then deploy
npm run deploy
```

### Troubleshooting

**Images not showing on GitHub Pages?**
- Make sure you deployed from the **root directory** (not `src/`)
- Check that `public/blogs/` folder exists with your images
- Verify image paths in markdown use `/blogs/...` not `/src/assets/blogs/...`

**Deployment fails?**
- Run `npm run build` first to test the build
- Check for any build errors
- Make sure `dist/` folder is created
