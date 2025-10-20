#!/usr/bin/env python3
"""
Project Generator - Converts project markdown files to React components
Usage: python build_projects.py
"""

import re
import json
import os
from pathlib import Path
from datetime import datetime


def parse_styled_text(text):
    """Parse text for orange styling, links, and comment-style lines"""
    if not text:
        return text
    
    # Replace **bold** with bold styled span
    text = re.sub(r'\*\*(.*?)\*\*', r"<strong>\1</strong>", text)
    
    # Replace [orange](text) with orange styled span (using inline styles for reliability)
    text = re.sub(r'\[orange\]\((.*?)\)', r"<span style='color: #ff6b3d;'>\1</span>", text)
    
    # Replace [comment](text) with comment-style text
    text = re.sub(r'\[comment\]\((.*?)\)', r"<span class='font-mono text-muted-foreground text-sm'>// \1</span>", text)
    
    # Replace [link](url) with regular links (using inline styles)
    text = re.sub(r'\[link\]\((.*?)\)', r"<a href='\1' target='_blank' rel='noopener noreferrer' style='text-decoration: underline;'>\1</a>", text)
    
    # Replace [orange-link](url) with orange styled links (using inline styles)
    text = re.sub(r'\[orange-link\]\((.*?)\)', r"<a href='\1' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>\1</a>", text)
    
    # Replace [text](url) with links (standard markdown link syntax, using inline styles)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r"<a href='\2' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>\1</a>", text)
    
    return text


def parse_project_markdown(content):
    """Parse project markdown content into structured data"""
    # Split content into sections
    sections = content.split('---META---')
    if len(sections) < 3:
        raise ValueError("Invalid project format: Missing META section")
    
    meta_content = sections[1].strip()
    remaining_content = '---'.join(sections[2:])
    
    # Parse metadata
    meta = {}
    for line in meta_content.split('\n'):
        line = line.strip()
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip()
            
            # Handle arrays (tags, technologies, team)
            if key in ['tags', 'technologies', 'team'] and value.startswith('[') and value.endswith(']'):
                # Parse JSON array
                try:
                    meta[key] = json.loads(value)
                except json.JSONDecodeError:
                    # Fallback to simple string split
                    meta[key] = [item.strip().strip('"\'') for item in value[1:-1].split(',')]
            else:
                meta[key] = value
    
    # Split TOC and content
    toc_split = remaining_content.split('---TOC---')
    if len(toc_split) >= 3:
        toc_content = toc_split[1].strip()
        main_content = '---'.join(toc_split[2:]).strip()
    else:
        toc_content = ""
        main_content = remaining_content.strip()
    
    # Parse TOC
    toc_items = []
    if toc_content:
        for line in toc_content.split('\n'):
            line = line.strip()
            if line.startswith('-') and '[' in line and '](' in line:
                # Extract title and id from [title](#id) format
                match = re.search(r'\[([^\]]+)\]\(#([^)]+)\)', line)
                if match:
                    title = match.group(1)
                    id_val = match.group(2)
                    level = line.count('  ') + 2  # Determine heading level
                    toc_items.append({
                        'title': title,
                        'id': id_val,
                        'level': level
                    })
    
    # Parse main content into blocks
    content_blocks = []
    current_block = ""
    current_type = "paragraph"
    
    lines = main_content.split('\n')
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Code blocks
        if line.startswith('```'):
            if current_block.strip():
                content_blocks.append({
                    'type': current_type,
                    'content': parse_styled_text(current_block.strip())
                })
                current_block = ""
            
            # Find language if specified
            language = line[3:].strip() or 'text'
            i += 1
            
            # Collect code content
            code_content = []
            while i < len(lines) and not lines[i].startswith('```'):
                code_content.append(lines[i])
                i += 1
            
            content_blocks.append({
                'type': 'code',
                'content': '\n'.join(code_content),
                'language': language
            })
            
            current_block = ""
            current_type = "paragraph"
        
        # Headings
        elif line.startswith('##'):
            if current_block.strip():
                content_blocks.append({
                    'type': current_type,
                    'content': parse_styled_text(current_block.strip())
                })
                current_block = ""
            
            # Determine heading level and extract id
            heading_text = line.lstrip('#').strip()
            heading_id = heading_text.lower().replace(' ', '-').replace('&', '').replace('/', '').replace('(', '').replace(')', '')
            
            if line.startswith('## '):
                heading_type = 'heading'
            elif line.startswith('### '):
                heading_type = 'subheading'
            else:
                heading_type = 'heading3'
            
            content_blocks.append({
                'type': heading_type,
                'content': parse_styled_text(heading_text),
                'id': heading_id
            })
            current_type = "paragraph"
        
        # Images
        elif line.strip().startswith('!['):
            if current_block.strip():
                content_blocks.append({
                    'type': current_type,
                    'content': parse_styled_text(current_block.strip())
                })
                current_block = ""
            
            # Parse image
            match = re.search(r'!\[([^\]]*)\]\(([^)]+)\)', line)
            if match:
                alt_text = match.group(1)
                image_url = match.group(2)
                content_blocks.append({
                    'type': 'image',
                    'content': image_url,
                    'alt': alt_text
                })
            current_type = "paragraph"
        
        # Regular content
        else:
            if line.strip() == "":
                if current_block.strip():
                    content_blocks.append({
                        'type': current_type,
                        'content': parse_styled_text(current_block.strip())
                    })
                    current_block = ""
                    current_type = "paragraph"
            else:
                if current_block:
                    current_block += " "
                current_block += line.strip()
        
        i += 1
    
    # Add remaining content
    if current_block.strip():
        content_blocks.append({
            'type': current_type,
            'content': parse_styled_text(current_block.strip())
        })
    
    return {
        'meta': meta,
        'toc': toc_items,
        'content': content_blocks
    }


