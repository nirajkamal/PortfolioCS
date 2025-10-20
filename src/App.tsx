import { useState, useEffect } from "react";
import { GridBackground } from "./components/GridBackground";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { BLOG_COMPONENTS } from "./pages/BlogIndex";
import { PROJECT_COMPONENTS } from "./pages/ProjectIndex";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || "#/");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    // Check for project route (e.g., #/project/project-slug)
    if (currentPath.startsWith("#/project/")) {
      const projectSlug = currentPath.replace("#/project/", "");
      
      // Check if we have a component for this project slug
      const ProjectComponent = PROJECT_COMPONENTS[projectSlug as keyof typeof PROJECT_COMPONENTS];
      if (ProjectComponent) {
        return <ProjectComponent />;
      }
    }

    // Check for blog post route (e.g., #/blog/post-slug)
    if (currentPath.startsWith("#/blog/")) {
      const blogSlug = currentPath.replace("#/blog/", "");
      
      // Check if we have a component for this blog slug
      const BlogComponent = BLOG_COMPONENTS[blogSlug as keyof typeof BLOG_COMPONENTS];
      if (BlogComponent) {
        return <BlogComponent />;
      }
      
      // Fallback to generic blog post page
      return <BlogPostPage />;
    }

    switch (currentPath) {
      case "#/blog":
        return <BlogPage />;
      case "#/projects":
        return <ProjectsPage />;
      case "#/resume":
        return <ResumePage />;
      case "#/":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen w-full" style={{ minHeight: '100vh' }}>
      <GridBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {renderPage()}
      </div>
    </div>
  );
}
