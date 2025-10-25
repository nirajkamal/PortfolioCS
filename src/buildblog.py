#!/usr/bin/env python3
"""
Blog Generator - Converts blog markdown files to React components
Usage: python buildblog.py
"""

import re
import json
from pathlib import Path
import os


def parse_styled_text(text):
    """Parse text for orange styling and links (reuse from build.py)"""
    if not text:
        return text
    
    # Replace **bold** with bold styled span
    text = re.sub(r'\*\*(.*?)\*\*', r"<strong>\1</strong>", text)
    
    # Replace [orange](text) with orange styled span
    text = re.sub(r'\[orange\]\((.*?)\)', r"<span style='color: #ff6b3d;'>\1</span>", text)
    
    # Replace [comment](text) with comment-style text
    text = re.sub(r'\[comment\]\((.*?)\)', r"<span className='font-mono text-muted-foreground text-sm'>// \1</span>", text)
    
    # Replace [link](url) with regular links
    text = re.sub(r'\[link\]\((.*?)\)', r"<a href='\1' target='_blank' rel='noopener noreferrer' style='text-decoration: underline;'>\1</a>", text)
    
    # Replace [orange-link](url) with orange styled links
    text = re.sub(r'\[orange-link\]\((.*?)\)', r"<a href='\1' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>\1</a>", text)
    
    # Replace [text](url) with links (standard markdown link syntax)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r"<a href='\2' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>\1</a>", text)
    
    return text


def parse_blog_markdown(content):
    """Parse blog markdown file"""
    lines = content.split('\n')
    i = 0
    
    # Initialize blog data
    blog_data = {
        'meta': {},
        'toc': [],
        'content_blocks': []
    }
    
    while i < len(lines):
        line = lines[i].strip()
        
        # Parse META section
        if line == '---META---':
            i += 1
            while i < len(lines) and not lines[i].strip().startswith('---'):
                meta_line = lines[i].strip()
                if ':' in meta_line:
                    key, value = meta_line.split(':', 1)
                    key = key.strip()
                    value = value.strip()
                    
                    # Handle arrays
                    if key == 'tags':
                        blog_data['meta'][key] = [tag.strip() for tag in value.split(',')]
                    # Handle booleans
                    elif value.lower() in ['true', 'false']:
                        blog_data['meta'][key] = value.lower() == 'true'
                    # Handle numbers
                    elif value.isdigit():
                        blog_data['meta'][key] = int(value)
                    else:
                        blog_data['meta'][key] = value
                i += 1
        
        # Parse TOC section
        elif line == '---TOC---':
            i += 1
            while i < len(lines) and not lines[i].strip().startswith('---'):
                toc_line = lines[i].strip()
                if toc_line.startswith('-'):
                    toc_parts = toc_line[1:].strip().split('|')
                    if len(toc_parts) >= 3:
                        blog_data['toc'].append({
                            'title': toc_parts[0].strip(),
                            'id': toc_parts[1].strip(),
                            'level': int(toc_parts[2].strip())
                        })
                i += 1
        
        # Parse content sections
        elif line.startswith('##'):
            # Extract heading with id
            heading_match = re.match(r'^(#{1,6})\s*(.*?)\s*\{#([^}]+)\}$', line)
            if heading_match:
                level = len(heading_match.group(1))
                title = heading_match.group(2).strip()
                heading_id = heading_match.group(3)
                
                if level == 2:
                    content_type = 'heading'
                elif level == 3:
                    content_type = 'subheading'
                else:
                    content_type = 'heading3'
                
                blog_data['content_blocks'].append({
                    'type': content_type,
                    'id': heading_id,
                    'content': title
                })
            i += 1
            
        # Parse paragraphs
        elif line and not line.startswith(('#', '>', '```', '![', '---')):
            paragraph_lines = [line]
            i += 1
            # Collect continuation lines
            while i < len(lines) and lines[i].strip() and not lines[i].strip().startswith(('#', '>', '```', '![', '---')):
                paragraph_lines.append(lines[i].strip())
                i += 1
            
            content = ' '.join(paragraph_lines)
            blog_data['content_blocks'].append({
                'type': 'paragraph',
                'content': parse_styled_text(content)
            })
            i -= 1  # Back up one since we advanced
        
        # Parse quotes
        elif line.startswith('>'):
            quote_lines = []
            author = None
            
            # Collect quote lines
            while i < len(lines) and lines[i].strip().startswith('>'):
                quote_line = lines[i].strip()[1:].strip()
                if quote_line.startswith('-'):
                    author = quote_line[1:].strip()
                else:
                    quote_lines.append(quote_line)
                i += 1
            
            if quote_lines:
                blog_data['content_blocks'].append({
                    'type': 'quote',
                    'content': ' '.join(quote_lines),
                    'author': author
                })
            i -= 1
        
        # Parse code blocks
        elif line.startswith('```'):
            language = line[3:].strip() or 'text'
            i += 1
            code_lines = []
            
            while i < len(lines) and not lines[i].strip().startswith('```'):
                code_lines.append(lines[i])
                i += 1
            
            blog_data['content_blocks'].append({
                'type': 'code',
                'language': language,
                'content': '\n'.join(code_lines)
            })
        
        # Parse images
        elif line.startswith('!['):
            # Match image markdown and optional width specification
            # Format: ![alt](url.png){width:50%} or ![alt](url.png)
            image_match = re.match(r'!\[([^\]]*)\]\(([^)]+)\)(?:\{width:([^}]+)\})?', line)
            if image_match:
                alt_text = image_match.group(1)
                image_url = image_match.group(2)
                width = image_match.group(3)
                
                block = {
                    'type': 'image',
                    'content': image_url,
                    'alt': alt_text
                }
                if width:
                    block['width'] = width
                
                blog_data['content_blocks'].append(block)
        
        i += 1
    
    return blog_data


