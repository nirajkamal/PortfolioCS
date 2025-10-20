import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author: string;
  authorAvatar: string;
  slug?: string;
}

export function BlogCard({
  title,
  excerpt,
  date,
  image,
  category,
  author,
  authorAvatar,
  slug,
}: BlogCardProps) {
  return (
    <article className="bg-background border-2 border-border overflow-hidden group cursor-pointer hover:bg-secondary transition-colors">
      <div className="relative h-40 sm:h-48 overflow-hidden border-b-2 border-border">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background border-2 border-border font-mono text-xs">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="mb-3 font-bold">{title}</h3>
        <p 
          className="text-muted-foreground text-sm mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />

        {/* Author & Date */}
        <div className="flex items-center gap-2 sm:gap-3 pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
              <ImageWithFallback
                src={authorAvatar}
                alt={author}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-mono text-xs hidden sm:inline">{author}</span>
            <span className="font-mono text-xs sm:hidden">Niraj</span>
          </div>
          <span className="font-mono text-muted-foreground text-xs whitespace-nowrap">{date}</span>
        </div>

        {/* Read More Button */}
        <a
          href={slug ? `#/blog/${slug}` : '#/blog/sample-post'}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors font-mono text-xs inline-flex"
        >
          <span>Read article</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
}
