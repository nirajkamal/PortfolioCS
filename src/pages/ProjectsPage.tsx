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
  const activeProjectIndex = PROJECT_INDEX.filter(entry => entry.meta.active !== false);
  const realProjects: Project[] = activeProjectIndex
    .map(entry => convertProjectMetaToProject(entry.meta));

  // Use only projects from the markdown files (source of truth: src/assets/projects/*.md)
  const allProjects = realProjects;

  // Sort projects by displayOrder
  const sortedProjects = [...allProjects].sort((a, b) => {
    const orderA = activeProjectIndex.find(p => p.meta.title === a.title)?.meta.displayOrder || 999;
    const orderB = activeProjectIndex.find(p => p.meta.title === b.title)?.meta.displayOrder || 999;
    return orderA - orderB;
  });

  // Get unique categories from all projects
  const categories = ["ALL", ...Array.from(new Set(sortedProjects.map(project => project.category)))];

  // Filter projects by category
  const filteredProjects = selectedCategory === "ALL" 
    ? sortedProjects 
    : sortedProjects.filter((project: Project) => project.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Featured project (first project with featuredOnProjects flag, or first project)
  const activeProjects = PROJECT_INDEX.filter(p => p.meta.active !== false);
  const featuredProjectMeta = activeProjects.find(p => p.meta.featuredOnProjects) || activeProjects[0];
  const featuredProject = featuredProjectMeta ? convertProjectMetaToProject(featuredProjectMeta.meta) : sortedProjects[0];

  return (
    <div className="size-full relative">
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
                      href={`#/development?name=${encodeURIComponent(featuredProject.title)}&github=${encodeURIComponent(featuredProject.github)}&demo=${encodeURIComponent(featuredProject.demo || '')}`}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs sm:text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {featuredProject.demo && (
                    <a
                      href={`#/development?name=${encodeURIComponent(featuredProject.title)}&github=${encodeURIComponent(featuredProject.github || '')}&demo=${encodeURIComponent(featuredProject.demo)}`}
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