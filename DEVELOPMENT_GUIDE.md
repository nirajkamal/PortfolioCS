# Portfolio Development Guide

## Overview
This portfolio website is built with Vite + React + TypeScript and features a custom markdown-based content management system for both blogs and projects.

## Development Environment Setup

### Prerequisites
- Node.js (v18 or higher)
- Python 3.x
- Git

### Getting Started
1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Opens on http://localhost:3000 (or next available port)
   - Hot reload enabled for all changes

3. **Build for Production**
   ```bash
   npm run build
   ```

## Content Management System

### Blog System
- **Location**: `src/blogs/`
- **Generator**: `src/buildblog.py`
- **Output**: Generated React components in `src/pages/`

#### Creating a New Blog Post
1. Create a new `.md` file in `src/blogs/`
2. Use the blog template format:
   ```markdown
   # Blog Title
   
   ---META---
   title: Your Blog Title
   date: YYYY-MM-DD
   category: CATEGORY_NAME
   tags: ["tag1", "tag2"]
   author: Your Name
   readTime: X min read
   slug: blog-url-slug
   ---META---
   
   ---TOC---
   - [Section 1](#section-1)
   - [Section 2](#section-2)
   ---TOC---
   
   Your blog content here...
   ```

3. Run the blog generator:
   ```bash
   cd src && python buildblog.py
   ```

### Project System  
- **Location**: `src/projects/`
- **Generator**: `src/build_projects.py`
- **Output**: Generated React components in `src/pages/`
- **Layout**: Consistent with blog pages - boxed hero section with left-side table of contents

#### Creating a New Project
1. Create a new `.md` file in `src/projects/`
2. Use the project template format:
   ```markdown
   # Project Title
   
   ---META---
   title: Your Project Title
   category: PROJECT_CATEGORY
   date: YYYY-MM-DD
   company: Company Name
   location: City, State
   type: Project Type
   heroImage: https://image-url.com
   tags: ["tech1", "tech2"]
   github: https://github.com/repo
   demo: https://demo-url.com
   technologies: ["React", "Python"]
   team: ["Member 1", "Member 2"]
   duration: X months
   slug: project-url-slug
   ---META---
   
   ---TOC---
   - [Overview](#overview)
   - [Technical Details](#technical-details)
   ---TOC---
   
   Your project content here...
   ```

3. Run the project generator:
   ```bash
   cd src && python build_projects.py
   ```

#### Project Page Features
- **Boxed Hero Section**: Matches blog layout with image/content split
- **Persistent TOC**: Left sidebar table of contents on desktop  
- **Technology Tags**: Visual display of tech stack
- **Action Buttons**: Links to GitHub, demo, etc. with consistent styling
- **Share Section**: Social sharing buttons at bottom
- **Responsive Design**: Mobile-friendly layout that adapts to screen size

## Styling & Design

### Theme Colors
- **Primary Background**: `#FBF7ED` (cream/tetro aesthetic)
- **Accent Color**: `#ff6b3d` (orange)
- **Text Colors**: Standard Tailwind grays
- **Color Management**: Centralized in `src/styles/globals.css`

### Special Markdown Syntax
- **Orange Text**: `[orange](text)` - renders text in orange color
- **Comments**: `//comment: text` - for build script comments
- **Titles**: `//title: text` - for special title handling

### Component Structure
- **UI Components**: `src/components/ui/` (shadcn/ui components)
- **Page Components**: `src/components/` (main page sections)
- **Shared Components**: `src/components/shared/` (reusable components)
- **Blog Components**: `src/components/blog/` (blog-specific components)

## Routing

### Hash-based Routing
The application uses hash-based routing for GitHub Pages compatibility:

- **Home**: `#/` or `#/home`
- **Projects**: `#/projects`
- **Individual Project**: `#/project/[slug]`
- **Blogs**: `#/blogs`
- **Individual Blog**: `#/blog/[slug]`

### Adding New Routes
1. Update `App.tsx` with new route patterns
2. Ensure proper component imports and lazy loading
3. Test navigation thoroughly

## Build Scripts

### Main Component Builder (`build.py`)
- Generates header and footer components from markdown
- Updates main portfolio sections

### Blog Builder (`buildblog.py`)
- Parses blog markdown files
- Generates React components for each blog
- Creates `BlogIndex.ts` for routing
- Supports TOC generation and metadata parsing

### Project Builder (`build_projects.py`)
- Parses project markdown files  
- Generates React components for each project
- Creates `ProjectIndex.ts` for routing
- Supports comprehensive metadata and TOC

## Development Workflow

### Daily Development
1. Start dev server: `npm run dev`
2. Make changes to components, styles, or content
3. Hot reload will update automatically
4. For new blogs/projects, run appropriate build script

### Content Updates
1. **New Blog**: Add markdown → run `buildblog.py` → test
2. **New Project**: Add markdown → run `build_projects.py` → test
3. **Design Changes**: Update components directly
4. **Global Styles**: Modify `src/styles/globals.css`

### Before Deployment
1. Run all build scripts to ensure latest content
2. Test all routes and navigation
3. Run `npm run build` to create production build
4. Test production build locally

## Troubleshooting

### Common Issues
- **Port conflicts**: Dev server will auto-select available port
- **Build script errors**: Check markdown format and META sections
- **Route not found**: Verify component is generated and indexed
- **Styling issues**: Check Tailwind classes and globals.css

### Development Tips
- Use browser dev tools for debugging
- Check console for any React errors
- Verify file paths are absolute when using tools
- Keep markdown META sections properly formatted

## Project Structure
```
src/
├── blogs/                  # Blog markdown files
├── projects/              # Project markdown files  
├── pages/                 # Generated React components
├── components/            # React components
│   ├── ui/               # UI library components
│   ├── shared/           # Reusable components
│   └── blog/             # Blog-specific components
├── styles/               # Global styles
├── assets/               # Static assets
├── build.py              # Main component builder
├── buildblog.py          # Blog generator
└── build_projects.py     # Project generator
```

This system provides a powerful, maintainable way to manage portfolio content while keeping the development experience smooth and efficient.