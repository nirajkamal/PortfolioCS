import { ArrowRight } from "lucide-react";
import { PageHeader } from "./shared/PageHeader";
import { BlogCard } from "./shared/BlogCard";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  author: string;
  authorAvatar: string;
}

export function Blogs() {
  const posts: BlogPost[] = [
    {
        "title": "Building Scalable Microservices with Node.js",
        "excerpt": "Learn how to design and implement <span style='color: #ff6b3d;'>microservices architecture</span> that can handle millions of requests with minimal latency.",
        "date": "Oct 15, 2025",
        "readTime": "8 min",
        "image": "https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA4OTc4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "category": "BACKEND",
        "author": "David Adler",
        "authorAvatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
        "title": "React Performance Optimization Techniques",
        "excerpt": "Discover <span style='color: #ff6b3d;'>advanced patterns</span> and techniques to make your React applications blazingly fast and responsive.",
        "date": "Oct 5, 2025",
        "readTime": "6 min",
        "image": "https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwODI4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "category": "FRONTEND",
        "author": "Nolan Sullivan",
        "authorAvatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
        "title": "TypeScript Best Practices for 2025",
        "excerpt": "A comprehensive guide to writing <span style='color: #ff6b3d;'>type-safe, maintainable code</span> with the latest TypeScript features.",
        "date": "Sep 28, 2025",
        "readTime": "10 min",
        "image": "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYwOTE4MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "category": "TYPESCRIPT",
        "author": "Sagar Batchu",
        "authorAvatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
        "title": "Designing Scalable Database Schemas",
        "excerpt": "Best practices for <span style='color: #ff6b3d;'>database design</span> that scales from startup to enterprise.",
        "date": "Sep 15, 2025",
        "readTime": "12 min",
        "image": "https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjA4OTc4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "category": "DATABASE",
        "author": "Ivan Gorshkov",
        "authorAvatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    }
];

  return (
    <section id="blog" className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="mb-8 sm:mb-12 flex items-end justify-between flex-wrap gap-4">
          <PageHeader label="WRITINGS" title="Latest Articles" />
          <a
            href="#/blog"
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono text-sm"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
