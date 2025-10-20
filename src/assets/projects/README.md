# Projects Directory

**📁 Source of Truth**: This directory contains all project markdown files for the portfolio.

## 🚀 Quick Start

### Add a New Project
1. Create `your-project.md` in this directory
2. Add metadata and content (see template below)
3. Run `python build_projects.py` from `src/` directory
4. Deploy with `npm run deploy`

### Complete Guide
See **[HOW-TO-ADD-PROJECTS.md](./HOW-TO-ADD-PROJECTS.md)** for:
- ✅ Adding full project pages with detailed content
- ✅ Adding external project cards (link to GitHub/demo only)
- ✅ Metadata field reference
- ✅ Troubleshooting
- ✅ Examples

## � Minimal Project Template

Each project should be in its own markdown file (`.md`) with the following structure:

```markdown
# Project Title

---META---
title: Your Project Title
category: WEB APP
date: October 2025
heroImage: https://images.unsplash.com/photo-xxx?w=1080
tags: ["React", "TypeScript", "API"]
github: https://github.com/username/repo
demo: https://demo-link.com
technologies: ["React", "Node.js", "MongoDB"]
duration: 3 months
slug: your-project-slug
description: Brief description for project card
---META---

---TOC---
- [Overview](#overview)
- [Technical Details](#technical-details)
---TOC---

## Overview
Your detailed project description...

## Technical Details
Implementation details...
```

## � Current Projects
- `adas-validation-simulation.md` - ADAS simulation project
- `ibm-foundation-models-contribution.md` - IBM FMS contribution
- `proprietary-llm-development.md` - LLM development project

## 🎨 Custom Markdown Formatting

- `[orange](text)` - Orange-colored text
- `[comment](text)` - Comment-style text (// style)
- `[link](url)` - Styled link
- `[orange-link](url)` - Orange-styled link
- Standard markdown for **bold**, *italic*, code blocks, etc.

## � Build Process

```bash
cd src
python build_projects.py  # Generates pages and index
```

This auto-generates:
- Individual page components (`ProjectNamePage.tsx`)
- `ProjectIndex.ts` with all metadata (DO NOT EDIT MANUALLY)

---

**Need more help?** Read [HOW-TO-ADD-PROJECTS.md](./HOW-TO-ADD-PROJECTS.md)