def generate_blog_post_component(blog_data, blog_slug):
    """Generate BlogPostPage component from blog data"""
    meta = blog_data['meta']
    toc = blog_data['toc']
    content_blocks = blog_data['content_blocks']
    
    # Convert content blocks to TSX format
    content_blocks_tsx = []
    for block in content_blocks:
        block_tsx = {
            'type': block['type'],
            'content': block.get('content', '')
        }
        
        # Add additional fields based on block type
        if 'id' in block:
            block_tsx['id'] = block['id']
        if 'author' in block:
            block_tsx['author'] = block['author']
        if 'language' in block:
            block_tsx['language'] = block['language']
        if 'alt' in block:
            block_tsx['alt'] = block['alt']
        if 'width' in block:
            block_tsx['width'] = block['width']
        
        content_blocks_tsx.append(block_tsx)
    
    # Generate JSON for the component
    meta_json = json.dumps(meta, indent=4)
    toc_json = json.dumps(toc, indent=4)
    content_json = json.dumps(content_blocks_tsx, indent=4)
    
    component_name = ''.join(word.capitalize() for word in blog_slug.split('-')) + 'Page'
    
    return f'''import {{ ArrowLeft, Calendar, Clock }} from "lucide-react";
import {{ Header }} from "../components/Header";
import {{ Footer }} from "../components/Footer";
import {{ ImageWithFallback }} from "../components/figma/ImageWithFallback";
import {{ TableOfContents }} from "../components/blog/TableOfContents";
import {{ BlogContent, BlogContentBlock }} from "../components/blog/BlogContent";

export function {component_name}() {{
  // Blog post data generated from markdown
  const blogPost = {meta_json};

  const tocItems = {toc_json};

  const contentBlocks: BlogContentBlock[] = {content_json};

  return (
    <div className="size-full relative">
      <Header />

      {{/* Hero Section */}}
      <section>
        <div className="max-w-7xl mx-auto px-8 py-20 pb-8">
          {{/* Back Button */}}
          <a
            href="#/blog"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
            onClick={{() => {{
              // Scroll to top when going back to blog list
              setTimeout(() => window.scrollTo(0, 0), 10);
            }}}}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </a>

          {{/* Boxed Hero Content */}}
          <div className="border-2 border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {{/* Left Column - Hero Image (Optional) */}}
              {{blogPost.heroImage && (
                <div className="lg:col-span-5 bg-background border-r border-b border-border lg:border-b-0">
                  <div className="relative h-full min-h-[250px] lg:min-h-[400px]">
                    <ImageWithFallback
                      src={{blogPost.heroImage}}
                      alt={{blogPost.title}}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}}

              {{/* Right Column - Post Info */}}
              <div className={{`${{blogPost.heroImage ? 'lg:col-span-7' : 'lg:col-span-12'}} bg-background p-6 md:p-12`}}>
                <div className="space-y-6 md:space-y-8">
                  {{/* Category & Meta Info */}}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <span className="px-4 py-2 border-2 border-border bg-background font-mono text-sm inline-block w-fit">
                        {{blogPost.category}}
                      </span>
                      <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{{blogPost.date}}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{{blogPost.readTime}}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {{/* Title */}}
                  <div>
                    <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl">{{blogPost.title}}</h1>
                  </div>

                  {{/* Author Info */}}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border">
                      <ImageWithFallback
                        src={{blogPost.authorAvatar}}
                        alt={{blogPost.author}}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">Written by</p>
                      <p>{{blogPost.author}}</p>
                    </div>
                  </div>

                  {{/* Tags Section */}}
                  <div className="-mx-12 px-12 border-t border-border pt-8">
                    <p className="font-mono text-muted-foreground mb-4">// TAGS</p>
                    <div className="flex flex-wrap gap-2">
                      {{blogPost.tags.map((tag) => (
                        <span
                          key={{tag}}
                          className="px-3 py-1 border-2 border-border font-mono text-sm bg-background hover:bg-secondary transition-colors"
                        >
                          #{{tag}}
                        </span>
                      ))}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {{/* Main Content */}}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {{/* Table of Contents - Desktop */}}
            <aside className="hidden lg:block lg:col-span-3">
              <TableOfContents items={{tocItems}} />
            </aside>

            {{/* Article Content */}}
            <article className="lg:col-span-9">
              <div className="bg-background p-4 rounded-lg">
                <BlogContent blocks={{contentBlocks}} />

                {{/* Share Section */}}
                <div className="mt-16 pt-8 border-t-2 border-border">
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    // SHARE THIS ARTICLE
                  </p>
                  <div className="flex gap-3">
                    <button 
                      onClick={{() => {{
                        const url = `https://twitter.com/intent/tweet?text=${{encodeURIComponent(blogPost.title)}}&url=${{encodeURIComponent(window.location.href)}}`;
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }}}}
                      className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
                    >
                      Twitter
                    </button>
                    <button 
                      onClick={{() => {{
                        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${{encodeURIComponent(window.location.href)}}`;
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }}}}
                      className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
                    >
                      LinkedIn
                    </button>
                    <button 
                      onClick={{() => {{
                        navigator.clipboard.writeText(window.location.href).then(() => {{
                          alert('Link copied to clipboard!');
                        }}).catch(err => {{
                          console.error('Failed to copy link:', err);
                        }});
                      }}}}
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
}}
'''


