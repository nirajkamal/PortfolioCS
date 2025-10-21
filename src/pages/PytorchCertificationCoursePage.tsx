import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TableOfContents } from "../components/blog/TableOfContents";
import { BlogContent, BlogContentBlock } from "../components/blog/BlogContent";

export function PytorchCertificationCoursePage() {
  // Blog post data generated from markdown
  const blogPost = {
    "title": "Building PyTorch Foundation's Official Certification Course",
    "category": "MACHINE LEARNING",
    "date": "Oct 21, 2025",
    "readTime": "10 min read",
    "author": "Niraj Kamal K",
    "authorAvatar": "/Niraj_Photo.png",
    "heroImage": "/src/assets/blogs/Pytorch_Course/10_21_2025_Reflection_Post/Neural_Network_diagram.png",
    "tags": [
        "PyTorch",
        "Deep Learning",
        "Education",
        "IBM Research",
        "Certification"
    ],
    "slug": "pytorch-certification-course",
    "excerpt": "How I designed 7 hands-on PyTorch labs for the official PyTorch Foundation Certification program during my internship at IBM Research, making deep learning accessible through visual illustrations and practical examples.",
    "featuredOnHome": true,
    "featuredOnBlog": true,
    "displayOrder": 0,
    "external": false,
    "externalUrl": null
};

  const tocItems = [
    {
        "title": "Introduction",
        "id": "introduction",
        "level": 2
    },
    {
        "title": "The Problem with Abstract PyTorch Courses",
        "id": "the-problem",
        "level": 2
    },
    {
        "title": "A Visual, Beginner-Friendly Approach",
        "id": "visual-approach",
        "level": 2
    },
    {
        "title": "The Seven Labs",
        "id": "seven-labs",
        "level": 2
    },
    {
        "title": "Official Launch at PyTorch Conference",
        "id": "pytorch-conference",
        "level": 2
    },
    {
        "title": "Impact and Reflection",
        "id": "impact",
        "level": 2
    }
];

  const contentBlocks: BlogContentBlock[] = [
    {
        "type": "heading",
        "content": "Introduction",
        "id": "introduction"
    },
    {
        "type": "paragraph",
        "content": "During an internship at IBM Research in Summer 2025, this project contributed to the <span style='color: #ff6b3d;'>PyTorch Foundation's official certification program</span> by designing and creating <span style='color: #ff6b3d;'>7 PyTorch labs</span> as part of a larger training curriculum. These labs became core components of the PyTorch Associate Training course, officially offered at the PyTorch Conference 2025."
    },
    {
        "type": "paragraph",
        "content": "This wasn't just another tutorial series\u2014it fundamentally rethought how deep learning is taught to beginners, making the abstract concepts of PyTorch concrete and accessible through visual illustrations and hands-on practice."
    },
    {
        "type": "heading",
        "content": "The Problem with Abstract PyTorch Courses",
        "id": "the-problem"
    },
    {
        "type": "paragraph",
        "content": "Most PyTorch courses suffer from a critical flaw: <span style='color: #ff6b3d;'>they're too abstract</span>. While seasoned developers can easily distinguish between general Python patterns and PyTorch-specific idioms, beginners often struggle with fundamental questions:"
    },
    {
        "type": "paragraph",
        "content": "- <strong>Why is a neural network model defined in a class rather than a function?</strong> - <strong>What's the significance of inheriting from `nn.Module`?</strong> - <strong>Why do we need to call `super().__init__()`?</strong> - <strong>How does the forward pass actually work?</strong>"
    },
    {
        "type": "paragraph",
        "content": "These aren't trivial questions. They represent the conceptual gap between knowing Python and truly understanding PyTorch's design philosophy. Traditional courses often gloss over these details, assuming students will figure them out through practice. That assumption leaves many beginners frustrated and confused."
    },
    {
        "type": "heading",
        "content": "A Visual, Beginner-Friendly Approach",
        "id": "visual-approach"
    },
    {
        "type": "paragraph",
        "content": "The solution: create <span style='color: #ff6b3d;'>bite-sized lessons with detailed visual illustrations</span> that capture not just the code, but the critical details a beginner might miss. Each lab was designed to progressively build understanding, from foundational concepts to advanced techniques."
    },
    {
        "type": "image",
        "content": "/src/assets/blogs/Pytorch_Course/10_21_2025_Reflection_Post/lab_structuree.png",
        "alt": "Lab Structure"
    },
    {
        "type": "paragraph",
        "content": "Every lab follows a carefully designed flow that guides students through the learning process step by step. Each section builds upon the previous one, ensuring no conceptual gaps."
    },
    {
        "type": "image",
        "content": "/src/assets/blogs/Pytorch_Course/10_21_2025_Reflection_Post/code_model_class.png",
        "alt": "Model Class Definition"
    },
    {
        "type": "paragraph",
        "content": "One of the key innovations was showing <span style='color: #ff6b3d;'>exactly how and why</span> we define models as classes. The illustration breaks down: - The inheritance from `nn.Module` and why it matters - The purpose of `__init__()` and `super().__init__()` - How layers are defined and registered - The forward pass implementation"
    },
    {
        "type": "paragraph",
        "content": "This visual approach helps beginners understand the pattern rather than just copying code."
    },
    {
        "type": "image",
        "content": "/src/assets/blogs/Pytorch_Course/10_21_2025_Reflection_Post/Dataloader_explanation.png",
        "alt": "DataLoader Explanation"
    },
    {
        "type": "paragraph",
        "content": "DataLoaders can be confusing for beginners. The visual approach explains: - What a DataLoader actually does - The batching process and why it matters - How shuffling works - The relationship between Dataset and DataLoader"
    },
    {
        "type": "image",
        "content": "/src/assets/blogs/Pytorch_Course/10_21_2025_Reflection_Post/Neural_Network_diagram.png",
        "alt": "Neural Network Diagram"
    },
    {
        "type": "paragraph",
        "content": "Understanding the neural network structure is crucial. The diagrams show: - Layer-by-layer architecture - Data flow through the network - Input/output dimensions at each layer - Activation functions and their placement"
    },
    {
        "type": "paragraph",
        "content": "These visual aids transform abstract concepts into concrete understanding."
    },
    {
        "type": "heading",
        "content": "The Seven Labs",
        "id": "seven-labs"
    },
    {
        "type": "paragraph",
        "content": "As part of the PyTorch Associate Training program, 7 labs were created focusing on core PyTorch competencies. These labs complement additional content created by other contributors to form the complete certification curriculum."
    },
    {
        "type": "paragraph",
        "content": "The 7 labs designed for this project are:"
    },
    {
        "type": "paragraph",
        "content": "<strong>1. Intro to PyTorch</strong>"
    },
    {
        "type": "paragraph",
        "content": "<strong>2. Building Neural Networks with PyTorch</strong>"
    },
    {
        "type": "paragraph",
        "content": "<strong>3. Benchmarking Models</strong>"
    },
    {
        "type": "paragraph",
        "content": "<strong>4. Leveraging Automatic Mixed Precision for Training and Inference</strong>"
    },
    {
        "type": "paragraph",
        "content": "<strong>5. Activation Functions for Models</strong>"
    },
    {
        "type": "paragraph",
        "content": "<strong>6. Creating Neural Network Checkpoints</strong>"
    },
    {
        "type": "paragraph",
        "content": "<strong>7. Advanced Training Techniques</strong>"
    },
    {
        "type": "paragraph",
        "content": "Each lab includes detailed illustrations, step-by-step walkthroughs, and practical exercises that reinforce the concepts. These 7 labs form a core part of the full certification program, which includes additional modules created by other instructors."
    },
    {
        "type": "heading",
        "content": "Official Launch at PyTorch Conference",
        "id": "pytorch-conference"
    },
    {
        "type": "paragraph",
        "content": "The course was officially launched at the <span style='color: #ff6b3d;'>PyTorch Conference 2025</span> as part of PyTorch Foundation's certification pathway. The full-day training program covers these 7 labs along with additional modules, all delivered with instructor-led guidance and hands-on practice."
    },
    {
        "type": "paragraph",
        "content": "<strong>Course Details:</strong> - <strong>Format</strong>: In-person, instructor-led training - <strong>Duration</strong>: Full day (8:30am \u2013 4:30pm) - <strong>Includes</strong>: Course materials, hands-on labs, and certification exam voucher"
    },
    {
        "type": "paragraph",
        "content": "The comprehensive curriculum was designed to prepare students for the PyTorch Certified Associate (PTCA) exam while providing practical skills for real-world deep learning projects."
    },
    {
        "type": "paragraph",
        "content": "<strong>Learn more</strong>: <a href='https://events.linuxfoundation.org/pytorch-conference/features-add-ons/training/#pytorch-associate-training' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>PyTorch Associate Training</a>"
    },
    {
        "type": "heading",
        "content": "Impact and Reflection",
        "id": "impact"
    },
    {
        "type": "paragraph",
        "content": "Creating this certification course provided valuable lessons about <span style='color: #ff6b3d;'>education and technical communication</span>:"
    },
    {
        "type": "paragraph",
        "content": "Seeing these labs become part of PyTorch Foundation's official certification program\u2014and knowing they'll help thousands of developers enter the field of deep learning\u2014is incredibly rewarding. The future of AI depends on making powerful tools like PyTorch accessible to everyone."
    }
];

  return (
    <div className="size-full relative">
      <Header />

      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-8 py-20">
          {/* Back Button */}
          <a
            href="#/blog"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
            onClick={() => {
              // Scroll to top when going back to blog list
              setTimeout(() => window.scrollTo(0, 0), 10);
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </a>

          {/* Boxed Hero Content */}
          <div className="border-2 border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column - Hero Image (Optional) */}
              {blogPost.heroImage && (
                <div className="lg:col-span-5 bg-background border-r border-b border-border lg:border-b-0">
                  <div className="relative h-full min-h-[250px] lg:min-h-[400px]">
                    <ImageWithFallback
                      src={blogPost.heroImage}
                      alt={blogPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Right Column - Post Info */}
              <div className={`${blogPost.heroImage ? 'lg:col-span-7' : 'lg:col-span-12'} bg-background p-6 md:p-12`}>
                <div className="space-y-6 md:space-y-8">
                  {/* Category & Meta Info */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <span className="px-4 py-2 border-2 border-border bg-background font-mono text-sm inline-block w-fit">
                        {blogPost.category}
                      </span>
                      <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{blogPost.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{blogPost.readTime}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl">{blogPost.title}</h1>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border">
                      <ImageWithFallback
                        src={blogPost.authorAvatar}
                        alt={blogPost.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">Written by</p>
                      <p>{blogPost.author}</p>
                    </div>
                  </div>

                  {/* Tags Section */}
                  <div className="-mx-12 px-12 border-t border-border pt-8">
                    <p className="font-mono text-muted-foreground mb-4">// TAGS</p>
                    <div className="flex flex-wrap gap-2">
                      {blogPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border-2 border-border font-mono text-sm bg-background hover:bg-secondary transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
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
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents - Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-9">
              <div className="bg-background p-4 rounded-lg">
                <BlogContent blocks={contentBlocks} />

                {/* Share Section */}
                <div className="mt-16 pt-8 border-t-2 border-border">
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    // SHARE THIS ARTICLE
                  </p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => {
                        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(blogPost.title)}&url=${encodeURIComponent(window.location.href)}`;
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }}
                      className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
                    >
                      Twitter
                    </button>
                    <button 
                      onClick={() => {
                        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }}
                      className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
                    >
                      LinkedIn
                    </button>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href).then(() => {
                          alert('Link copied to clipboard!');
                        }).catch(err => {
                          console.error('Failed to copy link:', err);
                        });
                      }}
                      className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