def generate_project_page_component(project_data, filename):
    """Generate a React component for a project page with blog-style hero section"""
    meta = project_data['meta']
    toc_items = project_data['toc']
    content_blocks = project_data['content']
    
    # Generate component name from filename
    component_name = ''.join([word.capitalize() for word in filename.replace('.md', '').replace('-', ' ').split()])
    component_name += 'Page'
    
    # Convert meta to JSON string
    meta_json = json.dumps(meta, indent=4)
    
    # Convert TOC to JSON string
    toc_json = json.dumps(toc_items, indent=8)
    
    # Convert content blocks to JSON string
    content_json = json.dumps(content_blocks, indent=8)
    
    component_content = f'''import {{ ArrowLeft, Calendar, Clock, Github, ExternalLink, MapPin, Users, Code }} from "lucide-react";
import {{ Header }} from "../components/Header";
import {{ Footer }} from "../components/Footer";
import {{ ImageWithFallback }} from "../components/figma/ImageWithFallback";
import {{ TableOfContents }} from "../components/blog/TableOfContents";
import {{ BlogContent, BlogContentBlock }} from "../components/blog/BlogContent";

export function {component_name}() {{
  // Project data generated from markdown
  const projectData = {meta_json};

  const tocItems = {toc_json};

  const contentBlocks: BlogContentBlock[] = {content_json};

  return (
    <div className="size-full relative">
      <Header />

      {{/* Hero Section */}}
      <section>
        <div className="max-w-7xl mx-auto px-8 py-20">
          {{/* Back Button */}}
          <a
            href="#/projects"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </a>

          {{/* Boxed Hero Content */}}
          <div className="border-2 border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {{/* Left Column - Hero Image (Optional) */}}
              {{projectData.heroImage && (
                <div className="lg:col-span-5 bg-background border-r border-b border-border lg:border-b-0">
                  <div className="relative h-full min-h-[250px] lg:min-h-[400px]">
                    <ImageWithFallback
                      src={{projectData.heroImage}}
                      alt={{projectData.title}}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}}

              {{/* Right Column - Project Info */}}
              <div className={{`${{projectData.heroImage ? 'lg:col-span-7' : 'lg:col-span-12'}} bg-background p-6 md:p-12`}}>
                <div className="space-y-6 md:space-y-8">
                  {{/* Category & Meta Info */}}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <span className="px-4 py-2 border-2 border-border bg-background font-mono text-sm inline-block w-fit">
                        {{projectData.category}}
                      </span>
                      <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{{projectData.date}}</span>
                        </span>
                        {{projectData.duration && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 h-4 flex-shrink-0" />
                              <span className="whitespace-nowrap">{{projectData.duration}}</span>
                            </span>
                          </>
                        )}}
                      </div>
                    </div>
                  </div>

                  {{/* Title */}}
                  <div>
                    <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl">{{projectData.title}}</h1>
                  </div>

                  {{/* Author/Project Info */}}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border bg-secondary flex items-center justify-center">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">
                        {{projectData.company || 'Project by'}}
                      </p>
                      <p>{{projectData.type || 'Development Team'}}</p>
                    </div>
                  </div>

                  {{/* Tags Section */}}
                  <div className="-mx-12 px-12 border-t border-border pt-8">
                    <p className="font-mono text-muted-foreground mb-4">// TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {{projectData.technologies && projectData.technologies.length > 0 ? (
                        projectData.technologies.map((tech: string, index: number) => (
                          <span
                            key={{index}}
                            className="px-3 py-1 border-2 border-border font-mono text-sm bg-background hover:bg-secondary transition-colors"
                          >
                            #{{tech}}
                          </span>
                        ))
                      ) : (
                        projectData.tags && projectData.tags.map((tag: string, index: number) => (
                          <span
                            key={{index}}
                            className="px-3 py-1 border-2 border-border font-mono text-sm bg-background hover:bg-secondary transition-colors"
                          >
                            #{{tag}}
                          </span>
                        ))
                      )}}
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
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {{/* Table of Contents - Desktop */}}
            <aside className="hidden lg:block lg:col-span-3">
              <TableOfContents items={{tocItems}} />
            </aside>

            {{/* Project Content */}}
            <article className="lg:col-span-9">
              <div className="bg-background p-4 rounded-lg">
                <BlogContent blocks={{contentBlocks}} />

                {{/* Action Buttons */}}
                {{(projectData.github || projectData.demo) && (
                <div className="mt-16 pt-8 border-t-2 border-border">
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    // PROJECT LINKS
                  </p>
                  <div className="flex gap-3">
                    {{projectData.github && (
                      <a
                        href={{projectData.github}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono inline-flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}}
                    {{projectData.demo && (
                      <a
                        href={{projectData.demo}}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}}
                  </div>
                </div>
                )}}
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}}'''
    
    return component_content


