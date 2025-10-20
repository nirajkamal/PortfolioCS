# How to Add Projects to Portfolio

## 📋 Table of Contents
- [Overview](#overview)
- [Adding a Full Project Page](#adding-a-full-project-page)
- [Adding an External Project Card](#adding-an-external-project-card)
- [Understanding the System](#understanding-the-system)
- [Troubleshooting](#troubleshooting)

---

## Overview

This portfolio supports two types of projects:

1. **Full Project Pages**: Projects with detailed pages on your portfolio site
2. **External Project Cards**: Project cards that link to external URLs (GitHub, live demos, etc.)

**Source of Truth**: All projects are defined in `src/assets/projects/` directory.

---

## Adding a Full Project Page

### Step 1: Create Markdown File

Create a new `.md` file in `src/assets/projects/` directory:

```markdown
# Your Project Title

---META---
title: Your Project Title
category: WEB APP
date: October 2025
company: Your Company/Organization (optional)
location: City, State (optional)
type: Personal Project
heroImage: https://images.unsplash.com/photo-xxxx (required for full pages)
tags: ["React", "TypeScript", "API"]
github: https://github.com/username/repo (optional)
demo: https://your-demo.com (optional)
technologies: ["React", "Node.js", "MongoDB"]
team: ["Your Name", "Collaborator"] (optional)
duration: 3 months (optional)
slug: your-project-slug
---META---

---TOC---
- [Project Overview](#project-overview)
- [Technical Approach](#technical-approach)
- [Results](#results)
---TOC---

## Project Overview

Your detailed project description goes here...

## Technical Approach

Explain your technical implementation...

```python
# Code examples with syntax highlighting
def example():
    return "Hello World"
```

## Results

Share your results and impact...
```

### Step 2: Generate React Components

Run the build script to generate page components:

```bash
cd src
python build_projects.py
```

This will automatically:
- Generate `YourProjectSlugPage.tsx` in `src/pages/`
- Update `src/pages/ProjectIndex.ts` with your project metadata
- Make your project available in the projects page

### Step 3: Deploy

```bash
npm run deploy
```

---

## Adding an External Project Card

For projects you want to display as cards but link externally (without a detailed page):

### Step 1: Create Markdown File (Minimal Version)

Create a new `.md` file in `src/assets/projects/` with **minimal metadata**:

```markdown
# External Project Title

---META---
title: External Project Title
category: OPEN SOURCE
date: September 2025
heroImage: https://images.unsplash.com/photo-xxxx (optional, but recommended for card image)
tags: ["Python", "Docker", "Kubernetes"]
github: https://github.com/username/external-project
demo: https://external-demo.com
technologies: ["Python", "Docker", "Kubernetes"]
duration: Ongoing
slug: external-project-slug
external: true
description: Brief description of your external project that will appear on the card
---META---

## Project Overview

You can include minimal content here, but it won't be displayed since this is an external link.
For external projects, the card will link directly to `github` or `demo` URL instead of creating an internal page.
```

**Key Fields for External Cards:**
- `external: true` - Marks this as an external project
- `description` - Brief description for the card (2-3 sentences max)
- `github` or `demo` - At least one external link is required
- `heroImage` - Image for the card (optional but recommended)
- `tags` or `technologies` - Will be displayed as tech badges on the card

### Step 2: Generate Components

```bash
cd src
python build_projects.py
```

### Step 3: Update ProjectsPage.tsx (If Needed)

The `ProjectsPage.tsx` should automatically handle external projects. If you want to customize the behavior, modify the card component to check for `external: true`:

```typescript
// In ProjectsPage.tsx - The card should link externally if external flag is set
const projectLink = project.external 
  ? (project.demo || project.github || '#')
  : `#/project/${project.slug}`;
```

### Step 4: Deploy

```bash
npm run deploy
```

---

## Understanding the System

### File Structure

```
src/
├── assets/
│   └── projects/
│       ├── your-project.md          ← SOURCE OF TRUTH
│       ├── external-project.md      ← External project definition
│       └── README.md
├── pages/
│   ├── ProjectsPage.tsx             ← Main projects listing page
│   ├── ProjectIndex.ts              ← Auto-generated index (DO NOT EDIT)
│   ├── YourProjectPage.tsx          ← Auto-generated page (DO NOT EDIT)
│   └── ...
├── components/
│   └── shared/
│       └── ProjectCard.tsx          ← Reusable project card component
└── build_projects.py                ← Build script
```

### How It Works

1. **Markdown Files** (`src/assets/projects/*.md`): 
   - Single source of truth for all project data
   - Contains metadata between `---META---` markers
   - Contains content for full project pages

2. **Build Script** (`build_projects.py`):
   - Reads all `.md` files from `src/assets/projects/`
   - Parses metadata and content
   - Generates individual page components (e.g., `YourProjectPage.tsx`)
   - Generates `ProjectIndex.ts` with all project metadata

3. **ProjectIndex.ts** (Auto-generated):
   - Contains `PROJECT_INDEX` array with all project metadata
   - Contains `PROJECT_COMPONENTS` mapping for routing
   - **DO NOT EDIT MANUALLY** - will be overwritten by build script

4. **ProjectsPage.tsx**:
   - Reads projects from `PROJECT_INDEX`
   - Displays them in a grid layout
   - Handles filtering and pagination

### Metadata Fields

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Project title | "AI Task Manager" |
| `category` | ✅ | Project category | "WEB APP", "MACHINE LEARNING", "OPEN SOURCE" |
| `date` | ✅ | Completion date | "October 2025" |
| `slug` | ✅ | URL-friendly identifier | "ai-task-manager" |
| `tags` | ✅ | Technology tags (array) | `["React", "TypeScript"]` |
| `heroImage` | ⚠️ | Hero image URL | Unsplash URL or local path |
| `description` | ⚠️ | Brief description (for cards) | "Smart task management app" |
| `featuredOnHome` | ⚠️ | Show on home page | `true` or `false` (default: `false`) |
| `featuredOnProjects` | ⚠️ | Featured on projects page | `true` or `false` (default: `false`) |
| `displayOrder` | ⚠️ | Sort order (lower = higher priority) | `1`, `2`, `3`, etc. (default: `999`) |
| `github` | ❌ | GitHub repository URL | "https://github.com/user/repo" |
| `demo` | ❌ | Live demo URL | "https://demo.com" |
| `technologies` | ❌ | Tech stack (array) | `["React", "Node.js"]` |
| `company` | ❌ | Company/organization | "Google" |
| `location` | ❌ | Location | "San Francisco, CA" |
| `type` | ❌ | Project type | "Internship", "Personal Project" |
| `team` | ❌ | Team members (array) | `["John", "Jane"]` |
| `duration` | ❌ | Project duration | "3 months" |
| `external` | ❌ | External project flag | `true` or `false` |

✅ = Required | ⚠️ = Recommended | ❌ = Optional

### Display Control Fields

**`featuredOnHome`**: Set to `true` to display this project on the home page in the "Featured Work" section. Only projects with this flag set to `true` will appear on the home page.

**`featuredOnProjects`**: Set to `true` to make this project the featured/hero project at the top of the Projects page.

**`displayOrder`**: A number that determines the order in which projects appear (lower numbers appear first). For example:
- `displayOrder: 1` - Highest priority, appears first
- `displayOrder: 2` - Second priority
- `displayOrder: 999` - Default, lowest priority

**Example Usage**:
```markdown
---META---
title: My Best Project
# ... other fields ...
featuredOnHome: true
featuredOnProjects: true
displayOrder: 1
---META---
```

### Categories

Common categories you can use:
- `WEB APP`
- `FULL-STACK`
- `MACHINE LEARNING`
- `AUTONOMOUS SYSTEMS`
- `OPEN SOURCE`
- `MOBILE APP`
- `DATA SCIENCE`
- `BLOCKCHAIN`
- `GAME DEVELOPMENT`
- `CLOUD INFRASTRUCTURE`

You can create custom categories as needed.

---

## Troubleshooting

### Problem: Duplicate Projects Appearing

**Cause**: Hardcoded placeholder projects in `ProjectsPage.tsx`

**Solution**: Remove or comment out the `placeholderProjects` array in `ProjectsPage.tsx`:

```typescript
// Remove or comment these lines in ProjectsPage.tsx:
const placeholderProjects: Project[] = [
  // ... hardcoded projects
];

// Change this line:
const allProjects = [...realProjects, ...placeholderProjects];

// To this:
const allProjects = realProjects;
```

### Problem: Project Not Showing Up

**Checklist**:
1. ✅ Markdown file exists in `src/assets/projects/`
2. ✅ Metadata is between `---META---` markers
3. ✅ Required fields are present (title, category, date, slug, tags)
4. ✅ Ran `python build_projects.py`
5. ✅ Check `ProjectIndex.ts` was updated
6. ✅ No syntax errors in markdown file

**Debug**:
```bash
cd src
python build_projects.py
# Look for error messages
```

### Problem: Build Script Fails

**Common Issues**:
- Missing `---META---` markers
- Invalid JSON in array fields (tags, technologies, team)
- Special characters in metadata

**Solution**: Check your markdown syntax, especially:
```markdown
tags: ["React", "TypeScript"]  ← Correct
tags: [React, TypeScript]      ← Incorrect (missing quotes)
```

### Problem: Images Not Loading

**Solutions**:
1. Use Unsplash URLs for free stock images:
   ```
   https://images.unsplash.com/photo-xxxxx?w=1080
   ```

2. Or place images in `public/` directory and reference them:
   ```markdown
   heroImage: /images/my-project.jpg
   ```

3. Make sure images are publicly accessible (no localhost URLs)

### Problem: Routing Not Working

**Check**:
1. `slug` field matches the route you're using
2. `App.tsx` has routing configured for projects
3. Build script successfully generated the page component

---

## Quick Reference

### Add Full Project
```bash
# 1. Create file
touch src/assets/projects/my-project.md

# 2. Add metadata and content
# (Edit the file with your favorite editor)

# 3. Generate components
cd src && python build_projects.py

# 4. Deploy
npm run deploy
```

### Add External Project Card
```bash
# 1. Create file with minimal metadata
touch src/assets/projects/external-project.md

# 2. Add metadata (include external: true)
# (Edit the file)

# 3. Generate components
cd src && python build_projects.py

# 4. Deploy
npm run deploy
```

---

## Best Practices

1. **Consistent Naming**: Use kebab-case for slugs (e.g., `my-awesome-project`)
2. **Image Optimization**: Use compressed images (< 500KB)
3. **Description Length**: Keep descriptions under 150 characters for cards
4. **Tags**: Use 3-7 tags per project
5. **Categories**: Use existing categories when possible for better filtering
6. **External Links**: Always test links before deploying
7. **Version Control**: Commit markdown files to git before running build script

---

## Examples

### Example 1: Full Internal Project

`src/assets/projects/weather-dashboard.md`:
```markdown
# Weather Dashboard

---META---
title: Real-Time Weather Dashboard
category: WEB APP
date: October 2025
heroImage: https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1080
tags: ["React", "TypeScript", "OpenWeather API", "Chart.js"]
github: https://github.com/username/weather-dashboard
demo: https://weather-dash.example.com
technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"]
duration: 2 months
slug: weather-dashboard
description: A beautiful real-time weather dashboard with forecasts and historical data visualization
---META---

---TOC---
- [Overview](#overview)
- [Features](#features)
- [Technical Stack](#technical-stack)
---TOC---

## Overview
Built a responsive weather dashboard that displays real-time weather data...

## Features
- Real-time weather updates
- 7-day forecast
- Historical data charts
- Location search

## Technical Stack
Used React with TypeScript for type safety and modern development...
```

### Example 2: External Project Card

`src/assets/projects/open-source-contribution.md`:
```markdown
# Kubernetes Documentation

---META---
title: Kubernetes Documentation Contribution
category: OPEN SOURCE
date: September 2025
heroImage: https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=1080
tags: ["Kubernetes", "Documentation", "Open Source"]
github: https://github.com/kubernetes/website
technologies: ["Markdown", "Hugo", "Git"]
duration: Ongoing
slug: kubernetes-docs-contribution
external: true
description: Contributing to Kubernetes documentation, improving guides and examples for container orchestration
---META---

## Overview
This is an external contribution, so detailed content is not needed.
```

---

**Need Help?** Check the existing project files in `src/assets/projects/` for more examples!
