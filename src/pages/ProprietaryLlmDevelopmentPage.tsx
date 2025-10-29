import { ArrowLeft, Calendar, Clock, Github, ExternalLink, MapPin, Users, Code } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TableOfContents } from "../components/blog/TableOfContents";
import { BlogContent, BlogContentBlock } from "../components/blog/BlogContent";

export function ProprietaryLlmDevelopmentPage() {
  // Project data generated from markdown
  const projectData = {
    "title": "Proprietary Large Language Model Development",
    "category": "MACHINE LEARNING",
    "date": "Jan 2024 - Present",
    "company": "Stealth AI Startup",
    "location": "Atlanta, GA",
    "type": "Full-time",
    "heroImage": "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    "tags": [
        "LLM",
        "PyTorch",
        "CUDA",
        "Distributed Training",
        "A100"
    ],
    "github": "https://github.com/example/llm-project",
    "demo": "https://llm-demo.example.com",
    "technologies": [
        "PyTorch",
        "CUDA",
        "Python",
        "Distributed Computing",
        "A100 GPUs"
    ],
    "team": [
        "Lead ML Engineer",
        "Research Team",
        "Infrastructure Team"
    ],
    "duration": "8 months",
    "slug": "proprietary-llm-development",
    "description": "Led the development of a proprietary in-house Large Language Model, executing parallel distributed training on 8 Nvidia A100 GPUs.",
    "featuredOnHome": true,
    "featuredOnProjects": false,
    "displayOrder": 1
};

  const tocItems = [
        {
                "title": "Project Overview",
                "id": "project-overview",
                "level": 2
        },
        {
                "title": "Technical Architecture",
                "id": "technical-architecture",
                "level": 2
        },
        {
                "title": "Training Infrastructure",
                "id": "training-infrastructure",
                "level": 2
        },
        {
                "title": "Performance Metrics",
                "id": "performance-metrics",
                "level": 2
        },
        {
                "title": "Challenges & Solutions",
                "id": "challenges-solutions",
                "level": 2
        },
        {
                "title": "Results & Impact",
                "id": "results-impact",
                "level": 2
        }
];

  const contentBlocks: BlogContentBlock[] = [
        {
                "type": "heading",
                "id": "project-overview",
                "content": "Project Overview"
        },
        {
                "type": "paragraph",
                "content": "Led the development of a proprietary in-house Large Language Model for <a href='code generation' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>orange</a> and natural language processing tasks. This project involved designing and implementing a scalable training pipeline capable of handling massive datasets and coordinating distributed training across multiple high-performance GPUs."
        },
        {
                "type": "paragraph",
                "content": "The project aimed to create a specialized LLM that could understand and generate code with high accuracy while maintaining efficient inference speeds for production deployment."
        },
        {
                "type": "heading",
                "id": "technical-architecture",
                "content": "Technical Architecture"
        },
        {
                "type": "heading3",
                "id": "model-design",
                "content": "Model Design"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Architecture</strong>: Transformer-based decoder model with custom attention mechanisms - <strong>Parameters</strong>: 7B parameter model optimized for code generation - <strong>Context Length</strong>: 8,192 tokens with sliding window attention - <strong>Vocabulary</strong>: Custom tokenizer trained on code and natural language corpus"
        },
        {
                "type": "heading3",
                "id": "infrastructure-stack",
                "content": "Infrastructure Stack"
        },
        {
                "type": "code",
                "language": "python",
                "content": "# Training Configuration\nmodel_config = {\n    \"hidden_size\": 4096,\n    \"num_layers\": 32,\n    \"num_attention_heads\": 32,\n    \"intermediate_size\": 11008,\n    \"vocab_size\": 32000,\n    \"max_position_embeddings\": 8192\n}\n\n# Distributed Training Setup\ntraining_config = {\n    \"batch_size\": 64,\n    \"micro_batch_size\": 8,\n    \"gradient_accumulation_steps\": 8,\n    \"learning_rate\": 1e-4,\n    \"warmup_steps\": 2000,\n    \"total_steps\": 100000\n}"
        },
        {
                "type": "heading",
                "id": "training-infrastructure",
                "content": "Training Infrastructure"
        },
        {
                "type": "heading3",
                "id": "hardware-configuration",
                "content": "Hardware Configuration"
        },
        {
                "type": "paragraph",
                "content": "- <strong>GPUs</strong>: 8x NVIDIA A100 80GB GPUs - <strong>Memory</strong>: 640GB total GPU memory - <strong>Interconnect</strong>: NVLink for high-speed GPU communication - <strong>Storage</strong>: High-speed NVMe SSDs for data loading"
        },
        {
                "type": "heading3",
                "id": "distributed-training-strategy",
                "content": "Distributed Training Strategy"
        },
        {
                "type": "paragraph",
                "content": "Implemented <a href='parallel distributed training' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>orange</a> using PyTorch's DistributedDataParallel (DDP) with the following optimizations:"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Data Parallelism</strong>: Distributed batches across 8 A100 GPUs - <strong>Gradient Synchronization</strong>: Optimized AllReduce operations - <strong>Memory Management</strong>: Gradient checkpointing to handle large models - <strong>Mixed Precision</strong>: FP16 training with automatic loss scaling"
        },
        {
                "type": "code",
                "language": "python",
                "content": "# Distributed Training Setup\ndef setup_distributed_training():\n    torch.distributed.init_process_group(\n        backend='nccl',\n        world_size=8,\n        rank=local_rank\n    )\n    \n    model = torch.nn.parallel.DistributedDataParallel(\n        model.cuda(local_rank),\n        device_ids=[local_rank],\n        find_unused_parameters=False\n    )\n    \n    return model"
        },
        {
                "type": "heading",
                "id": "performance-metrics",
                "content": "Performance Metrics"
        },
        {
                "type": "heading3",
                "id": "training-performance",
                "content": "Training Performance"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Training Speed</strong>: 1.2 tokens/second/GPU (9.6 total tokens/second) - <strong>Memory Efficiency</strong>: 78GB GPU memory utilization per A100 - <strong>Convergence</strong>: Achieved target perplexity in 2.1M steps - <strong>Throughput</strong>: Processed 2.1B tokens during training"
        },
        {
                "type": "heading3",
                "id": "model-quality",
                "content": "Model Quality"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Code Generation</strong>: 78% pass@1 on HumanEval benchmark - <strong>Natural Language</strong>: 85% accuracy on GLUE tasks - <strong>Inference Speed</strong>: 45ms latency for 512-token generation - <strong>Memory Usage</strong>: 14GB VRAM for inference"
        },
        {
                "type": "heading",
                "id": "challenges--solutions",
                "content": "Challenges & Solutions"
        },
        {
                "type": "heading3",
                "id": "memory-optimization",
                "content": "Memory Optimization"
        },
        {
                "type": "paragraph",
                "content": "<strong>Challenge</strong>: Training 7B parameter model on limited GPU memory <strong>Solution</strong>: Implemented gradient checkpointing and ZeRO optimizer states"
        },
        {
                "type": "heading3",
                "id": "training-stability",
                "content": "Training Stability"
        },
        {
                "type": "paragraph",
                "content": "<strong>Challenge</strong>: Maintaining stable training across distributed setup <strong>Solution</strong>: Custom learning rate scheduling and gradient clipping"
        },
        {
                "type": "heading3",
                "id": "data-pipeline",
                "content": "Data Pipeline"
        },
        {
                "type": "paragraph",
                "content": "<strong>Challenge</strong>: Efficient data loading for large-scale training <strong>Solution</strong>: Implemented multi-threaded data loaders with prefetching"
        },
        {
                "type": "heading",
                "id": "results--impact",
                "content": "Results & Impact"
        },
        {
                "type": "heading3",
                "id": "technical-achievements",
                "content": "Technical Achievements"
        },
        {
                "type": "paragraph",
                "content": "- Successfully trained a <a href='high-performance LLM' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>orange</a> from scratch - Achieved 23% better code generation accuracy than baseline models - Reduced training time by 40% through infrastructure optimizations - Implemented efficient inference pipeline supporting 100+ concurrent users"
        },
        {
                "type": "heading3",
                "id": "business-impact",
                "content": "Business Impact"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Cost Reduction</strong>: 60% reduction in external API costs - <strong>Performance</strong>: 3x faster code generation compared to previous solutions - <strong>Scalability</strong>: Support for 10x increase in user base - <strong>IP Protection</strong>: Complete control over model and training data"
        },
        {
                "type": "heading3",
                "id": "key-learnings",
                "content": "Key Learnings"
        },
        {
                "type": "paragraph",
                "content": "- Importance of data quality over quantity in LLM training - Critical role of hardware optimization in distributed training - Value of custom tokenization for domain-specific tasks - Need for comprehensive evaluation frameworks"
        },
        {
                "type": "heading",
                "id": "resources",
                "content": "Resources"
        },
        {
                "type": "paragraph",
                "content": "Explore the project code and try the model:"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Source Code</strong>: <a href='#/development?demo=https://github.com/example/llm-project' style='color: #ff6b3d; text-decoration: underline;'>View Resource</a> - <strong>Live Demo</strong>: <a href='#/development?demo=https://llm-demo.example.com' style='color: #ff6b3d; text-decoration: underline;'>View Resource</a>"
        },
        {
                "type": "paragraph",
                "content": "The project established a foundation for future LLM research and development within the organization, demonstrating the feasibility of training specialized models for specific use cases."
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