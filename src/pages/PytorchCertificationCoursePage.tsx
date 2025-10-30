import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TableOfContents } from "../components/blog/TableOfContents";
import { BlogContent, BlogContentBlock } from "../components/blog/BlogContent";
import { GiscusComments } from "../components/GiscusComments";

export function PytorchCertificationCoursePage() {
  // Blog post data generated from markdown
  const blogPost = {
    "title": "Contributing to PyTorch Foundation's Certification Training Course",
    "category": "MACHINE LEARNING",
    "date": "Oct 21, 2025",
    "readTime": "15 min read",
    "author": "Niraj Kamal K",
    "authorAvatar": "/Niraj_Photo.png",
    "heroImage": "/blogs/Pytorch_Course/10_21_2025_Reflection_Post/Neural_Network_diagram.png",
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
    "displayOrder": 3,
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
        "title": "Inspiration: The Snack-Sized Learning Approach",
        "id": "snack-inspiration",
        "level": 2
    },
    {
        "title": "Lab Structure and Flow",
        "id": "lab-structure",
        "level": 3
    },
    {
        "title": "Behind the Scenes",
        "id": "behind-scenes",
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
        "title": "Visualizing Model Architecture",
        "id": "visualizing-model",
        "level": 3
    },
    {
        "title": "Making DataLoaders Intuitive",
        "id": "making-dataloaders",
        "level": 3
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
    },
    {
        "title": "Appendix: The Lesson Common Pattern",
        "id": "appendix",
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
        "content": "During an internship at IBM Research in Summer 2025, under the guidance of <a href='https://www.linkedin.com/in/spzala/' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'><u>Sahdev Zala</u></a> and <a href='https://www.linkedin.com/in/brad-topol-6273536/' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'><u>Brad Topol</u></a> (both my mentors and manager), I contributed to the <a href='https://events.linuxfoundation.org/pytorch-conference/features-add-ons/training/#pytorch-associate-training' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'><u>PyTorch Foundation's official certification program</u></a> by designing and creating <strong>7 PyTorch labs</strong> as part of a larger training curriculum. These labs became core components of the PyTorch Associate Training course, officially offered at the PyTorch Conference 2025."
    },
    {
        "type": "paragraph",
        "content": "This course rethinks how deep learning is taught to beginners, making abstract PyTorch concepts concrete and accessible through <strong>visual illustrations and hands-on practice</strong>."
    },
    {
        "type": "quote",
        "content": "<strong>Note</strong>: All images and content shown in this blog post are drafts and early iterations from the design process. The final, polished versions of these materials are part of the official PyTorch Foundation Certification Course.",
        "author": null
    },
    {
        "type": "heading3",
        "content": "Inspiration: The Snack-Sized Learning Approach",
        "id": "snack-inspiration"
    },
    {
        "type": "paragraph",
        "content": "The structure and philosophy behind these labs were inspired by a project my other team-mates were working on - the <a href='https://github.com/ibm-granite-community/granite-snack-cookbook/blob/main/recipes/Fine_Tuning/FineTuning_with_Unsloth.ipynb' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'><u>Granite Snack Cookbook</u></a>, a collection of bite-sized, practical tutorials that break down complex AI concepts into digestible lessons. Each \"recipe\" in the Snack Cookbook focuses on a single concept with minimal code - typically just 1-2 code blocks per step - making it perfect for beginners who can feel overwhelmed by information density."
    },
    {
        "type": "paragraph",
        "content": "<a href='#appendix' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'><u>View the typical common pattern in Jupyter Labs \u2192</u></a>"
    },
    {
        "type": "paragraph",
        "content": "We adopted this same philosophy for the PyTorch labs: <strong>each lab contains 5-7 small, focused steps with just enough code to understand each concept, combined with detailed visual illustrations</strong>. This approach is especially beneficial for beginners because:"
    },
    {
        "type": "paragraph",
        "content": "- <strong>Lower cognitive load</strong>: Each step focuses on one core concept, reducing mental overhead. - <strong>Immediate reinforcement</strong>: Small code blocks paired with visuals help concepts stick. - <strong>Progressive scaffolding</strong>: Each lesson builds naturally on the previous one. - <strong>Practical examples</strong>: Every step is grounded in working code, not abstract theory."
    },
    {
        "type": "heading3",
        "content": "Jupyter Lab Structure and Flow",
        "id": "lab-structure"
    },
    {
        "type": "paragraph",
        "content": "Every lab follows a carefully designed flow that guides students through 5-7 structured steps. This image shows how each step is self-contained yet builds upon the previous one, ensuring no conceptual gaps. Each section includes just enough code to understand that particular concept, paired with visual explanations."
    },
    {
        "type": "heading",
        "content": "Behind the Scenes",
        "id": "behind-scenes"
    },
    {
        "type": "paragraph",
        "content": "The creation of these labs involved extensive design work, including Figma prototypes, storyboards, and iterative refinements. This behind-the-scenes process was crucial in ensuring each lab delivered maximum pedagogical value."
    },
    {
        "type": "image",
        "content": "/blogs/Pytorch_Course/10_21_2025_Reflection_Post/Lesson_design_storyboard_vs_actual_lesson_draft.png",
        "alt": "Lesson Design - Storyboard vs Preliminary Lesson Draft"
    },
    {
        "type": "paragraph",
        "content": "These design iterations ensured that the visuals, code examples, and explanations were optimized for learning. We refined the curriculum multiple times to achieve the best possible outcomes for students."
    },
    {
        "type": "paragraph",
        "content": "Throughout this process, a common structural pattern emerged across most lessons  -  a consistent flow that helped students build mental models of how PyTorch lessons should be organized and approached. This structural consistency made the curriculum coherent and predictable, turning what could be a chaotic learning journey into a guided, step\u2011by\u2011step progression."
    },
    {
        "type": "heading",
        "content": "The Problem with Abstract PyTorch Courses",
        "id": "the-problem"
    },
    {
        "type": "paragraph",
        "content": "Most PyTorch courses suffer from a critical flaw: <em>they're too abstract</em>. While seasoned developers can easily distinguish between general Python patterns and PyTorch-specific idioms, beginners often struggle with fundamental questions:"
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
        "content": "The solution: create <strong>bite-sized lessons with detailed visual illustrations</strong> that capture not just the code, but the critical details a beginner might miss. Each lab was designed to progressively build understanding, from foundational concepts to advanced techniques. Here are some examples of how this visual approach was implemented:"
    },
    {
        "type": "heading3",
        "content": "Visualizing Model Architecture",
        "id": "visualizing-model"
    },
    {
        "type": "paragraph",
        "content": "One of the key differences was showing <strong>exactly how and why</strong> we define models as classes. The illustration breaks down: - The inheritance from `nn.Module` and why it matters. - The purpose of `__init__()` and `super().__init__()`. - How layers are defined and registered. - The forward pass implementation. - A visual intuition that model layers are initiated in `__init__` and connected in `forward()`."
    },
    {
        "type": "paragraph",
        "content": "This visual approach helps beginners understand the pattern rather than just copying code."
    },
    {
        "type": "heading3",
        "content": "Making DataLoaders Intuitive (Preliminary drafts of visual aids for the lessons)",
        "id": "making-dataloaders"
    },
    {
        "type": "paragraph",
        "content": "DataLoaders can be confusing for beginners. The visual approach explains the core concepts through detailed illustrations:"
    },
    {
        "type": "paragraph",
        "content": "The first visualization breaks down the batching process - one of the most critical concepts beginners struggle with: - What a DataLoader actually does under the hood? - How batching works and why it's essential for training efficiency? - The step-by-step process of converting individual samples into batches. - Why batch sizes matter for both memory and convergence?"
    },
    {
        "type": "paragraph",
        "content": "Visualizations of a broader view of the DataLoader: - The relationship between Dataset and DataLoader. - How shuffling works and when to use it? - Multi-worker data loading for performance. - Pin memory optimization for GPU training."
    },
    {
        "type": "heading",
        "content": "Official Launch at PyTorch Conference",
        "id": "pytorch-conference"
    },
    {
        "type": "paragraph",
        "content": "The course was officially launched at the <a href='https://events.linuxfoundation.org/pytorch-conference/' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'><u>PyTorch Conference 2025</u></a> as part of PyTorch Foundation's certification pathway. The full-day training program covers these 7 labs along with additional modules, all delivered with instructor-led guidance and hands-on practice."
    },
    {
        "type": "image",
        "content": "/blogs/Pytorch_Course/10_21_2025_Reflection_Post/course_launch_at_pytorch_conference.png",
        "alt": "Course Launch at PyTorch Conference"
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
        "content": "<strong>Learn more</strong>: <a href='https://events.linuxfoundation.org/pytorch-conference/features-add-ons/training/#pytorch-associate-training' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'><u>PyTorch Associate Training</u></a>"
    },
    {
        "type": "heading",
        "content": "Impact and Reflection",
        "id": "impact"
    },
    {
        "type": "paragraph",
        "content": "Creating this certification course under the mentorship of Sahdev Zala and Brad Topol provided valuable lessons about <strong>education and technical communication</strong>:"
    },
    {
        "type": "heading3",
        "content": "Visual Learning is Powerful",
        "id": "visual-learning-is-powerful"
    },
    {
        "type": "paragraph",
        "content": "Complex concepts become accessible when paired with clear, detailed illustrations. A well-designed diagram can replace paragraphs of explanation."
    },
    {
        "type": "heading3",
        "content": "Assume Nothing",
        "id": "assume-nothing"
    },
    {
        "type": "paragraph",
        "content": "What seems obvious to an expert is often opaque to a beginner. Explicitly explaining the \"why\" behind every pattern and convention is essential."
    },
    {
        "type": "heading3",
        "content": "Progressive Complexity",
        "id": "progressive-complexity"
    },
    {
        "type": "paragraph",
        "content": "Starting simple and building incrementally ensures each new concept has a clear foundation in what came before. This approach reduces cognitive load and builds confidence."
    },
    {
        "type": "heading3",
        "content": "Hands-On Practice Matters",
        "id": "hands-on-practice-matters"
    },
    {
        "type": "paragraph",
        "content": "Reading about neural networks is valuable, but building them from scratch cements understanding. Every lesson includes practical exercises that reinforce concepts."
    },
    {
        "type": "paragraph",
        "content": "Seeing these labs become part of PyTorch Foundation's official certification program - and knowing they'll help thousands of developers enter the field of deep learning - is incredibly rewarding."
    },
    {
        "type": "heading",
        "content": "Beyond the Certification Course",
        "id": "beyond-certification"
    },
    {
        "type": "paragraph",
        "content": "While the certification curriculum was a part of my internship, it represented only about one-third of my contributions. During the same period, I tackled other projects:"
    },
    {
        "type": "heading3",
        "content": "2nd Place in PyTorch Docathon",
        "id": "2nd-place-in-pytorch-docathon"
    },
    {
        "type": "paragraph",
        "content": "I participated in PyTorch Foundation's Docathon and placed <strong>2nd in the competition</strong>. This involved creating comprehensive documentation and educational content to help developers better understand PyTorch's capabilities. I also helped in software development around the sphynx documentation framework."
    },
    {
        "type": "heading3",
        "content": "IBM Foundation Models Stack Contribution",
        "id": "ibm-foundation-models-stack-contribution"
    },
    {
        "type": "paragraph",
        "content": "I contributed to IBM's Foundation Models Stack with a <strong>PR for supporting prefill and decode steps for decoder-only LLMs</strong>. This work involved understanding the nuances of different LLM architectures and implementing features that enable more flexible model inference patterns. This experience with production-grade deep learning systems enriched my perspective on teaching PyTorch - I understood not just the basics, but how these concepts scale in real-world systems."
    },
    {
        "type": "paragraph",
        "content": "These parallel contributions meant working across multiple areas of deep learning infrastructure simultaneously. This breadth gave me unique insights into how PyTorch fits into the larger ecosystem and informed how I explained concepts to students."
    },
    {
        "type": "heading",
        "content": "Appendix: The Lesson Common Pattern",
        "id": "appendix"
    },
    {
        "type": "image",
        "content": "/blogs/Pytorch_Course/10_21_2025_Reflection_Post/Lesson_common_pattern.png",
        "alt": "Lesson Common Pattern",
        "width": "50%"
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
        <div className="max-w-7xl mx-auto px-8 py-12 pt-8">
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

      {/* Comments Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="mb-8 inline-block border-2 border-border px-6 py-4 bg-background shadow-retro">
            <p className="font-mono text-muted-foreground mb-2">// DISCUSSION</p>
            <h2 className="font-bold">Comments</h2>
          </div>
          <div className="mt-8">
            <GiscusComments />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
