# Development Page Routing Guide

## Overview

You can use special markdown tags in your project and blog markdown files to control how links are routed. The `[dev]` tag allows you to route any link through the "Still in Development" page instead of opening it directly.

## Syntax

### [dev] Tag
Routes a link through the development page:

```markdown
[dev](https://github.com/example/repo)
```

This will:
1. Take the user to the development page
2. Pass the URL as a parameter
3. Display buttons to open the actual resource

### Available Tags

| Tag | Syntax | Result |
|-----|--------|--------|
| dev | `[dev](url)` | Routes through development page |
| orange | `[orange](text)` | Orange colored text |
| comment | `[comment](text)` | Code comment style |
| link | `[link](url)` | Regular external link |
| orange-link | `[orange-link](url)` | Orange colored external link |

## Examples

### Example 1: Route GitHub Link
```markdown
Check out my code: [dev](https://github.com/example/my-project)
```

### Example 2: Route Demo Link
```markdown
Try the demo: [dev](https://my-demo.example.com)
```

### Example 3: Combine with Other Formatting
```markdown
This is **bold** and this [dev](https://example.com) routes to development page.
```

## How It Works

When you use `[dev](url)`:

1. The markdown parser detects the special tag
2. Instead of creating a direct link, it creates a link to: `#/development?demo={url}`
3. On the development page, this parameter is displayed as a button
4. Users can click to open the actual resource in a new tab

## Notes

- The development page will only show buttons for resources you pass to it
- The URL must be valid and properly encoded
- You can use multiple `[dev]` tags in the same content
- `[dev]` tags are processed before regular markdown links, so they won't interfere