def main():
    """Main function to process all blog markdown files"""
    blogs_dir = Path('assets/blogs')
    pages_dir = Path('pages')
    components_dir = Path('components')
    
    if not blogs_dir.exists():
        print("Error: assets/blogs/ directory not found!")
        print("Create the assets/blogs/ directory and add markdown files.")
        return
    
    if not pages_dir.exists():
        pages_dir.mkdir()
    
    # Process all markdown files in blogs directory, excluding documentation
    blog_files = [
        f for f in blogs_dir.glob('*.md') 
        if f.name.upper() not in ['README.MD']
    ]
    
    if not blog_files:
        print("No markdown files found in assets/blogs/ directory.")
        return
    
    generated_files = []
    blog_index = []
    
    for blog_file in blog_files:
        print(f"Processing {blog_file.name}...")
        
        content = blog_file.read_text(encoding='utf-8')
        blog_data = parse_blog_markdown(content)
        
        # Get slug from filename or meta
        blog_slug = blog_data['meta'].get('slug', blog_file.stem)
        
        # Ensure display flags have default values
        if 'featuredOnHome' not in blog_data['meta']:
            blog_data['meta']['featuredOnHome'] = False
        if 'featuredOnBlog' not in blog_data['meta']:
            blog_data['meta']['featuredOnBlog'] = False
        if 'displayOrder' not in blog_data['meta']:
            blog_data['meta']['displayOrder'] = 999
        if 'external' not in blog_data['meta']:
            blog_data['meta']['external'] = False
        if 'externalUrl' not in blog_data['meta']:
            blog_data['meta']['externalUrl'] = None
        
        # Generate component only if not external
        if not blog_data['meta'].get('external', False):
            component_code = generate_blog_post_component(blog_data, blog_slug)
            component_name = ''.join(word.capitalize() for word in blog_slug.split('-')) + 'Page'
            output_file = pages_dir / f"{component_name}.tsx"
            output_file.write_text(component_code, encoding='utf-8')
            generated_files.append(output_file.name)
            print(f"✓ Generated {output_file.name}")
        else:
            component_name = None
            print(f"✓ External blog link: {blog_slug}")
        
        # Add to blog index
        blog_index.append({
            'slug': blog_slug,
            'component': component_name,
            'meta': blog_data['meta']
        })
    
    # Generate blog index file
    generate_blog_index(blog_index, pages_dir)
    
    # Generate Blogs.tsx component for HomePage
    try:
        blogs_component = generate_blogs_component(blog_index)
        blogs_file = components_dir / "Blogs.tsx"
        blogs_file.write_text(blogs_component, encoding='utf-8')
        print("✓ Generated Blogs.tsx component")
    except Exception as e:
        print(f"✗ Error generating Blogs component: {e}")
    
    print(f"\n✅ Blog generation complete! Generated {len(generated_files)} files:")
    for file in generated_files:
        print(f"  - pages/{file}")


