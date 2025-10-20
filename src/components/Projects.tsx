import { PageHeader } from "./shared/PageHeader";
import { ProjectCard } from "./shared/ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
        "title": "LLM for Code Generation",
        "description": "Led the development of a proprietary in-house Large Language Model, executing <span style='color: #ff6b3d;'>parallel distributed training</span> on 8 Nvidia A100 GPUs.",
        "image": "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYwOTE4MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "tags": [
            "PyTorch",
            "LLM",
            "Distributed Training",
            "A100 GPU"
        ],
        "github": "https://github.com/example/ecommerce",
        "demo": "https://ecommerce-demo.com"
    },
    {
        "title": "ADAS Simulation & Validation",
        "description": "Developed simulations for verification and validation of ADAS features using <span style='color: #ff6b3d;'>stochastic methods</span> and adversarial models.",
        "image": "https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwODI4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "tags": [
            "Autonomous Driving",
            "Simulation",
            "Python",
            "RL"
        ],
        "github": "https://github.com/example/collab-tool",
        "demo": "https://collab-demo.com"
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
      </div>
    </section>
  );
}
