import { ArrowLeft, Calendar, Clock, Github, ExternalLink, MapPin, Users, Code } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TableOfContents } from "../components/blog/TableOfContents";
import { BlogContent, BlogContentBlock } from "../components/blog/BlogContent";

export function Dev_page_routingPage() {
  // Project data generated from markdown
  const projectData = {};

  const tocItems = [];

  const contentBlocks: BlogContentBlock[] = [
        {
                "type": "heading",
                "id": "overview",
                "content": "Overview"
        },
        {
                "type": "paragraph",
                "content": "You can use special markdown tags in your project and blog markdown files to control how links are routed. The `[dev]` tag allows you to route any link through the \"Still in Development\" page instead of opening it directly."
        },
        {
                "type": "heading",
                "id": "syntax",
                "content": "Syntax"
        },
        {
                "type": "heading3",
                "id": "[dev]-tag",
                "content": "[dev] Tag"
        },
        {
                "type": "paragraph",
                "content": "Routes a link through the development page:"
        },
        {
                "type": "code",
                "language": "markdown",
                "content": "[dev](https://github.com/example/repo)"
        },
        {
                "type": "paragraph",
                "content": "This will: 1. Take the user to the development page 2. Pass the URL as a parameter 3. Display buttons to open the actual resource"
        },
        {
                "type": "heading3",
                "id": "available-tags",
                "content": "Available Tags"
        },
        {
                "type": "paragraph",
                "content": "| Tag | Syntax | Result | |-----|--------|--------| | dev | `<a href='#/development?demo=url' style='color: #ff6b3d; text-decoration: underline;'>View Resource</a>` | Routes through development page | | orange | `<a href='text' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>orange</a>` | Orange colored text | | comment | `<a href='text' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>comment</a>` | Code comment style | | link | `<a href='url' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>link</a>` | Regular external link | | orange-link | `<a href='url' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>orange-link</a>` | Orange colored external link |"
        },
        {
                "type": "heading",
                "id": "examples",
                "content": "Examples"
        },
        {
                "type": "heading3",
                "id": "example-1:-route-github-link",
                "content": "Example 1: Route GitHub Link"
        },
        {
                "type": "code",
                "language": "markdown",
                "content": "Check out my code: [dev](https://github.com/example/my-project)"
        },
        {
                "type": "heading3",
                "id": "example-2:-route-demo-link",
                "content": "Example 2: Route Demo Link"
        },
        {
                "type": "code",
                "language": "markdown",
                "content": "Try the demo: [dev](https://my-demo.example.com)"
        },
        {
                "type": "heading3",
                "id": "example-3:-combine-with-other-formatting",
                "content": "Example 3: Combine with Other Formatting"
        },
        {
                "type": "code",
                "language": "markdown",
                "content": "This is **bold** and this [dev](https://example.com) routes to development page."
        },
        {
                "type": "heading",
                "id": "how-it-works",
                "content": "How It Works"
        },
        {
                "type": "paragraph",
                "content": "When you use `<a href='#/development?demo=url' style='color: #ff6b3d; text-decoration: underline;'>View Resource</a>`:"
        },
        {
                "type": "paragraph",
                "content": "1. The markdown parser detects the special tag 2. Instead of creating a direct link, it creates a link to: `#/development?demo={url}` 3. On the development page, this parameter is displayed as a button 4. Users can click to open the actual resource in a new tab"
        },
        {
                "type": "heading",
                "id": "notes",
                "content": "Notes"
        },
        {
                "type": "paragraph",
                "content": "- The development page will only show buttons for resources you pass to it - The URL must be valid and properly encoded - You can use multiple `[dev]` tags in the same content - `[dev]` tags are processed before regular markdown links, so they won't interfere"
        }
];

  return (
    <div className="size-full relative">
      <Header />

      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-8 py-20 pb-8">
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
        <div className="max-w-7xl mx-auto px-8 py-12 pt-8">
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
                        href={`#/development?name=${encodeURIComponent(projectData.title)}&github=${encodeURIComponent(projectData.github)}&demo=${encodeURIComponent(projectData.demo || '')}`}
                        className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono inline-flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {projectData.demo && (
                      <a
                        href={`#/development?name=${encodeURIComponent(projectData.title)}&github=${encodeURIComponent(projectData.github || '')}&demo=${encodeURIComponent(projectData.demo)}`}
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