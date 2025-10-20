import { ArrowLeft, Calendar, Clock, Github, ExternalLink, MapPin, Users, Code } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TableOfContents } from "../components/blog/TableOfContents";
import { BlogContent, BlogContentBlock } from "../components/blog/BlogContent";

export function BusinessCardGeneratorPage() {
  // Project data generated from markdown
  const projectData = {
    "title": "Business Card Generator",
    "category": "WEB APP",
    "date": "October 2025",
    "type": "Web Application",
    "heroImage": "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    "tags": [
        "React",
        "TypeScript",
        "UI/UX",
        "Generator",
        "Interactive"
    ],
    "technologies": [
        "React",
        "TypeScript",
        "html2canvas",
        "CSS",
        "Tailwind"
    ],
    "github": "https://github.com/nirajkamal/business-card-generator",
    "demo": "#/business-card-generator",
    "duration": "1 week",
    "slug": "business-card-generator"
};

  const tocItems = [
        {
                "title": "Interactive Business Card Generator",
                "id": "interactive-business-card-generator",
                "level": 2
        },
        {
                "title": "Key Features",
                "id": "key-features",
                "level": 2
        },
        {
                "title": "Technical Implementation",
                "id": "technical-implementation",
                "level": 2
        },
        {
                "title": "Design Considerations",
                "id": "design-considerations",
                "level": 2
        },
        {
                "title": "Future Enhancements",
                "id": "future-enhancements",
                "level": 2
        }
];

  const contentBlocks: BlogContentBlock[] = [
        {
                "type": "heading",
                "content": "Interactive Business Card Generator",
                "id": "interactive-business-card-generator"
        },
        {
                "type": "paragraph",
                "content": "I designed and built a responsive and interactive Business Card Generator that allows users to create professional business cards in minutes. This application showcases my skills in building interactive UI components and real-time preview functionalities."
        },
        {
                "type": "subheading",
                "content": "Key Features",
                "id": "key-features"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Interactive Preview</strong>: Real-time preview of business card design as you make changes - <strong>Customization Options</strong>: Multiple background patterns, color schemes, and layout options - <strong>Two-sided Design</strong>: Design both front and back sides of the business card - <strong>Logo Upload</strong>: Upload and position your company logo - <strong>Download Functionality</strong>: Export your design as a high-resolution PNG image - <strong>Responsive Design</strong>: Works seamlessly on desktop and mobile devices"
        },
        {
                "type": "subheading",
                "content": "Technical Implementation",
                "id": "technical-implementation"
        },
        {
                "type": "paragraph",
                "content": "The Business Card Generator is built using React and TypeScript with a focus on component reusability and state management. The app uses the html2canvas library to convert the DOM elements into downloadable images."
        },
        {
                "type": "code",
                "content": "// Example code showing card preview generation\nconst downloadCard = async (side: string) => {\n  if (cardRef.current) {\n    const canvas = await html2canvas(cardRef.current, {\n      backgroundColor: null,\n      scale: 2, // Higher resolution\n    });\n    \n    const image = canvas.toDataURL('image/png');\n    const link = document.createElement('a');\n    link.href = image;\n    link.download = `business-card-${side}.png`;\n    link.click();\n  }\n};",
                "language": "javascript"
        },
        {
                "type": "paragraph",
                "content": "I implemented dynamic styling based on user selections for background patterns, colors, and layout. The application maintains a clean separation of concerns between the UI components and the business logic."
        },
        {
                "type": "subheading",
                "content": "Design Considerations",
                "id": "design-considerations"
        },
        {
                "type": "paragraph",
                "content": "The interface was designed with usability in mind, featuring intuitive controls and immediate visual feedback. I focused on creating a balance between providing enough customization options while maintaining simplicity in the user experience."
        },
        {
                "type": "subheading",
                "content": "Future Enhancements",
                "id": "future-enhancements"
        },
        {
                "type": "paragraph",
                "content": "Potential future improvements include: - Additional card templates and preset designs - QR code generation for contact information - Social media icons and integration - PDF export option for professional printing - Save designs to user accounts"
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
                        className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Use Generator
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