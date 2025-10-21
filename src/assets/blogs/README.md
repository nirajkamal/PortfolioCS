# Blog Markdown System

This system allows you to write blog posts in markdown format and automatically generate React components for them.

## Directory Structure

```
src/
├── blogs/                          # Markdown blog files
│   ├── building-scalable-microservices.md
│   └── react-performance-optimization.md
├── pages/                          # Generated React components
│   ├── BuildingScalableMicroservicesPage.tsx
│   └── ReactPerformanceOptimizationPage.tsx
└── buildblog.py                    # Blog generation script
```

## Blog Markdown Format

Each blog post should follow this structure:

```markdown
---META---
title: Your Blog Post Title
category: FRONTEND | BACKEND | FULLSTACK | AI | etc.
date: Oct 15, 2025
readTime: 8 min read
author: Your Name
authorAvatar: ../assets/Niraj_Photo.png
heroImage: https://example.com/hero-image.jpg
tags: React, Performance, Optimization
slug: url-friendly-slug
---

---TOC---
- Section Title | section-id | 2
- Subsection | subsection-id | 3
---

## Your Content Here {#section-id}

Write your blog content using standard markdown...
```

### META Section

- **title**: Blog post title
- **category**: Category badge (appears at top)
- **date**: Publication date
- **readTime**: Estimated reading time
- **author**: Author name
- **authorAvatar**: Author profile image URL
- **heroImage**: Main blog image (optional)
- **tags**: Comma-separated tags
- **slug**: URL-friendly identifier (optional, defaults to filename)

### TOC Section

Table of contents with format: `- Title | id | level`
- **Title**: Display text
- **id**: HTML anchor ID
- **level**: Heading level (2=h2, 3=h3, etc.)

### Content Features

The markdown parser supports:

#### Headings with IDs
```markdown
## Section Title {#section-id}
### Subsection {#subsection-id}
```

#### Code Blocks
```markdown
\`\`\`javascript
const example = "code here";
\`\`\`
```

#### Images
```markdown
![Alt text](https://example.com/image.jpg)
```

#### Quotes
```markdown
> "This is a quote" - Author Name
```

#### Styled Text
```markdown
Use [orange](text) for orange highlighting
Regular [markdown links](https://example.com)
```

## Usage

1. **Create a new blog post**:
   ```bash
   # Create a new markdown file in blogs/
   touch src/blogs/my-new-post.md
   ```

2. **Write your content** using the format above

3. **Generate React components**:
   ```bash
   cd src
   python buildblog.py
   ```

4. **Generated files** will appear in `src/pages/`

## Generated Component Features

Each generated component includes:
- Responsive hero section with image and metadata
- Table of contents (desktop sidebar)
- Styled content with syntax highlighting
- Share buttons
- Back to blog navigation
- Header and Footer components

## Example Blog Files

See the example files in `src/blogs/`:
- `building-scalable-microservices.md`
- `react-performance-optimization.md`

## Integration

To use generated blog pages in your app:

```tsx
import { BuildingScalableMicroservicesPage } from './pages/BuildingScalableMicroservicesPage';

// In your router
<Route path="/blog/building-scalable-microservices" 
       element={<BuildingScalableMicroservicesPage />} />
```

## Development Workflow

1. Edit markdown files in `src/blogs/`
2. Run `python buildblog.py` to regenerate components
3. The generated pages will automatically reflect your changes
4. No need to manually edit the React components

This system keeps your content in easily editable markdown while providing the full power of React components for the presentation layer.