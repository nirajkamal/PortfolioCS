import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";

interface DevelopmentPageProps {
  demoLink?: string;
  githubLink?: string;
  projectName?: string;
}

export function StillInDevelopmentPage() {
  // Get project info from URL params
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const demoLink = urlParams.get('demo') || '';
  const githubLink = urlParams.get('github') || '';
  const projectName = urlParams.get('name') || 'Project';

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

          {/* Main Content */}
          <div className="border-2 border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column - Under Construction Image */}
              <div className="lg:col-span-5 bg-background border-r border-b border-border lg:border-b-0">
                <div className="relative h-full min-h-[300px] lg:min-h-[500px]">
                  <ImageWithFallback
                    src={new URL("../assets/under_construction_common.jpg", import.meta.url).href}
                    alt="Still in Development"
                    className="w-full h-full object-cover opacity-75"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-7 bg-background p-6 md:p-12">
                <div className="space-y-8">
                  {/* Title */}
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Still in Development</h1>
                    <p className="text-lg text-muted-foreground">
                      This project is currently under active development. Check back soon for updates!
                    </p>
                  </div>

                  {/* Project Name */}
                  {projectName && projectName !== 'Project' && (
                    <div>
                      <p className="font-mono text-muted-foreground mb-2">// PROJECT</p>
                      <p className="text-xl font-semibold">{projectName}</p>
                    </div>
                  )}

                  {/* Links Section */}
                  <div className="space-y-4">
                    <p className="font-mono text-muted-foreground">// RESOURCES</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {githubLink && (
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
                        >
                          <Github className="w-5 h-5" />
                          <span>View on GitHub</span>
                        </a>
                      )}
                      {demoLink && (
                        <a
                          href={demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>View Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="border-2 border-border px-6 py-4 bg-secondary opacity-50">
                    <p className="font-mono text-sm">
                      💡 This project is actively being developed. Come back later to see the full version!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
