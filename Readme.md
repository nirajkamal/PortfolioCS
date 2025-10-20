
  # Niraj Kamal Portfolio

This is my personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🌐 Live Website

The portfolio is published at: [nirajkamal.github.io](https://nirajkamal.github.io)

## 📋 Project Structure

- `src/` - Source code for the React application
  - `components/` - Reusable React components
  - `pages/` - Page components
  - `assets/` - Static assets (images, markdown files, etc.)
    - `blogs/` - Blog content in markdown format
    - `projects/` - Project content in markdown format
  - `build.py` - Python script to generate components from markdown files
  - `build_blogs.py` - Python script to generate blog components
  - `build_projects.py` - Python script to generate project components
  - `global.md` - Configuration for header and footer

## 🚀 Deployment to GitHub Pages

### Initial Setup

1. Install required dependencies:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Update `package.json` with homepage and deployment scripts:
   ```json
   "homepage": "https://nirajkamal.github.io",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Configure Vite for GitHub Pages in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/',
     build: {
       outDir: 'dist',
     },
     // other configuration...
   });
   ```

### Publishing Updates

To publish updates to GitHub Pages:

1. Make your changes to the codebase
2. Generate components from markdown (if needed):
   ```bash
   python build.py
   python build_blogs.py
   python build_projects.py
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

This will build the project and publish it to the `gh-pages` branch, which GitHub Pages will serve from.

## 🛠️ Development

To start the development server:

```bash
npm run dev
```

## 🏗️ Building

To build the project locally:

```bash
npm run build
```

## 📝 Updating Content

- **Header and Footer**: Edit `src/global.md`
- **Homepage Sections**: Edit `src/home.md`
- **Blog Posts**: Add/edit files in `src/assets/blogs/`
- **Projects**: Add/edit files in `src/assets/projects/`
- **Resume**: Update the PDF file at `src/assets/resume.pdf`

See the README files in the respective directories for more detailed instructions.
  