import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/shared/PageHeader";
import { ProjectCard } from "../components/shared/ProjectCard";
import { CategoryFilters } from "../components/shared/CategoryFilters";
import { PaginationControls } from "../components/shared/PaginationControls";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PROJECT_INDEX, ProjectMeta } from "./ProjectIndex";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  year: string;
  github?: string;
  demo?: string;
  slug?: string;
}

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Convert project index to Project format
  const convertProjectMetaToProject = (meta: ProjectMeta): Project => ({
    title: meta.title,
    description: `${meta.title} - ${meta.tags.slice(0, 3).join(', ')}`, // Generate description from title and tags
    image: meta.heroImage || 'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    tags: meta.technologies || meta.tags || [],
    category: meta.category,
    year: meta.date.includes('2024') ? '2024' : meta.date.includes('2023') ? '2023' : '2024',
    github: meta.github,
    demo: meta.demo,
    slug: meta.slug
  });

  // Get all projects from the generated index
  const realProjects: Project[] = PROJECT_INDEX.map(entry => convertProjectMetaToProject(entry.meta));

  // Add some placeholder projects if needed
  const placeholderProjects: Project[] = [
    {
      title: "Technical Portfolio Website",
      description: "A modern portfolio with gridded blueprint aesthetic, built with React and Tailwind CSS featuring responsive design and technical documentation.",
      image: "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYwOTE4MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
      category: "WEB APP",
      year: "2024",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management Dashboard",
      description: "Clean and intuitive task management interface with drag-and-drop functionality, priority sorting, and real-time updates.",
      image: "https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA4OTc4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "FULL-STACK",
      year: "2024",
      github: "#",
      demo: "#",
    },
    {
      title: "Component Library & Design System",
      description: "Reusable UI component library with comprehensive documentation, accessibility features, and customizable themes.",
      image: "https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwODI4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Storybook", "CSS", "Accessibility"],
      category: "DESIGN",
      year: "2024",
      github: "#",
      demo: "#",
    },
  ];

  // Filter projects by category
  const filteredProjects = selectedCategory === "ALL" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="size-full relative">
      <Header />
      
      {/* Featured Project Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
          <PageHeader label="PORTFOLIO" title="Projects" />
          
          <p className="text-muted-foreground mb-8 max-w-2xl">
            A curated selection of recent work. More projects will be added as I continue building.
          </p>

          {/* Single Featured Project */}
          <div className="border-2 border-border shadow-retro bg-background">
            <article className="overflow-hidden group cursor-pointer hover:bg-secondary transition-colors">
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden border-b-2 border-border">
                <ImageWithFallback
                  src={allProjects[0].image}
                  alt={allProjects[0].title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background border-2 border-border font-mono text-xs sm:text-sm">
                    {allProjects[0].category}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between mb-4">
                  <h2>{allProjects[0].title}</h2>
                  <span className="font-mono text-muted-foreground flex-shrink-0 ml-2 text-sm sm:text-base">01</span>
                </div>
                <p className="text-muted-foreground mb-6">{allProjects[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {allProjects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-border font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 font-mono flex-wrap">
                  {allProjects[0].github && (
                    <a
                      href={allProjects[0].github}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs sm:text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                  {allProjects[0].demo && (
                    <a
                      href={allProjects[0].demo}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs sm:text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
          <div className="mb-8 sm:mb-12">
            <div className="section-header px-4 py-2 inline-block mb-8">
              <h3 className="font-mono">// ALL PROJECTS</h3>
            </div>
            <p className="font-mono text-muted-foreground mb-6">Browse by category:</p>
            <CategoryFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={(category) => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {paginatedProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    index={startIndex + index}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div className="text-center py-12 border-2 border-border">
              <p className="text-muted-foreground font-mono">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
