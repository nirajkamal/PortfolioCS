import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TableOfContents } from "../components/blog/TableOfContents";
import { BlogContent, BlogContentBlock } from "../components/blog/BlogContent";

export function BuildingScalableMicroservicesPage() {
  // Blog post data generated from markdown
  const blogPost = {
    "title": "Building Scalable Microservices with Node.js",
    "category": "BACKEND",
    "date": "Oct 15, 2025",
    "readTime": "8 min read",
    "author": "Niraj Kamal K",
    "authorAvatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    "heroImage": "https://images.unsplash.com/photo-1593442257276-1895e27c8ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwODQ5MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "tags": [
        "Node.js",
        "Microservices",
        "Architecture",
        "Backend"
    ],
    "slug": "building-scalable-microservices"
};

  const tocItems = [
    {
        "title": "Introduction",
        "id": "introduction",
        "level": 2
    },
    {
        "title": "What Are Microservices?",
        "id": "what-are-microservices",
        "level": 2
    },
    {
        "title": "Key Benefits",
        "id": "benefits",
        "level": 3
    },
    {
        "title": "Architecture Overview",
        "id": "architecture",
        "level": 2
    },
    {
        "title": "Implementation Guide",
        "id": "implementation",
        "level": 2
    },
    {
        "title": "Best Practices",
        "id": "best-practices",
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
        "content": "In modern software development, microservices architecture has become the gold standard for building scalable, maintainable applications. This comprehensive guide will walk you through the process of designing and implementing a production-ready microservices system using Node.js."
    },
    {
        "type": "paragraph",
        "content": "Whether you're migrating from a monolithic architecture or starting fresh, understanding the core principles and best practices is crucial for success. We'll cover everything from basic concepts to advanced patterns that can handle millions of requests per day."
    },
    {
        "type": "quote",
        "content": "\"The microservices architecture isn't just about breaking down a monolith\u2014it's about building systems that can evolve independently while working together seamlessly.\" - Martin Fowler",
        "author": null
    },
    {
        "type": "heading",
        "content": "What Are Microservices?",
        "id": "what-are-microservices"
    },
    {
        "type": "paragraph",
        "content": "Microservices are an architectural approach where an application is composed of small, independent services that communicate over well-defined APIs. Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently."
    },
    {
        "type": "image",
        "content": "https://images.unsplash.com/photo-1593086784152-b060f8109e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzYwODg3MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "alt": "Microservices architecture diagram showing independent services"
    },
    {
        "type": "subheading",
        "content": "Key Benefits",
        "id": "benefits"
    },
    {
        "type": "paragraph",
        "content": "The microservices approach offers several compelling advantages: improved scalability through independent service scaling, enhanced fault isolation preventing cascade failures, technology flexibility allowing different tech stacks per service, and faster deployment cycles with independent release schedules."
    },
    {
        "type": "paragraph",
        "content": "Each microservice can be scaled independently based on demand. If your user authentication service is experiencing high load, you can scale just that service without affecting others."
    },
    {
        "type": "heading",
        "content": "Architecture Overview",
        "id": "architecture"
    },
    {
        "type": "paragraph",
        "content": "A well-designed microservices architecture consists of several key components: API Gateway for request routing, Service Registry for service discovery, Load Balancers for traffic distribution, and Message Queues for asynchronous communication. Let's examine each component in detail."
    },
    {
        "type": "code",
        "content": "// Example API Gateway setup with Express\nconst express = require('express');\nconst { createProxyMiddleware } = require('http-proxy-middleware');\n\nconst app = express();\n\n// Route requests to different microservices\napp.use('/api/users', createProxyMiddleware({ \n  target: 'http://user-service:3001',\n  changeOrigin: true \n}));\n\napp.use('/api/orders', createProxyMiddleware({ \n  target: 'http://order-service:3002',\n  changeOrigin: true \n}));\n\napp.listen(3000, () => {\n  console.log('API Gateway running on port 3000');\n});",
        "language": "javascript"
    },
    {
        "type": "heading",
        "content": "Implementation Guide",
        "id": "implementation"
    },
    {
        "type": "paragraph",
        "content": "When implementing microservices with Node.js, start by identifying service boundaries based on business domains. Each service should have a clear, single responsibility. Use frameworks like Express or Fastify for HTTP services, and consider message brokers like RabbitMQ or Kafka for event-driven communication."
    },
    {
        "type": "paragraph",
        "content": "Database strategy is crucial - follow the database-per-service pattern to ensure loose coupling. This means each microservice manages its own database, communicating with other services through APIs or events rather than direct database access."
    },
    {
        "type": "code",
        "content": "// Example microservice structure\nclass UserService {\n  constructor(database, eventBus) {\n    this.db = database;\n    this.eventBus = eventBus;\n  }\n\n  async createUser(userData) {\n    const user = await this.db.users.create(userData);\n    \n    // Publish event for other services\n    await this.eventBus.publish('user.created', {\n      userId: user.id,\n      email: user.email\n    });\n    \n    return user;\n  }\n}",
        "language": "javascript"
    },
    {
        "type": "heading",
        "content": "Best Practices",
        "id": "best-practices"
    },
    {
        "type": "paragraph",
        "content": "Implement comprehensive monitoring and logging from day one. Use distributed tracing tools like Jaeger or Zipkin to track requests across services. Implement circuit breakers with libraries like Opossum to handle service failures gracefully. Always use API versioning to maintain backwards compatibility."
    },
    {
        "type": "paragraph",
        "content": "Without proper monitoring, debugging distributed systems becomes nearly impossible. Implement structured logging with correlation IDs that flow through all service calls."
    },
    {
        "type": "quote",
        "content": "\"In a microservices architecture, observability isn't optional\u2014it's the only way to understand what's happening in your system.\"",
        "author": null
    },
    {
        "type": "paragraph",
        "content": "Security is paramount - implement authentication at the API Gateway level and use JWT tokens for service-to-service communication. Apply rate limiting to prevent abuse and use HTTPS for all external communications."
    },
    {
        "type": "heading",
        "content": "Conclusion",
        "id": "conclusion"
    },
    {
        "type": "paragraph",
        "content": "Building microservices with Node.js provides a powerful foundation for scalable applications. While the architecture introduces complexity, the benefits of independent scaling, fault isolation, and deployment flexibility make it worthwhile for systems that need to handle significant traffic and evolve over time."
    },
    {
        "type": "paragraph",
        "content": "Start small, focus on clear service boundaries, and gradually refine your architecture based on real-world usage patterns. Remember that microservices are a means to an end - always prioritize solving actual business problems over architectural purity."
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
                    <button className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono">
                      Twitter
                    </button>
                    <button className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono">
                      LinkedIn
                    </button>
                    <button className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono">
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
