# Projects Content Management

This directory contains the markdown files for projects displayed on the portfolio site.

## 📁 File Structure

Each project should be in its own markdown file (`.md`) with the following structure:

```markdown
---META---
title: AI-Powered Task Manager
category: FULLSTACK
date: October 2025
image: /path/to/image.jpg
description: Smart task management application with AI-powered prioritization
github: https://github.com/username/repo
demo: https://demo-link.com
tags: React, TypeScript, OpenAI, Next.js
featured: true
---

## Project Overview

Detailed description of the project...

### Key Features

- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

### Technologies Used

- React
- TypeScript
- OpenAI API
- Next.js

### Screenshots

![Screenshot 1](/path/to/screenshot1.jpg)
![Screenshot 2](/path/to/screenshot2.jpg)

### Development Process

Information about how you built the project...

### Challenges and Solutions

Discussion of challenges faced and how they were solved...
```

## 🔄 Adding or Updating Projects

1. **Create a new markdown file** in this directory with a descriptive filename (e.g., `ai-task-manager.md`)

2. **Add the required frontmatter** between the `---META---` markers:
   - `title` - The title of your project
   - `category` - The category of the project (e.g., FULLSTACK, FRONTEND, etc.)
   - `date` - The completion date
   - `image` - Path to the featured image
   - `description` - A brief summary of the project
   - `github` - GitHub repository link (if applicable)
   - `demo` - Live demo link (if applicable)
   - `tags` - Comma-separated list of technologies used
   - `featured` - Set to `true` to feature on homepage (optional)

3. **Write your project content** using markdown syntax

4. **Generate the project components** by running:
   ```bash
   python src/build_projects.py
   ```

5. **Deploy the updated site**:
   ```bash
   npm run deploy
   ```

## 📝 Markdown Tips

- Use `#` for main heading, `##` for section headings, and `###` for subsection headings
- Format code with triple backticks and language identifier: ```javascript
- Add images with `![alt text](path/to/image.jpg)`
- Create links with `[link text](https://example.com)`
- Use `*italic*` for italic text and `**bold**` for bold text
- Create lists with `- ` or `1. ` for numbered lists

## 🖼️ Images

- Place project images in this directory or in a subdirectory
- Use relative paths in your markdown: `![Image description](./image-name.jpg)`
- For optimal performance, compress images before adding them
- Recommended image dimensions: 1200×630 pixels for featured images

## 🧩 Advanced Features

You can also use custom formatting in your markdown:

- `[orange](text)` - Orange-colored text
- `[comment](text)` - Comment-style text
- `[link](url)` - Regular link
- `[orange-link](url)` - Orange-styled link