def generate_project_index():
    """Generate index file with all project metadata and components"""
    projects_dir = Path('assets/projects')
    project_files = list(projects_dir.glob('*.md'))
    
    project_index = []
    project_components = {}
    
    for project_file in project_files:
        with open(project_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        try:
            project_data = parse_project_markdown(content)
            meta = project_data['meta']
            
            # Generate component name
            filename = project_file.stem
            component_name = ''.join([word.capitalize() for word in filename.replace('-', ' ').split()]) + 'Page'
            
            # Add to index
            project_index.append({
                'slug': meta.get('slug', filename),
                'meta': meta
            })
            
            # Add to components mapping
            project_components[meta.get('slug', filename)] = component_name
            
        except Exception as e:
            print(f"Error parsing {project_file}: {e}")
            continue
    
    # Generate TypeScript interfaces and exports
    index_content = f'''// Auto-generated project index
// This file is automatically generated by build_projects.py
// Do not edit manually

export interface ProjectMeta {{
  title: string;
  category: string;
  date: string;
  company?: string;
  location?: string;
  type?: string;
  heroImage?: string;
  tags: string[];
  github?: string;
  demo?: string;
  technologies?: string[];
  team?: string[];
  duration?: string;
  slug: string;
}}

export interface ProjectIndexItem {{
  slug: string;
  meta: ProjectMeta;
}}

// Import all project page components
'''

    # Add imports
    for slug, component_name in project_components.items():
        index_content += f'import {{ {component_name} }} from "./{component_name}";\n'
    
    index_content += '\n// Project index with metadata\n'
    index_content += f'export const PROJECT_INDEX: ProjectIndexItem[] = {json.dumps(project_index, indent=2)};\n\n'
    
    index_content += '// Project components mapping\n'
    index_content += f'export const PROJECT_COMPONENTS = {{\n'
    for slug, component_name in project_components.items():
        index_content += f'  "{slug}": {component_name},\n'
    index_content += '};\n'
    
    return index_content


def main():
    """Main function to generate all project pages"""
    projects_dir = Path('assets/projects')
    pages_dir = Path('pages')
    
    if not projects_dir.exists():
        print("Error: assets/projects/ directory not found")
        return
    
    if not pages_dir.exists():
        pages_dir.mkdir(exist_ok=True)
    
    project_files = list(projects_dir.glob('*.md'))
    
    if not project_files:
        print("No project markdown files found in assets/projects/ directory")
        return
    
    generated_files = []
    
    for project_file in project_files:
        try:
            with open(project_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Parse project markdown
            project_data = parse_project_markdown(content)
            
            # Generate component
            filename = project_file.stem
            component_name = ''.join([word.capitalize() for word in filename.replace('-', ' ').split()]) + 'Page'
            component_content = generate_project_page_component(project_data, filename)
            
            # Write component file
            output_file = pages_dir / f"{component_name}.tsx"
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(component_content)
            
            generated_files.append(f"pages/{component_name}.tsx")
            print(f"✓ Generated {component_name}.tsx")
            
        except Exception as e:
            print(f"✗ Error processing {project_file}: {e}")
            continue
    
    # Generate project index
    try:
        index_content = generate_project_index()
        index_file = pages_dir / "ProjectIndex.ts"
        with open(index_file, 'w', encoding='utf-8') as f:
            f.write(index_content)
        print("✓ Generated ProjectIndex.ts")
    except Exception as e:
        print(f"✗ Error generating project index: {e}")
    
    print(f"\n✅ Project generation complete! Generated {len(generated_files)} files:")
    for file in generated_files:
        print(f"  - {file}")


if __name__ == "__main__":
    main()