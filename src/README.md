# Portfolio Generator

A gridded portfolio website with markdown-based content management.

## Quick Start

1. Edit `home.md` with your content
2. Run `python build.py` to generate React components
3. Your portfolio is ready!

## Markdown Format

### Hero Section
```markdown
---HERO---
name: Your Name
role: Your Role
bio: Your bio description
photo: image_url
companies:
- Company Name | logo_url
- Another Company | logo_url
---
```

### Experience/Timeline Section
```markdown
## Experience

### Job Title
type: work
org: Company Name
period: 2020 - Present
Your job description here.

### Degree Name
type: education
org: University Name
period: 2016 - 2020
Education description here.
```

### Blog Section
```markdown
## Blog

### Article Title
date: Oct 15, 2025
readTime: 8 min
category: CATEGORY
image: image_url
Article description/excerpt here.
```

### Projects Section
```markdown
## Projects

### Project Name
tags: React, Node.js, TypeScript
image: image_url
github: github_url
demo: demo_url
Project description here.
```

## Features

- ✨ Grid-based design with borders
- 📱 Responsive mobile navigation
- 🎨 Violet Sans & JetBrains Mono fonts
- 🔄 Markdown to React component generation
- 🖼️ Grayscale images with color on hover
- 📐 Technical, developer-focused aesthetic

## Customization

Edit `home.md` and run `python build.py` to regenerate components. The script will:
- Parse your markdown content
- Generate Hero.tsx, Timeline.tsx, Blogs.tsx, Projects.tsx
- Maintain the gridded design system

## Tech Stack

- React + TypeScript
- Tailwind CSS v4
- Lucide React (icons)
- Python (build script)
