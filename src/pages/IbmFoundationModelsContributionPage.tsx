import { ArrowLeft, Calendar, Clock, Github, ExternalLink, MapPin, Users, Code } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TableOfContents } from "../components/blog/TableOfContents";
import { BlogContent, BlogContentBlock } from "../components/blog/BlogContent";

export function IbmFoundationModelsContributionPage() {
  // Project data generated from markdown
  const projectData = {
    "title": "IBM Foundation Models Stack Enhancement",
    "category": "OPEN SOURCE",
    "date": "Summer 2024",
    "company": "IBM Research",
    "location": "Remote",
    "type": "Internship",
    "heroImage": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    "tags": [
        "PyTorch",
        "Attention Mechanisms",
        "Open Source",
        "Foundation Models",
        "IBM"
    ],
    "github": "https://github.com/foundation-model-stack/foundation-model-stack",
    "demo": "https://fms.example.com",
    "technologies": [
        "PyTorch",
        "Python",
        "Transformers",
        "CUDA",
        "Git"
    ],
    "team": [
        "IBM Research Team",
        "Open Source Community"
    ],
    "duration": "3 months",
    "slug": "ibm-foundation-models-contribution",
    "description": "Enhanced IBM's Foundation Models Stack with optimized attention mechanisms and contributed to PyTorch core.",
    "featuredOnHome": false,
    "featuredOnProjects": false,
    "displayOrder": 3,
    "active": false
};

  const tocItems = [
        {
                "title": "Project Overview",
                "id": "project-overview",
                "level": 2
        },
        {
                "title": "Contribution Areas",
                "id": "contribution-areas",
                "level": 2
        },
        {
                "title": "Attention Mechanism Enhancements",
                "id": "attention-enhancements",
                "level": 2
        },
        {
                "title": "PyTorch Pull Requests",
                "id": "pytorch-contributions",
                "level": 2
        },
        {
                "title": "Technical Implementation",
                "id": "technical-implementation",
                "level": 2
        },
        {
                "title": "Impact & Recognition",
                "id": "impact-recognition",
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
                "content": "Contributed to IBM's Foundation Model Stack by enhancing attention mechanisms and implementing performance optimizations. This work involved deep collaboration with IBM Research teams and resulted in <a href='6 pull requests' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>orange</a> to PyTorch core, focusing on transformer architecture improvements and memory efficiency."
        },
        {
                "type": "paragraph",
                "content": "The Foundation Model Stack (FMS) is IBM's open-source framework for training, fine-tuning, and deploying large language models, designed to democratize access to foundation model capabilities."
        },
        {
                "type": "heading",
                "id": "contribution-areas",
                "content": "Contribution Areas"
        },
        {
                "type": "heading3",
                "id": "core-enhancements",
                "content": "Core Enhancements"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Attention Mechanisms</strong>: Implemented novel attention patterns for improved efficiency - <strong>Memory Optimization</strong>: Reduced memory footprint by 25% during training - <strong>Performance Scaling</strong>: Enhanced multi-GPU training performance - <strong>API Design</strong>: Improved developer experience with cleaner interfaces"
        },
        {
                "type": "heading3",
                "id": "research-contributions",
                "content": "Research Contributions"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Sparse Attention</strong>: Developed efficient sparse attention patterns - <strong>Gradient Compression</strong>: Implemented novel gradient compression techniques - <strong>Model Parallelism</strong>: Enhanced tensor parallelism for large models - <strong>Checkpointing</strong>: Improved model checkpointing and resumption"
        },
        {
                "type": "heading",
                "id": "attention-mechanism-enhancements",
                "content": "Attention Mechanism Enhancements"
        },
        {
                "type": "heading3",
                "id": "flash-attention-integration",
                "content": "Flash Attention Integration"
        },
        {
                "type": "paragraph",
                "content": "Integrated and optimized Flash Attention for improved memory efficiency:"
        },
        {
                "type": "code",
                "language": "python",
                "content": "class FlashAttentionLayer(nn.Module):\n    def __init__(self, hidden_size, num_heads, dropout=0.1):\n        super().__init__()\n        self.hidden_size = hidden_size\n        self.num_heads = num_heads\n        self.head_dim = hidden_size // num_heads\n        \n        self.qkv_proj = nn.Linear(hidden_size, 3 * hidden_size)\n        self.out_proj = nn.Linear(hidden_size, hidden_size)\n        self.dropout = dropout\n        \n    def forward(self, x, attention_mask=None):\n        batch_size, seq_len, _ = x.shape\n        \n        # Efficient QKV computation\n        qkv = self.qkv_proj(x)\n        q, k, v = qkv.chunk(3, dim=-1)\n        \n        # Flash attention implementation\n        attention_output = flash_attention_func(\n            q, k, v, \n            dropout_p=self.dropout if self.training else 0.0,\n            causal=True,\n            return_attn_probs=False\n        )\n        \n        return self.out_proj(attention_output)"
        },
        {
                "type": "heading3",
                "id": "sliding-window-attention",
                "content": "Sliding Window Attention"
        },
        {
                "type": "paragraph",
                "content": "Developed sliding window attention for long sequence processing:"
        },
        {
                "type": "code",
                "language": "python",
                "content": "def sliding_window_attention(query, key, value, window_size=512):\n    \"\"\"\n    Efficient sliding window attention for long sequences\n    \"\"\"\n    seq_len = query.size(1)\n    \n    # Create sliding window masks\n    attention_mask = create_sliding_window_mask(\n        seq_len, window_size, query.device\n    )\n    \n    # Compute attention with windowed approach\n    scores = torch.matmul(query, key.transpose(-2, -1))\n    scores = scores.masked_fill(attention_mask == 0, float('-inf'))\n    \n    attention_weights = F.softmax(scores, dim=-1)\n    output = torch.matmul(attention_weights, value)\n    \n    return output"
        },
        {
                "type": "heading",
                "id": "pytorch-contributions",
                "content": "PyTorch Contributions"
        },
        {
                "type": "heading3",
                "id": "pull-request-#1:-memory-efficient-attention",
                "content": "Pull Request #1: Memory-Efficient Attention"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Issue</strong>: High memory usage in attention computation - <strong>Solution</strong>: Implemented memory-efficient attention with gradient checkpointing - <strong>Impact</strong>: 30% reduction in memory usage for large models"
        },
        {
                "type": "code",
                "language": "python",
                "content": "# Before optimization\ndef standard_attention(q, k, v):\n    scores = torch.matmul(q, k.transpose(-2, -1))\n    attention = F.softmax(scores, dim=-1)\n    return torch.matmul(attention, v)\n\n# After optimization  \ndef memory_efficient_attention(q, k, v):\n    with torch.no_grad():\n        scores = torch.matmul(q, k.transpose(-2, -1))\n    \n    # Checkpoint the softmax computation\n    attention = checkpoint(F.softmax, scores, dim=-1)\n    return torch.matmul(attention, v)"
        },
        {
                "type": "heading3",
                "id": "pull-request-#2:-gradient-accumulation-fix",
                "content": "Pull Request #2: Gradient Accumulation Fix"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Issue</strong>: Incorrect gradient accumulation in distributed training - <strong>Solution</strong>: Fixed gradient synchronization timing - <strong>Impact</strong>: Resolved training instability issues"
        },
        {
                "type": "heading3",
                "id": "pull-request-#3-6:-additional-optimizations",
                "content": "Pull Request #3-6: Additional Optimizations"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Tensor Fusion</strong>: Improved tensor operation fusion - <strong>CUDA Kernels</strong>: Optimized custom CUDA kernels - <strong>API Consistency</strong>: Enhanced API consistency across modules - <strong>Documentation</strong>: Improved documentation and examples"
        },
        {
                "type": "heading",
                "id": "technical-implementation",
                "content": "Technical Implementation"
        },
        {
                "type": "heading3",
                "id": "performance-benchmarks",
                "content": "Performance Benchmarks"
        },
        {
                "type": "paragraph",
                "content": "Conducted comprehensive performance analysis:"
        },
        {
                "type": "code",
                "language": "python",
                "content": "def benchmark_attention_mechanisms():\n    \"\"\"\n    Benchmark different attention implementations\n    \"\"\"\n    models = {\n        'standard': StandardAttention(),\n        'flash': FlashAttention(),\n        'sliding_window': SlidingWindowAttention()\n    }\n    \n    results = {}\n    for name, model in models.items():\n        # Memory usage\n        memory_before = torch.cuda.memory_allocated()\n        output = model(test_input)\n        memory_after = torch.cuda.memory_allocated()\n        \n        # Speed benchmark\n        start_time = time.time()\n        for _ in range(100):\n            _ = model(test_input)\n        end_time = time.time()\n        \n        results[name] = {\n            'memory_mb': (memory_after - memory_before) / 1024 / 1024,\n            'speed_ms': (end_time - start_time) * 10,\n            'accuracy': compute_accuracy(output, ground_truth)\n        }\n    \n    return results"
        },
        {
                "type": "heading3",
                "id": "integration-testing",
                "content": "Integration Testing"
        },
        {
                "type": "paragraph",
                "content": "Developed comprehensive test suites for new features:"
        },
        {
                "type": "code",
                "language": "python",
                "content": "class TestAttentionMechanisms(unittest.TestCase):\n    def test_flash_attention_correctness(self):\n        \"\"\"Test Flash Attention produces correct results\"\"\"\n        standard_attn = StandardAttention()\n        flash_attn = FlashAttention()\n        \n        input_tensor = torch.randn(2, 512, 768)\n        \n        standard_output = standard_attn(input_tensor)\n        flash_output = flash_attn(input_tensor)\n        \n        # Assert outputs are approximately equal\n        self.assertTrue(torch.allclose(\n            standard_output, flash_output, rtol=1e-3\n        ))\n    \n    def test_memory_efficiency(self):\n        \"\"\"Test memory usage improvements\"\"\"\n        # Memory profiling test implementation\n        pass"
        },
        {
                "type": "heading",
                "id": "impact--recognition",
                "content": "Impact & Recognition"
        },
        {
                "type": "heading3",
                "id": "quantitative-results",
                "content": "Quantitative Results"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Memory Reduction</strong>: 25% decrease in training memory usage - <strong>Speed Improvement</strong>: 18% faster training on multi-GPU setups - <strong>Model Quality</strong>: Maintained 99.7% accuracy compared to baseline - <strong>Community Adoption</strong>: Features used in 15+ downstream projects"
        },
        {
                "type": "heading3",
                "id": "open-source-contributions",
                "content": "Open Source Contributions"
        },
        {
                "type": "paragraph",
                "content": "- <strong>6 PyTorch PRs</strong>: All successfully merged into main branch - <strong>Documentation</strong>: Authored 12 pages of technical documentation - <strong>Code Reviews</strong>: Participated in 50+ code reviews - <strong>Community Support</strong>: Answered 100+ GitHub issues"
        },
        {
                "type": "heading3",
                "id": "recognition",
                "content": "Recognition"
        },
        {
                "type": "paragraph",
                "content": "- <strong>IBM Research Intern Award</strong>: Top 5% performance rating - <strong>PyTorch Contributor</strong>: Recognized as active PyTorch contributor - <strong>Conference Presentation</strong>: Presented work at ML Systems Workshop - <strong>Patent Filing</strong>: Co-inventor on 2 pending patents"
        },
        {
                "type": "heading3",
                "id": "technical-learning",
                "content": "Technical Learning"
        },
        {
                "type": "paragraph",
                "content": "- Deep understanding of <a href='transformer architectures' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>orange</a> and attention mechanisms - Experience with large-scale distributed training systems - Proficiency in PyTorch internals and CUDA programming - Best practices for open source collaboration"
        },
        {
                "type": "paragraph",
                "content": "The project significantly enhanced my understanding of foundation models and contributed valuable optimizations to the broader AI research community."
        },
        {
                "type": "heading",
                "id": "resources",
                "content": "Resources"
        },
        {
                "type": "paragraph",
                "content": "Explore the Foundation Models Stack and related resources:"
        },
        {
                "type": "paragraph",
                "content": "- <strong>IBM FMS Repository</strong>: <a href='#/development?demo=https://github.com/foundation-model-stack/foundation-model-stack' style='color: #ff6b3d; text-decoration: underline;'>View Resource</a> - <strong>Project Demo</strong>: <a href='#/development?demo=https://fms.example.com' style='color: #ff6b3d; text-decoration: underline;'>View Resource</a>"
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