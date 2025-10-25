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
  slug?: string;
  linkType?: 'internal' | 'external';
  linkUrl?: string;
}

export function Blogs() {
  const posts: BlogPost[] = [
        {
                "title": "Building PyTorch Foundation's Official Certification Course",
                "excerpt": "How I designed 7 hands-on PyTorch labs for the official PyTorch Foundation Certification program during my internship at IBM Research, making deep learning accessible through visual illustrations and practical examples.",
                "date": "Oct 21, 2025",
                "readTime": "10 min read",
                "image": "/blogs/Pytorch_Course/10_21_2025_Reflection_Post/Neural_Network_diagram.png",
                "category": "MACHINE LEARNING",
                "author": "Niraj Kamal K",
                "authorAvatar": "/Niraj_Photo.png",
                "slug": "pytorch-certification-course",
                "linkType": "internal",
                "linkUrl": "#/blog/pytorch-certification-course"
        },
        {
                "title": "Deep Learning Fundamentals: A Complete Guide",
                "excerpt": "A comprehensive guide to understanding deep learning fundamentals, from neural networks to advanced architectures like transformers and CNNs.",
                "date": "Oct 18, 2025",
                "readTime": "12 min read",
                "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
                "category": "MACHINE LEARNING",
                "author": "Niraj Kamal K",
                "authorAvatar": "/Niraj_Photo.png",
                "slug": "deep-learning-on-medium",
                "linkType": "external",
                "linkUrl": "https://medium.com/@yourusername/deep-learning-fundamentals"
        },
        {
                "title": "Building Scalable Microservices with Node.js",
                "excerpt": "Learn how to design and implement microservices architecture that can handle millions of requests with minimal latency.",
                "date": "Oct 15, 2025",
                "readTime": "8 min read",
                "image": "https://images.unsplash.com/photo-1593442257276-1895e27c8ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwODQ5MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
                "category": "BACKEND",
                "author": "Niraj Kamal K",
                "authorAvatar": "/Niraj_Photo.png",
                "slug": "building-scalable-microservices",
                "linkType": "internal",
                "linkUrl": "#/blog/building-scalable-microservices"
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
