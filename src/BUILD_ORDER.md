# Build Order and Component Management

## Important: Build Script Execution Order

To properly generate all components, **always run scripts in this exact order**:

### 1. First: Generate Blog Content
```bash
python buildblog.py
```
This script:
- Reads markdown files from `assets/blogs/`
- Generates individual blog post pages (e.g., `PytorchCertificationCoursePage.tsx`)
- Generates `BlogIndex.ts` with all blog metadata
- **Generates `Blogs.tsx` component** for the homepage

### 2. Second: Generate Project Content
```bash
python build_projects.py
```
This script:
- Reads markdown files from `assets/projects/`
- Generates individual project pages (e.g., `AdasValidationSimulationPage.tsx`)
- Generates `ProjectIndex.ts` with all project metadata
- **Generates `Projects.tsx` component** for the homepage

### 3. Third: Generate Other Components
```bash
python build.py
```
This script:
- Reads `home.md` for Hero and Timeline sections
- Reads `global.md` for Header and Footer
- **⚠️ SKIPS** generating `Blogs.tsx` (managed by buildblog.py)
- **⚠️ SKIPS** generating `Projects.tsx` (managed by build_projects.py)
- Generates:
  - `Hero.tsx`
  - `Timeline.tsx`
  - `Header.tsx`
  - `Footer.tsx`

## Why This Order Matters

1. **Blog Management**: The `Blogs.tsx` component displays actual blog posts from `BlogIndex.ts`, not dummy data from `home.md`
2. **Project Management**: The `Projects.tsx` component displays actual projects from `ProjectIndex.ts`, not dummy data from `home.md`
3. **Data Source**: 
   - Blog posts are sourced from markdown files in `assets/blogs/`
   - Projects are sourced from markdown files in `assets/projects/`
4. **Preventing Overwrites**: `build.py` now skips both `Blogs.tsx` and `Projects.tsx` to prevent overwriting the auto-generated content

## Adding New Blog Posts

1. Create a new markdown file in `src/assets/blogs/`
2. Follow the metadata format (see `README.md` in that folder)
3. Run `python buildblog.py`
4. The new post automatically appears in:
   - Blog listing page
   - Homepage (if marked as featured)
   - Individual blog post page

## Adding New Projects

1. Create a new markdown file in `src/assets/projects/`
2. Follow the metadata format (see `HOW-TO-ADD-PROJECTS.md` in that folder)
3. Run `python build_projects.py`
4. The new project automatically appears in:
   - Projects listing page
   - Homepage (if marked as featuredOnHome)
   - Individual project page

## Adding New Timeline Items or Updating Hero

1. Edit `src/home.md`
2. Run `python build.py`
3. Changes appear on homepage

## Quick Command for Full Rebuild

```bash
cd src
python buildblog.py && python build_projects.py && python build.py
```

This ensures all components are properly generated in the correct order.
