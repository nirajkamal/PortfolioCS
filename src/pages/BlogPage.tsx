import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/shared/PageHeader";
import { BlogCard } from "../components/shared/BlogCard";
import { CategoryFilters } from "../components/shared/CategoryFilters";
import { PaginationControls } from "../components/shared/PaginationControls";
import { BLOG_INDEX, BlogMeta } from "./BlogIndex";

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
}

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Convert blog index to BlogPost format
  const convertBlogMetaToBlogPost = (meta: BlogMeta): BlogPost => ({
    title: meta.title,
    excerpt: `${meta.title} - ${meta.tags.slice(0, 3).join(', ')}`, // Generate excerpt from title and tags
    date: meta.date,
    readTime: meta.readTime,
    image: meta.heroImage || 'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    category: meta.category,
    author: meta.author,
    authorAvatar: meta.authorAvatar,
    slug: meta.slug
  });

  // Get all blog posts from the generated index
  const allPosts: BlogPost[] = BLOG_INDEX.map(entry => convertBlogMetaToBlogPost(entry.meta));

  // Add some placeholder posts if we don't have enough
  const placeholderPosts: BlogPost[] = [
    {
      title: "Design Systems: Creating Consistency at Scale",
      excerpt: "Exploring how to build and maintain a cohesive design system that ensures consistency across your entire product ecosystem.",
      date: "October 8, 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwODI4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "DESIGN",
      author: "Niraj Kamal K",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      title: "Getting Started with Component-Driven Development",
      excerpt: "A beginner's guide to building scalable applications with reusable components and modern JavaScript frameworks.",
      date: "October 1, 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYwOTE4MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "TUTORIALS",
      author: "Niraj Kamal K",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  ];

  // Combine real posts with placeholders
  const combinedPosts = [...allPosts, ...placeholderPosts];

  // Get unique categories from all posts
  const categories = ["ALL", ...Array.from(new Set(combinedPosts.map(post => post.category)))];

  // Filter posts by category
  const filteredPosts = selectedCategory === "ALL" 
    ? combinedPosts 
    : combinedPosts.filter(post => post.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Featured post (first real blog post or first post)
  const featuredPost = combinedPosts[0];

  return (
    <div className="size-full relative">
      <Header />
      
      {/* Featured Blog Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
          <PageHeader label="INSIGHTS" title="Blog" />
          
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Thoughts on web development, design, and building great products. More posts coming soon.
          </p>

          {/* Single Featured Post */}
          <div className="border-2 border-border shadow-retro bg-background">
            <article className="overflow-hidden group cursor-pointer hover:bg-secondary transition-colors">
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden border-b-2 border-border">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background border-2 border-border font-mono text-xs sm:text-sm">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <h2 className="mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-3 sm:gap-4 pb-6 mb-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                      <ImageWithFallback
                        src={featuredPost.authorAvatar}
                        alt={featuredPost.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-mono text-xs hidden sm:inline">{featuredPost.author}</span>
                    <span className="font-mono text-xs sm:hidden">Niraj</span>
                  </div>
                  <span className="font-mono text-muted-foreground text-xs whitespace-nowrap">{featuredPost.date}</span>
                </div>
                <a
                  href={featuredPost.slug ? `#/blog/${featuredPost.slug}` : '#/blog/featured'}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors font-mono text-xs sm:text-sm inline-flex"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
          <div className="mb-8 sm:mb-12">
            <div className="section-header px-4 py-2 inline-block mb-8">
              <h3 className="font-mono">// ALL POSTS</h3>
            </div>
            <p className="font-mono text-muted-foreground mb-6">Browse by category:</p>
            <CategoryFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={(category) => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {paginatedPosts.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))}
              </div>

              {totalPages > 1 && (
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div className="text-center py-12 border-2 border-border">
              <p className="text-muted-foreground font-mono">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