def generate_blog_index(blog_index, pages_dir):
    """Generate a blog index file with all blog metadata"""
    blog_index_json = json.dumps(blog_index, indent=2)
    
    # Get imports for non-external blogs
    imports = [f'import {{ {entry["component"]} }} from "./{entry["component"]}";' 
               for entry in blog_index if entry['component'] is not None]
    
    # Get components mapping for non-external blogs
    components = [f'  "{entry["slug"]}": {entry["component"]},' 
                  for entry in blog_index if entry['component'] is not None]
    
    index_content = f'''// Auto-generated blog index - DO NOT EDIT MANUALLY
// This file is generated by buildblog.py

export interface BlogMeta {{
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorAvatar: string;
  heroImage?: string;
  tags: string[];
  slug: string;
  excerpt?: string;
  featuredOnHome?: boolean;
  featuredOnBlog?: boolean;
  displayOrder?: number;
  external?: boolean;
  externalUrl?: string;
}}

export interface BlogIndexEntry {{
  slug: string;
  component: string | null;
  meta: BlogMeta;
}}

export const BLOG_INDEX: BlogIndexEntry[] = {blog_index_json};

// Import all generated blog page components
{chr(10).join(imports)}

export const BLOG_COMPONENTS = {{
{chr(10).join(components)}
}};
'''
    
    index_file = pages_dir / 'BlogIndex.ts'
    index_file.write_text(index_content, encoding='utf-8')
    print("✓ Generated BlogIndex.ts")


def generate_blogs_component(blog_index):
    """Generate Blogs.tsx component for HomePage with featured blogs"""
    # Filter and sort blogs for home page
    featured_blogs = [
        b for b in blog_index 
        if b['meta'].get('featuredOnHome', False)
    ]
    
    # Sort by display order
    featured_blogs.sort(key=lambda b: b['meta'].get('displayOrder', 999))
    
    # Prepare blog data
    blogs_data = []
    for blog in featured_blogs:
        meta = blog['meta']
        
        # Determine the link - external or internal
        if meta.get('external', False) and meta.get('externalUrl'):
            link_type = 'external'
            link_url = meta['externalUrl']
        else:
            link_type = 'internal'
            link_url = f"#/blog/{blog['slug']}"
        
        blog_obj = {
            'title': meta.get('title', ''),
            'excerpt': meta.get('excerpt', ''),
            'date': meta.get('date', ''),
            'readTime': meta.get('readTime', ''),
            'image': meta.get('heroImage', 'https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?w=1080'),
            'category': meta.get('category', ''),
            'author': meta.get('author', ''),
            'authorAvatar': meta.get('authorAvatar', ''),
            'slug': blog['slug'],
            'linkType': link_type,
            'linkUrl': link_url
        }
        
        blogs_data.append(blog_obj)
    
    blogs_json = json.dumps(blogs_data, indent=8)
    
    component_content = f'''import {{ ArrowRight }} from "lucide-react";
import {{ PageHeader }} from "./shared/PageHeader";
import {{ BlogCard }} from "./shared/BlogCard";

interface BlogPost {{
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
}}

export function Blogs() {{
  const posts: BlogPost[] = {blogs_json};

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

        {{/* Grid Layout */}}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {{posts.map((post, index) => (
            <BlogCard key={{index}} {{...post}} />
          ))}}
        </div>
      </div>
    </section>
  );
}}
'''
    
    return component_content


if __name__ == '__main__':
    main()