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
        "title": "IBM FMS & PyTorch Contributions",
        "description": "Contributed to IBM's Foundation Model Stack by enhancing new methods of attention and authored <span style='color: #ff6b3d;'>6 pull requests</span> to PyTorch.",
        "image": "https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA4OTc4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "tags": [
            "PyTorch",
            "Open Source",
            "LLM",
            "Attention Mechanisms"
        ],
        "github": "https://github.com/example/ai-tasks",
        "demo": "https://ai-tasks-demo.com"
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
    },
    {
        "title": "Shape Detection & Generation",
        "description": "Implemented <span style='color: #ff6b3d;'>shape detection algorithms</span> for pattern matching and stochastic map generation as a Graduate Research Assistant.",
        "image": "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA4NzYyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "tags": [
            "Python",
            "Rhino",
            "Computer Vision",
            "Generative Models"
        ],
        "github": "https://github.com/example/portfolio-builder",
        "demo": "https://portfolio-builder-demo.com"
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
