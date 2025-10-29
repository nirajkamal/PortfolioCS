import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TableOfContents } from "../components/blog/TableOfContents";
import { BlogContent, BlogContentBlock } from "../components/blog/BlogContent";
import { GiscusComments } from "../components/GiscusComments";

export function ReactPerformanceOptimizationPage() {
  // Blog post data generated from markdown
  const blogPost = {
    "title": "React Performance Optimization Techniques",
    "category": "FRONTEND",
    "date": "Oct 5, 2025",
    "readTime": "6 min read",
    "author": "Niraj Kamal K",
    "authorAvatar": "/Niraj_Photo.png",
    "heroImage": "https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwODI4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "tags": [
        "React",
        "Performance",
        "Optimization",
        "Frontend"
    ],
    "slug": "react-performance-optimization",
    "excerpt": "Discover advanced patterns and techniques to make your React applications blazingly fast and responsive.",
    "featuredOnHome": false,
    "featuredOnBlog": false,
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
        "title": "Understanding React Rendering",
        "id": "understanding-rendering",
        "level": 2
    },
    {
        "title": "Memoization Techniques",
        "id": "memoization",
        "level": 2
    },
    {
        "title": "Code Splitting",
        "id": "code-splitting",
        "level": 2
    },
    {
        "title": "Virtual DOM Optimization",
        "id": "virtual-dom",
        "level": 2
    },
    {
        "title": "Conclusion",
        "id": "conclusion",
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
        "content": "React applications can become slow as they grow in complexity. Understanding <a href='performance optimization' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>orange</a> techniques is crucial for maintaining a smooth user experience. In this guide, we'll explore advanced patterns and techniques to make your React applications blazingly fast and responsive."
    },
    {
        "type": "paragraph",
        "content": "Performance optimization isn't just about making things faster - it's about creating better user experiences and reducing resource consumption."
    },
    {
        "type": "heading",
        "content": "Understanding React Rendering",
        "id": "understanding-rendering"
    },
    {
        "type": "paragraph",
        "content": "React's rendering process is the foundation of performance optimization. Every component re-render has a cost, and understanding when and why components re-render is essential for optimization."
    },
    {
        "type": "code",
        "content": "// Bad: Creates new object on every render\nfunction MyComponent({ data }) {\n  const style = { color: 'red', fontSize: '16px' };\n  return <div style={style}>{data.title}</div>;\n}\n\n// Good: Move static objects outside component\nconst STATIC_STYLE = { color: 'red', fontSize: '16px' };\n\nfunction MyComponent({ data }) {\n  return <div style={STATIC_STYLE}>{data.title}</div>;\n}",
        "language": "javascript"
    },
    {
        "type": "code",
        "content": "\n## Memoization Techniques {#memoization}\n\nReact provides several built-in memoization hooks that can dramatically improve performance when used correctly.\n\n### React.memo for Component Memoization\n",
        "language": "text"
    },
    {
        "type": "code",
        "content": "// Wrap components to prevent unnecessary re-renders\nconst ExpensiveComponent = React.memo(({ data, onUpdate }) => {\n  const processedData = useMemo(() => {\n    return data.map(item => ({\n      ...item,\n      processed: true\n    }));\n  }, [data]);\n\n  return (\n    <div>\n      {processedData.map(item => (\n        <div key={item.id}>{item.name}</div>\n      ))}\n    </div>\n  );\n});",
        "language": "javascript"
    },
    {
        "type": "code",
        "content": "\n### useMemo and useCallback\n\nUse `useMemo` for expensive calculations and `useCallback` for stable function references.\n\n> \"Premature optimization is the root of all evil, but when you do optimize, make sure you're optimizing the right things.\" - Donald Knuth\n\n## Code Splitting {#code-splitting}\n\nSplit your application into smaller chunks that load on demand. This reduces the initial bundle size and improves loading times.\n",
        "language": "text"
    },
    {
        "type": "code",
        "content": "// Dynamic imports with React.lazy\nconst Dashboard = React.lazy(() => import('./Dashboard'));\nconst Profile = React.lazy(() => import('./Profile'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <Routes>\n        <Route path=\"/dashboard\" element={<Dashboard />} />\n        <Route path=\"/profile\" element={<Profile />} />\n      </Routes>\n    </Suspense>\n  );\n}",
        "language": "javascript"
    },
    {
        "type": "code",
        "content": "\n## Virtual DOM Optimization {#virtual-dom}\n\nUnderstanding how React's Virtual DOM works helps you write more efficient components. Always provide stable keys for lists and avoid creating new objects in render methods.\n",
        "language": "text"
    },
    {
        "type": "code",
        "content": "// Bad: Index as key can cause performance issues\n{items.map((item, index) => (\n  <Item key={index} data={item} />\n))}\n\n// Good: Use stable, unique identifiers\n{items.map(item => (\n  <Item key={item.id} data={item} />\n))}",
        "language": "javascript"
    },
    {
        "type": "code",
        "content": "\n## Conclusion {#conclusion}\n\nReact performance optimization is an ongoing process. Start by measuring performance with React DevTools Profiler, identify bottlenecks, and apply the appropriate optimization techniques. Remember that [orange](premature optimization) can lead to complex code without significant benefits.\n\nFocus on user-perceived performance and measure the impact of your optimizations. The best optimization is often the simplest one that solves the actual problem.",
        "language": "text"
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
