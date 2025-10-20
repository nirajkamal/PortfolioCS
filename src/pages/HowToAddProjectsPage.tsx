import { ArrowLeft, Calendar, Clock, Github, ExternalLink, MapPin, Users, Code } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TableOfContents } from "../components/blog/TableOfContents";
import { BlogContent, BlogContentBlock } from "../components/blog/BlogContent";

export function HowToAddProjectsPage() {
  // Project data generated from markdown
  const projectData = {
    "title": "Your Project Title",
    "category": "WEB APP",
    "date": "October 2025",
    "company": "Your Company/Organization (optional)",
    "location": "City, State (optional)",
    "type": "Personal Project",
    "heroImage": "https://images.unsplash.com/photo-xxxx (required for full pages)",
    "tags": [
        "React",
        "TypeScript",
        "API"
    ],
    "github": "https://github.com/username/repo (optional)",
    "demo": "https://your-demo.com (optional)",
    "technologies": [
        "React",
        "Node.js",
        "MongoDB"
    ],
    "team": "[\"Your Name\", \"Collaborator\"] (optional)",
    "duration": "3 months (optional)",
    "slug": "your-project-slug"
};

  const tocItems = [
        {
                "title": "Project Overview",
                "id": "project-overview",
                "level": 2
        },
        {
                "title": "Technical Approach",
                "id": "technical-approach",
                "level": 2
        },
        {
                "title": "Results",
                "id": "results",
                "level": 2
        }
];

  const contentBlocks: BlogContentBlock[] = [
        {
                "type": "heading",
                "content": "Project Overview",
                "id": "project-overview"
        },
        {
                "type": "paragraph",
                "content": "Your detailed project description goes here..."
        },
        {
                "type": "heading",
                "content": "Technical Approach",
                "id": "technical-approach"
        },
        {
                "type": "paragraph",
                "content": "Explain your technical implementation..."
        },
        {
                "type": "code",
                "content": "# Code examples with syntax highlighting\ndef example():\n    return \"Hello World\"",
                "language": "python"
        },
        {
                "type": "heading",
                "content": "Results",
                "id": "results"
        },
        {
                "type": "paragraph",
                "content": "Share your results and impact..."
        },
        {
                "type": "code",
                "content": "\n### Step 2: Generate React Components\n\nRun the build script to generate page components:\n",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "cd src python build_projects.py"
        },
        {
                "type": "code",
                "content": "\nThis will automatically:\n- Generate `YourProjectSlugPage.tsx` in `src/pages/`\n- Update `src/pages/ProjectIndex.ts` with your project metadata\n- Make your project available in the projects page\n\n### Step 3: Deploy\n",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "npm run deploy"
        },
        {
                "type": "code",
                "content": "\n---\n\n## Adding an External Project Card\n\nFor projects you want to display as cards but link externally (without a detailed page):\n\n### Step 1: Create Markdown File (Minimal Version)\n\nCreate a new `.md` file in `src/assets/projects/` with **minimal metadata**:\n",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "# External Project Title"
        },
        {
                "type": "paragraph",
                "content": "--- title: External Project Title category: OPEN SOURCE date: September 2025 heroImage: https://images.unsplash.com/photo-xxxx (optional, but recommended for card image) tags: [\"Python\", \"Docker\", \"Kubernetes\"] github: https://github.com/username/external-project demo: https://external-demo.com technologies: [\"Python\", \"Docker\", \"Kubernetes\"] duration: Ongoing slug: external-project-slug external: true description: Brief description of your external project that will appear on the card ---"
        },
        {
                "type": "heading",
                "content": "Project Overview",
                "id": "project-overview"
        },
        {
                "type": "paragraph",
                "content": "You can include minimal content here, but it won't be displayed since this is an external link. For external projects, the card will link directly to `github` or `demo` URL instead of creating an internal page."
        },
        {
                "type": "code",
                "content": "\n**Key Fields for External Cards:**\n- `external: true` - Marks this as an external project\n- `description` - Brief description for the card (2-3 sentences max)\n- `github` or `demo` - At least one external link is required\n- `heroImage` - Image for the card (optional but recommended)\n- `tags` or `technologies` - Will be displayed as tech badges on the card\n\n### Step 2: Generate Components\n",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "cd src python build_projects.py"
        },
        {
                "type": "code",
                "content": "\n### Step 3: Update ProjectsPage.tsx (If Needed)\n\nThe `ProjectsPage.tsx` should automatically handle external projects. If you want to customize the behavior, modify the card component to check for `external: true`:\n",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "// In ProjectsPage.tsx - The card should link externally if external flag is set const projectLink = project.external ? (project.demo || project.github || '#') : `#/project/${project.slug}`;"
        },
        {
                "type": "code",
                "content": "\n### Step 4: Deploy\n",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "npm run deploy"
        },
        {
                "type": "code",
                "content": "\n---\n\n## Understanding the System\n\n### File Structure\n",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "src/ \u251c\u2500\u2500 assets/ \u2502   \u2514\u2500\u2500 projects/ \u2502       \u251c\u2500\u2500 your-project.md          \u2190 SOURCE OF TRUTH \u2502       \u251c\u2500\u2500 external-project.md      \u2190 External project definition \u2502       \u2514\u2500\u2500 README.md \u251c\u2500\u2500 pages/ \u2502   \u251c\u2500\u2500 ProjectsPage.tsx             \u2190 Main projects listing page \u2502   \u251c\u2500\u2500 ProjectIndex.ts              \u2190 Auto-generated index (DO NOT EDIT) \u2502   \u251c\u2500\u2500 YourProjectPage.tsx          \u2190 Auto-generated page (DO NOT EDIT) \u2502   \u2514\u2500\u2500 ... \u251c\u2500\u2500 components/ \u2502   \u2514\u2500\u2500 shared/ \u2502       \u2514\u2500\u2500 ProjectCard.tsx          \u2190 Reusable project card component \u2514\u2500\u2500 build_projects.py                \u2190 Build script"
        },
        {
                "type": "code",
                "content": "\n### How It Works\n\n1. **Markdown Files** (`src/assets/projects/*.md`): \n   - Single source of truth for all project data\n   - Contains metadata between `---` markers\n   - Contains content for full project pages\n\n2. **Build Script** (`build_projects.py`):\n   - Reads all `.md` files from `src/assets/projects/`\n   - Parses metadata and content\n   - Generates individual page components (e.g., `YourProjectPage.tsx`)\n   - Generates `ProjectIndex.ts` with all project metadata\n\n3. **ProjectIndex.ts** (Auto-generated):\n   - Contains `PROJECT_INDEX` array with all project metadata\n   - Contains `PROJECT_COMPONENTS` mapping for routing\n   - **DO NOT EDIT MANUALLY** - will be overwritten by build script\n\n4. **ProjectsPage.tsx**:\n   - Reads projects from `PROJECT_INDEX`\n   - Displays them in a grid layout\n   - Handles filtering and pagination\n\n### Metadata Fields\n\n| Field | Required | Description | Example |\n|-------|----------|-------------|---------|\n| `title` | \u2705 | Project title | \"AI Task Manager\" |\n| `category` | \u2705 | Project category | \"WEB APP\", \"MACHINE LEARNING\", \"OPEN SOURCE\" |\n| `date` | \u2705 | Completion date | \"October 2025\" |\n| `slug` | \u2705 | URL-friendly identifier | \"ai-task-manager\" |\n| `tags` | \u2705 | Technology tags (array) | `[\"React\", \"TypeScript\"]` |\n| `heroImage` | \u26a0\ufe0f | Hero image URL | Unsplash URL or local path |\n| `description` | \u26a0\ufe0f | Brief description (for cards) | \"Smart task management app\" |\n| `featuredOnHome` | \u26a0\ufe0f | Show on home page | `true` or `false` (default: `false`) |\n| `featuredOnProjects` | \u26a0\ufe0f | Featured on projects page | `true` or `false` (default: `false`) |\n| `displayOrder` | \u26a0\ufe0f | Sort order (lower = higher priority) | `1`, `2`, `3`, etc. (default: `999`) |\n| `github` | \u274c | GitHub repository URL | \"https://github.com/user/repo\" |\n| `demo` | \u274c | Live demo URL | \"https://demo.com\" |\n| `technologies` | \u274c | Tech stack (array) | `[\"React\", \"Node.js\"]` |\n| `company` | \u274c | Company/organization | \"Google\" |\n| `location` | \u274c | Location | \"San Francisco, CA\" |\n| `type` | \u274c | Project type | \"Internship\", \"Personal Project\" |\n| `team` | \u274c | Team members (array) | `[\"John\", \"Jane\"]` |\n| `duration` | \u274c | Project duration | \"3 months\" |\n| `external` | \u274c | External project flag | `true` or `false` |\n\n\u2705 = Required | \u26a0\ufe0f = Recommended | \u274c = Optional\n\n### Display Control Fields\n\n**`featuredOnHome`**: Set to `true` to display this project on the home page in the \"Featured Work\" section. Only projects with this flag set to `true` will appear on the home page.\n\n**`featuredOnProjects`**: Set to `true` to make this project the featured/hero project at the top of the Projects page.\n\n**`displayOrder`**: A number that determines the order in which projects appear (lower numbers appear first). For example:\n- `displayOrder: 1` - Highest priority, appears first\n- `displayOrder: 2` - Second priority\n- `displayOrder: 999` - Default, lowest priority\n\n**Example Usage**:",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "--- title: My Best Project # ... other fields ... featuredOnHome: true featuredOnProjects: true displayOrder: 1 ---"
        },
        {
                "type": "code",
                "content": "\n### Categories\n\nCommon categories you can use:\n- `WEB APP`\n- `FULL-STACK`\n- `MACHINE LEARNING`\n- `AUTONOMOUS SYSTEMS`\n- `OPEN SOURCE`\n- `MOBILE APP`\n- `DATA SCIENCE`\n- `BLOCKCHAIN`\n- `GAME DEVELOPMENT`\n- `CLOUD INFRASTRUCTURE`\n\nYou can create custom categories as needed.\n\n---\n\n## Troubleshooting\n\n### Problem: Duplicate Projects Appearing\n\n**Cause**: Hardcoded placeholder projects in `ProjectsPage.tsx`\n\n**Solution**: Remove or comment out the `placeholderProjects` array in `ProjectsPage.tsx`:\n",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "// Remove or comment these lines in ProjectsPage.tsx: const placeholderProjects: Project[] = [ // ... hardcoded projects ];"
        },
        {
                "type": "paragraph",
                "content": "// Change this line: const allProjects = [...realProjects, ...placeholderProjects];"
        },
        {
                "type": "paragraph",
                "content": "// To this: const allProjects = realProjects;"
        },
        {
                "type": "code",
                "content": "\n### Problem: Project Not Showing Up\n\n**Checklist**:\n1. \u2705 Markdown file exists in `src/assets/projects/`\n2. \u2705 Metadata is between `---` markers\n3. \u2705 Required fields are present (title, category, date, slug, tags)\n4. \u2705 Ran `python build_projects.py`\n5. \u2705 Check `ProjectIndex.ts` was updated\n6. \u2705 No syntax errors in markdown file\n\n**Debug**:",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "cd src python build_projects.py # Look for error messages"
        },
        {
                "type": "code",
                "content": "\n### Problem: Build Script Fails\n\n**Common Issues**:\n- Missing `---` markers\n- Invalid JSON in array fields (tags, technologies, team)\n- Special characters in metadata\n\n**Solution**: Check your markdown syntax, especially:",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "tags: [\"React\", \"TypeScript\"]  \u2190 Correct tags: [React, TypeScript]      \u2190 Incorrect (missing quotes)"
        },
        {
                "type": "code",
                "content": "\n### Problem: Images Not Loading\n\n**Solutions**:\n1. Use Unsplash URLs for free stock images:\n   ```\n   https://images.unsplash.com/photo-xxxxx?w=1080\n   ```\n\n2. Or place images in `public/` directory and reference them:\n   ```markdown\n   heroImage: /images/my-project.jpg\n   ```\n\n3. Make sure images are publicly accessible (no localhost URLs)\n\n### Problem: Routing Not Working\n\n**Check**:\n1. `slug` field matches the route you're using\n2. `App.tsx` has routing configured for projects\n3. Build script successfully generated the page component\n\n---\n\n## Quick Reference\n\n### Add Full Project",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "# 1. Create file touch src/assets/projects/my-project.md"
        },
        {
                "type": "paragraph",
                "content": "# 2. Add metadata and content # (Edit the file with your favorite editor)"
        },
        {
                "type": "paragraph",
                "content": "# 3. Generate components cd src && python build_projects.py"
        },
        {
                "type": "paragraph",
                "content": "# 4. Deploy npm run deploy"
        },
        {
                "type": "code",
                "content": "\n### Add External Project Card",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "# 1. Create file with minimal metadata touch src/assets/projects/external-project.md"
        },
        {
                "type": "paragraph",
                "content": "# 2. Add metadata (include external: true) # (Edit the file)"
        },
        {
                "type": "paragraph",
                "content": "# 3. Generate components cd src && python build_projects.py"
        },
        {
                "type": "paragraph",
                "content": "# 4. Deploy npm run deploy"
        },
        {
                "type": "code",
                "content": "\n---\n\n## Best Practices\n\n1. **Consistent Naming**: Use kebab-case for slugs (e.g., `my-awesome-project`)\n2. **Image Optimization**: Use compressed images (< 500KB)\n3. **Description Length**: Keep descriptions under 150 characters for cards\n4. **Tags**: Use 3-7 tags per project\n5. **Categories**: Use existing categories when possible for better filtering\n6. **External Links**: Always test links before deploying\n7. **Version Control**: Commit markdown files to git before running build script\n\n---\n\n## Examples\n\n### Example 1: Full Internal Project\n\n`src/assets/projects/weather-dashboard.md`:",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "# Weather Dashboard"
        },
        {
                "type": "paragraph",
                "content": "--- title: Real-Time Weather Dashboard category: WEB APP date: October 2025 heroImage: https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1080 tags: [\"React\", \"TypeScript\", \"OpenWeather API\", \"Chart.js\"] github: https://github.com/username/weather-dashboard demo: https://weather-dash.example.com technologies: [\"React\", \"TypeScript\", \"Vite\", \"Tailwind CSS\"] duration: 2 months slug: weather-dashboard description: A beautiful real-time weather dashboard with forecasts and historical data visualization ---"
        },
        {
                "type": "paragraph",
                "content": "--- - <a href='#overview' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>Overview</a> - <a href='#features' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>Features</a> - <a href='#technical-stack' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>Technical Stack</a> ---"
        },
        {
                "type": "heading",
                "content": "Overview",
                "id": "overview"
        },
        {
                "type": "paragraph",
                "content": "Built a responsive weather dashboard that displays real-time weather data..."
        },
        {
                "type": "heading",
                "content": "Features",
                "id": "features"
        },
        {
                "type": "paragraph",
                "content": "- Real-time weather updates - 7-day forecast - Historical data charts - Location search"
        },
        {
                "type": "heading",
                "content": "Technical Stack",
                "id": "technical-stack"
        },
        {
                "type": "paragraph",
                "content": "Used React with TypeScript for type safety and modern development..."
        },
        {
                "type": "code",
                "content": "\n### Example 2: External Project Card\n\n`src/assets/projects/open-source-contribution.md`:",
                "language": "text"
        },
        {
                "type": "paragraph",
                "content": "# Kubernetes Documentation"
        },
        {
                "type": "paragraph",
                "content": "--- title: Kubernetes Documentation Contribution category: OPEN SOURCE date: September 2025 heroImage: https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=1080 tags: [\"Kubernetes\", \"Documentation\", \"Open Source\"] github: https://github.com/kubernetes/website technologies: [\"Markdown\", \"Hugo\", \"Git\"] duration: Ongoing slug: kubernetes-docs-contribution external: true description: Contributing to Kubernetes documentation, improving guides and examples for container orchestration ---"
        },
        {
                "type": "heading",
                "content": "Overview",
                "id": "overview"
        },
        {
                "type": "paragraph",
                "content": "This is an external contribution, so detailed content is not needed."
        },
        {
                "type": "code",
                "content": "\n---\n\n**Need Help?** Check the existing project files in `src/assets/projects/` for more examples!",
                "language": "text"
        }
];

  return (
    <div className="size-full relative">
      <Header />

      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-8 py-20">
          {/* Back Button */}
          <a
            href="#/projects"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </a>

          {/* Boxed Hero Content */}
          <div className="border-2 border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column - Hero Image (Optional) */}
              {projectData.heroImage && (
                <div className="lg:col-span-5 bg-background border-r border-b border-border lg:border-b-0">
                  <div className="relative h-full min-h-[250px] lg:min-h-[400px]">
                    <ImageWithFallback
                      src={projectData.heroImage}
                      alt={projectData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Right Column - Project Info */}
              <div className={`${projectData.heroImage ? 'lg:col-span-7' : 'lg:col-span-12'} bg-background p-6 md:p-12`}>
                <div className="space-y-6 md:space-y-8">
                  {/* Category & Meta Info */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <span className="px-4 py-2 border-2 border-border bg-background font-mono text-sm inline-block w-fit">
                        {projectData.category}
                      </span>
                      <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{projectData.date}</span>
                        </span>
                        {projectData.duration && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 h-4 flex-shrink-0" />
                              <span className="whitespace-nowrap">{projectData.duration}</span>
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl">{projectData.title}</h1>
                  </div>

                  {/* Author/Project Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border bg-secondary flex items-center justify-center">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">
                        {projectData.company || 'Project by'}
                      </p>
                      <p>{projectData.type || 'Development Team'}</p>
                    </div>
                  </div>

                  {/* Tags Section */}
                  <div className="-mx-12 px-12 border-t border-border pt-8">
                    <p className="font-mono text-muted-foreground mb-4">// TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {projectData.technologies && projectData.technologies.length > 0 ? (
                        projectData.technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 border-2 border-border font-mono text-sm bg-background hover:bg-secondary transition-colors"
                          >
                            #{tech}
                          </span>
                        ))
                      ) : (
                        projectData.tags && projectData.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 border-2 border-border font-mono text-sm bg-background hover:bg-secondary transition-colors"
                          >
                            #{tag}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents - Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Project Content */}
            <article className="lg:col-span-9">
              <div className="bg-background p-4 rounded-lg">
                <BlogContent blocks={contentBlocks} />

                {/* Action Buttons */}
                {(projectData.github || projectData.demo) && (
                <div className="mt-16 pt-8 border-t-2 border-border">
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    // PROJECT LINKS
                  </p>
                  <div className="flex gap-3">
                    {projectData.github && (
                      <a
                        href={projectData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono inline-flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {projectData.demo && (
                      <a
                        href={projectData.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}