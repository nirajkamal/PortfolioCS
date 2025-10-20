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
  ];

  // Combine real projects with placeholders
  const allProjects = [...realProjects, ...placeholderProjects];

  // Get unique categories from all projects
  const categories = ["ALL", ...Array.from(new Set(allProjects.map(project => project.category)))];

  // Filter projects by category
  const filteredProjects = selectedCategory === "ALL" 
    ? allProjects 
    : allProjects.filter((project: Project) => project.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Featured project (first real project or first project)
  const featuredProject = allProjects[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
          <PageHeader label="MY WORK" title="Featured Projects" />

          {/* Single Featured Project */}
          <div className="border-2 border-border shadow-retro bg-background">
            <article className="overflow-hidden group cursor-pointer hover:bg-secondary transition-colors">
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden border-b-2 border-border">
                <ImageWithFallback
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background border-2 border-border font-mono text-xs sm:text-sm">
                    {featuredProject.category}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <h2 className="mb-4">{featuredProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-border font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">{featuredProject.description}</p>
                <div className="flex gap-2 sm:gap-3 font-mono">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs sm:text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {featuredProject.demo && (
                    <a
                      href={featuredProject.demo}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs sm:text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                  {featuredProject.slug && (
                    <a
                      href={`#/project/${featuredProject.slug}`}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs sm:text-sm"
                    >
                      <span>View Details</span>
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
              <h2 className="font-mono text-xs sm:text-sm">ALL PROJECTS</h2>
            </div>
            
            {/* Filters */}
            <CategoryFilters 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {paginatedProjects.map((project: Project, index: number) => (
              <div key={index} className="lg:col-span-1">
                <ProjectCard 
                  {...project} 
                  index={index} 
                  imageHeight="h-48 sm:h-64" 
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}