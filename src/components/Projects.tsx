import { PageHeader } from "./shared/PageHeader";
import { ProjectCard } from "./shared/ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  slug?: string;
}

export function Projects() {
  const projects: Project[] = [
        {
                "title": "Proprietary Large Language Model Development",
                "description": "Led the development of a proprietary in-house Large Language Model, executing parallel distributed training on 8 Nvidia A100 GPUs.",
                "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
                "tags": [
                        "PyTorch",
                        "CUDA",
                        "Python",
                        "Distributed Computing",
                        "A100 GPUs"
                ],
                "slug": "proprietary-llm-development",
                "github": "https://github.com/example/llm-project",
                "demo": "https://llm-demo.example.com"
        },
        {
                "title": "ADAS Validation and Verification Simulation",
                "description": "Developed simulations for verification and validation of ADAS features using stochastic methods and adversarial models.",
                "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
                "tags": [
                        "Python",
                        "CARLA",
                        "ROS2",
                        "Machine Learning",
                        "Computer Vision"
                ],
                "slug": "adas-validation-simulation",
                "github": "https://github.com/example/adas-simulation",
                "demo": "https://adas-sim-demo.example.com"
        }
];

  return (
    <section id="projects" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <PageHeader label="FEATURED WORK" title="Projects" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="lg:col-span-1">
              <ProjectCard {...project} index={index} imageHeight="h-48 sm:h-64" />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <a
            href="#/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
