import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Highlight, themes } from "prism-react-renderer";

export interface BlogContentBlock {
  type: "heading" | "subheading" | "heading3" | "paragraph" | "image" | "video" | "gif" | "code" | "quote";
  content: string;
  id?: string;
  alt?: string;
  language?: string;
  author?: string; // For quotes
}

interface BlogContentProps {
  blocks: BlogContentBlock[];
}

export function BlogContent({ blocks }: BlogContentProps) {
  return (
    <div className="space-y-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                id={block.id}
                className="scroll-mt-24 border-l-4 border-foreground pl-4 text-3xl"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );

          case "subheading":
            return (
              <h3
                key={index}
                id={block.id}
                className="scroll-mt-24 border-l-2 border-muted-foreground pl-4 text-2xl"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );

          case "heading3":
            return (
              <h4
                key={index}
                id={block.id}
                className="scroll-mt-24 text-xl"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );

          case "paragraph":
            return (
              <p 
                key={index} 
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );

          case "quote":
            return (
              <blockquote 
                key={index} 
                className="border-l-4 border-accent-orange pl-6 pr-6 py-4 bg-secondary/50 italic"
              >
                <p 
                  className="text-lg mb-2"
                  dangerouslySetInnerHTML={{ __html: block.content }}
                />
                {block.author && (
                  <footer className="text-sm text-muted-foreground font-mono not-italic">
                    — {block.author}
                  </footer>
                )}
              </blockquote>
            );

          case "image":
          case "gif":
            return (
              <figure key={index} className="border-2 border-border overflow-hidden">
                <ImageWithFallback
                  src={block.content}
                  alt={block.alt || "Blog image"}
                  className="w-full h-auto"
                />
                {block.alt && (
                  <figcaption className="px-4 py-3 border-t-2 border-border bg-secondary font-mono text-xs text-muted-foreground">
                    {block.alt}
                  </figcaption>
                )}
              </figure>
            );

          case "video":
            return (
              <div key={index} className="border-2 border-border overflow-hidden">
                <video
                  src={block.content}
                  controls
                  className="w-full h-auto"
                  poster={block.alt}
                >
                  Your browser does not support the video tag.
                </video>
                {block.alt && (
                  <div className="px-4 py-3 border-t-2 border-border bg-secondary font-mono text-xs text-muted-foreground">
                    {block.alt}
                  </div>
                )}
              </div>
            );

          case "code":
            return (
              <div key={index} className="border-2 border-border overflow-hidden">
                <div className="px-4 py-2 bg-secondary border-b-2 border-border font-mono text-xs text-muted-foreground">
                  {block.language || "code"}
                </div>
                <Highlight
                  theme={themes.nightOwl}
                  code={block.content.trim()}
                  language={block.language || "javascript"}
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre 
                      className="p-6 overflow-x-auto text-sm" 
                      style={{
                        ...style,
                        backgroundColor: '#011627',
                      }}
                    >
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          <span className="inline-block w-8 text-right mr-4 text-muted-foreground select-none opacity-50">
                            {i + 1}
                          </span>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
