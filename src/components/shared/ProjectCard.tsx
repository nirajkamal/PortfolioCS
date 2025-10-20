import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category?: string;
  year?: string;
  index: number;
  imageHeight?: string;
  slug?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  category,
  year,
  index,
  imageHeight = "h-48 sm:h-48",
  slug,
}: ProjectCardProps) {
  return (
    <article className="bg-background border-2 border-border overflow-hidden group cursor-pointer hover:bg-secondary transition-colors">
      <div className={`relative ${imageHeight} overflow-hidden border-b-2 border-border`}>
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
        />
        {category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-background border-2 border-border font-mono text-xs">
              {category}
            </span>
          </div>
        )}
        {year && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-background border-2 border-border font-mono text-xs">
              {year}
            </span>
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold">{title}</h3>
          <span className="font-mono text-muted-foreground text-xs ml-2 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p 
          className="text-muted-foreground text-sm mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-border font-mono text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3 font-mono flex-wrap">
          {slug && (
            <a
              href={`#/project/${slug}`}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs"
            >
              <span>View Details</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-border hover:bg-foreground hover:text-background transition-colors text-xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
