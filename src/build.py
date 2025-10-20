#!/usr/bin/env python3
"""
Portfolio Generator - Converts home.md to React components
Usage: python build.py
"""

import re
import json
from pathlib import Path


def parse_styled_text(text):
    """Parse text for orange styling, links, and comment-style lines"""
    if not text:
        return text
    
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

def parse_global_markdown(content):
    """Parse global.md content for header and footer sections"""
    sections = {}
    current_section = None
    
    lines = content.split('\n')
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Header section (starts with ---HEADER---)
        if line.strip() == '---HEADER---':
            current_section = {'type': 'header', 'data': {}}
            i += 1
            
            # Parse header data until next section or ---
            while i < len(lines) and not lines[i].strip().startswith('---'):
                header_line = lines[i].strip()
                if not header_line:  # Skip empty lines
                    i += 1
                    continue
                    
                if header_line.startswith('name:'):
                    current_section['data']['name'] = header_line.replace('name:', '').strip()
                elif header_line.startswith('logo:'):
                    current_section['data']['logo'] = header_line.replace('logo:', '').strip()
                elif header_line.startswith('navigation:'):
                    current_section['data']['navigation'] = []
                    i += 1
                    while i < len(lines) and lines[i].strip().startswith('-'):
                        nav_line = lines[i].strip()[1:].strip()
                        # Parse: - Label | href | isCTA
                        if '|' in nav_line:
                            parts = nav_line.split('|')
                            if len(parts) >= 3:
                                current_section['data']['navigation'].append({
                                    'label': parts[0].strip(),
                                    'href': parts[1].strip(),
                                    'isCTA': parts[2].strip().lower() == 'true'
                                })
                        i += 1
                    i -= 1
                i += 1
            sections['header'] = current_section
            i -= 1  # Back up one since the while loop will increment
            
        # Footer section (starts with ---FOOTER---)
        elif line.strip() == '---FOOTER---':
            current_section = {'type': 'footer', 'sections': []}
            i += 1
            
            # Parse footer sections
            while i < len(lines) and not lines[i].strip().startswith('---'):
                footer_line = lines[i].strip()
                if not footer_line:  # Skip empty lines
                    i += 1
                    continue
                
                # Section headers (## Section Name)
                if footer_line.startswith('## '):
                    section_name = footer_line[3:].strip()
                    footer_section = {
                        'name': section_name,
                        'items': [],
                        'header_comment': '',  # Default comment line
                        'header_title': section_name,  # Default title
                        'header_type': 'comment'  # Default to comment style
                    }
                    i += 1
                    
                    # Parse section content
                    while i < len(lines) and not lines[i].strip().startswith(('##', '---')):
                        section_line = lines[i].strip()
                        if not section_line:
                            i += 1
                            continue
                            
                        # Header comment lines (//comment: text)
                        if section_line.startswith('//comment:'):
                            footer_section['header_comment'] = section_line[10:].strip()
                            footer_section['header_type'] = 'comment'
                        # Header title lines (//title: text)  
                        elif section_line.startswith('//title:'):
                            footer_section['header_title'] = section_line[8:].strip()
                            footer_section['header_type'] = 'title'
                        # Content items
                        elif section_line.startswith('-'):
                            item_line = section_line[1:].strip()
                            if '|' in item_line:
                                parts = item_line.split('|')
                                if len(parts) >= 2:
                                    footer_section['items'].append({
                                        'label': parts[0].strip(),
                                        'value': parts[1].strip(),
                                        'type': parts[2].strip() if len(parts) > 2 else 'text'
                                    })
                            else:
                                footer_section['items'].append({
                                    'label': item_line,
                                    'value': '',
                                    'type': 'text'
                                })
                        # Simple text content
                        elif section_line:
                            footer_section['items'].append({
                                'label': section_line,
                                'value': '',
                                'type': 'text'
                            })
                        i += 1
                    
                    current_section['sections'].append(footer_section)
                    i -= 1
                else:
                    i += 1
            
            sections['footer'] = current_section
            i -= 1  # Back up one since the while loop will increment
            
        i += 1
    
    return sections

def parse_markdown(content):
    """Parse markdown content into sections"""
    sections = []
    current_section = None
    
    lines = content.split('\n')
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Hero section (starts with ---HERO---)
        if line.strip() == '---HERO---':
            current_section = {'type': 'hero', 'data': {}}
            i += 1
            
            # Parse hero data until next section or ---
            while i < len(lines) and lines[i].strip() != '---':
                hero_line = lines[i].strip()
                if hero_line.startswith('name:'):
                    current_section['data']['name'] = hero_line.replace('name:', '').strip()
                elif hero_line.startswith('role:'):
                    current_section['data']['role'] = hero_line.replace('role:', '').strip()
                elif hero_line.startswith('bio:'):
                    current_section['data']['bio'] = hero_line.replace('bio:', '').strip()
                elif hero_line.startswith('photo:'):
                    current_section['data']['photo'] = hero_line.replace('photo:', '').strip()
                elif hero_line.startswith('companies:'):
                    current_section['data']['companies'] = []
                    i += 1
                    while i < len(lines) and lines[i].strip().startswith('-'):
                        company_line = lines[i].strip()[1:].strip()
                        # Parse: - Name | logo_url
                        if '|' in company_line:
                            name, logo = company_line.split('|', 1)
                            current_section['data']['companies'].append({
                                'name': name.strip(),
                                'logo': logo.strip()
                            })
                        else:
                            current_section['data']['companies'].append({
                                'name': company_line.strip(),
                                'logo': ''
                            })
                        i += 1
                    i -= 1
                elif hero_line.startswith('education:'):
                    current_section['data']['education'] = []
                    i += 1
                    while i < len(lines) and lines[i].strip().startswith('-'):
                        edu_line = lines[i].strip()[1:].strip()
                        # Parse: - Name | logo_url
                        if '|' in edu_line:
                            name, logo = edu_line.split('|', 1)
                            current_section['data']['education'].append({
                                'name': name.strip(),
                                'logo': logo.strip()
                            })
                        else:
                            current_section['data']['education'].append({
                                'name': edu_line.strip(),
                                'logo': ''
                            })
                        i += 1
                    i -= 1
                i += 1
            sections.append(current_section)
            
        # Section headers (## Section Name)
        elif line.startswith('## '):
            if current_section:
                sections.append(current_section)
            
            section_name = line[3:].strip()
            current_section = {
                'type': 'section',
                'name': section_name,
                'items': [],
                'header_comment': '',  # Default comment line
                'header_title': section_name  # Default title
            }
            
        # Header comment lines (//comment: text)
        elif line.strip().startswith('//comment:') and current_section and current_section['type'] == 'section':
            current_section['header_comment'] = line.strip()[10:].strip()
            
        # Header title lines (//title: text)  
        elif line.strip().startswith('//title:') and current_section and current_section['type'] == 'section':
            current_section['header_title'] = line.strip()[8:].strip()
            
        # Card items (### Card Title)
        elif line.startswith('### ') and current_section and current_section['type'] == 'section':
            card = {'title': line[4:].strip()}
            i += 1
            
            # Parse card metadata and content
            card_lines = []
            while i < len(lines) and not lines[i].startswith('#'):
                card_line = lines[i].strip()
                
                if card_line.startswith('date:'):
                    card['date'] = card_line.replace('date:', '').strip()
                elif card_line.startswith('period:'):
                    card['period'] = card_line.replace('period:', '').strip()
                elif card_line.startswith('org:'):
                    card['org'] = card_line.replace('org:', '').strip()
                elif card_line.startswith('image:'):
                    card['image'] = card_line.replace('image:', '').strip()
                elif card_line.startswith('category:'):
                    card['category'] = card_line.replace('category:', '').strip()
                elif card_line.startswith('tags:'):
                    tags_str = card_line.replace('tags:', '').strip()
                    card['tags'] = [t.strip() for t in tags_str.split(',')]
                elif card_line.startswith('readTime:'):
                    card['readTime'] = card_line.replace('readTime:', '').strip()
                elif card_line.startswith('github:'):
                    card['github'] = card_line.replace('github:', '').strip()
                elif card_line.startswith('demo:'):
                    card['demo'] = card_line.replace('demo:', '').strip()
                elif card_line.startswith('type:'):
                    card['cardType'] = card_line.replace('type:', '').strip()
                elif card_line.startswith('author:'):
                    card['author'] = card_line.replace('author:', '').strip()
                elif card_line.startswith('authorAvatar:'):
                    card['authorAvatar'] = card_line.replace('authorAvatar:', '').strip()
                elif card_line.startswith('featured:'):
                    card['featured'] = card_line.replace('featured:', '').strip().lower() == 'true'
                elif card_line and not card_line.startswith(('date:', 'period:', 'org:', 'image:', 'category:', 'tags:', 'readTime:', 'github:', 'demo:', 'type:', 'author:', 'authorAvatar:', 'featured:')):
                    card_lines.append(card_line)
                
                i += 1
            
            card['description'] = ' '.join(card_lines)
            current_section['items'].append(card)
            i -= 1
            
        i += 1
    
    if current_section:
        sections.append(current_section)
    
    return sections


def generate_hero_component(data):
    """Generate Hero component"""
    companies = data.get('companies', [])
    education = data.get('education', [])
    bio_styled = parse_styled_text(data.get('bio', 'Your bio here'))
    photo_src = data.get('photo', 'profilePhoto')
    
    # If photo is "profilePhoto", check if Niraj_Photo.png exists, otherwise use existing asset
    if photo_src == 'profilePhoto':
        # Use Niraj_Photo.png since user renamed the file
        photo_import = 'import profilePhoto from "../assets/Niraj_Photo.png";'
        photo_element = 'profilePhoto'
    else:
        # External URL - use the URL directly
        photo_import = ''
        photo_element = f'"{photo_src}"'
    
    # Process company logos - generate imports for local assets
    asset_imports = []
    processed_companies = []
    
    for i, company in enumerate(companies):
        logo_url = company.get('logo', '')
        if logo_url.startswith('../assets/') or logo_url.startswith('./assets/'):
            # Local asset - create import
            asset_name = f"companyLogo{i}"
            asset_imports.append(f'import {asset_name} from "{logo_url}";')
            processed_companies.append({
                'name': company.get('name', ''),
                'logo': asset_name
            })
        else:
            # External URL - use as string
            processed_companies.append({
                'name': company.get('name', ''),
                'logo': logo_url
            })
    
    # Process education logos - generate imports for local assets
    processed_education = []
    
    for i, edu in enumerate(education):
        logo_url = edu.get('logo', '')
        if logo_url.startswith('../assets/') or logo_url.startswith('./assets/'):
            # Local asset - create import
            asset_name = f"eduLogo{i}"
            asset_imports.append(f'import {asset_name} from "{logo_url}";')
            processed_education.append({
                'name': edu.get('name', ''),
                'logo': asset_name
            })
        else:
            # External URL - use as string
            processed_education.append({
                'name': edu.get('name', ''),
                'logo': logo_url
            })
    
    # Create the companies JSON, replacing asset variables correctly
    companies_str = json.dumps(processed_companies, indent=4)
    for i in range(len(companies)):
        companies_str = companies_str.replace(f'"companyLogo{i}"', f'companyLogo{i}')
    
    # Create the education JSON, replacing asset variables correctly
    education_str = json.dumps(processed_education, indent=4)
    for i in range(len(education)):
        education_str = education_str.replace(f'"eduLogo{i}"', f'eduLogo{i}')
    
    imports_str = '\n'.join(asset_imports)
    if imports_str:
        imports_str = '\n' + imports_str
    
    # Add photo import if needed
    if photo_import:
        imports_str = '\n' + photo_import + imports_str
    
    return f'''import {{ ImageWithFallback }} from "./figma/ImageWithFallback";{imports_str}

export function Hero() {{
  const companies = {companies_str};
  const education = {education_str};

  return (
    <section id="hero" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-20">
        {{/* Grid container */}}
        <div className="border-2 border-border shadow-retro bg-background">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {{/* Left Column - Photo */}}
            <div className="lg:col-span-4 bg-background p-6 sm:p-12 flex items-center justify-center border-r border-b border-border lg:border-b-0">
            <div className="w-48 h-48 rounded-sm overflow-hidden border-2 border-border">
              <img
                src={{{photo_element}}}
                alt="{data.get('name', 'Profile')}"
                className="w-full h-full object-cover scale-125"
              />
            </div>
          </div>

            {{/* Right Column - Name and Info */}}
            <div className="lg:col-span-8 bg-background p-6 sm:p-12">
            <div className="space-y-8">
              <div>
                <h1 className="mb-6 font-bold text-3xl md:text-4xl lg:text-5xl">{data.get('name', 'Your Name')}</h1>
                <p className="text-muted-foreground mb-8">
                  {data.get('role', 'Your Role')}
                </p>
                <p className="text-muted-foreground" dangerouslySetInnerHTML={{{{ __html: "{bio_styled}" }}}} />
              </div>

              {{/* Combined logos section */}}
              <div className="-mx-6 sm:-mx-12 px-6 sm:px-12 border-t border-border pt-8">
                <p className="font-mono text-muted-foreground mb-4">// WORKED WITH</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
                  {{[...companies, ...education].map((item) => (
                    <div
                      key={{item.name}}
                      className="p-4 flex flex-col items-center justify-center gap-3 text-center"
                    >
                      {{item.logo && (
                        <ImageWithFallback
                          src={{item.logo}}
                          alt={{item.name}}
                          className="h-12 w-auto object-contain grayscale opacity-70 mx-auto"
                        />
                      )}}
                      <span className="font-mono text-muted-foreground text-xs text-center">{{item.name}}</span>
                    </div>
                  ))}}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}}
'''


def generate_timeline_component(items, header_comment="// EXPERIENCE", header_title="Career Journey"):
    """Generate Timeline component from items"""
    timeline_items = []
    for item in items:
        timeline_items.append({
            'period': item.get('period', ''),
            'content': parse_styled_text(item.get('description', '')),
            'featured': item.get('featured', False)
        })
    
    items_json = json.dumps(timeline_items, indent=4)
    
    return f'''interface TimelineItem {{
  period: string;
  content: string | JSX.Element;
  featured?: boolean;
}}

export function Timeline() {{
  const timelineItems: TimelineItem[] = {items_json};

  return (
    <section id="timeline" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="mb-8 sm:mb-12 inline-block border-2 border-border px-4 sm:px-6 py-3 sm:py-4 bg-background">
          <p className="font-mono text-muted-foreground mb-2 text-xs sm:text-sm">{header_comment}</p>
          <h2 className="font-bold">{header_title}</h2>
        </div>

        {{/* Vertical Timeline Layout */}}
        <div className="flex gap-3 sm:gap-6">
          {{/* Static vertical line with dots */}}
          <div className="relative flex-shrink-0 w-6 sm:w-8">
            <div className="absolute left-1.5 sm:left-2 top-0 bottom-0 w-px bg-foreground/40"></div>
            {{timelineItems.map((_, index) => (
              <div
                key={{index}}
                className="relative h-20 sm:h-24 flex items-center"
              >
                {{/* Square dot */}}
                <div className="absolute left-[2px] sm:left-[2px] w-2.5 h-2.5 sm:w-3 sm:h-3 bg-foreground border-2 border-background z-10"></div>
              </div>
            ))}}
          </div>

          {{/* Scrollable content */}}
          <div className="flex-1 border-2 border-border bg-background max-h-[600px] overflow-y-auto">
            {{timelineItems.map((item, index) => (
              <div
                key={{index}}
                className="relative p-4 sm:p-6 border-b border-border last:border-b-0"
              >
                {{/* Content */}}
                <p className="text-sm sm:text-base">
                  <strong>{{item.period}}</strong> <span dangerouslySetInnerHTML={{{{ __html: item.content }}}} />
                </p>
              </div>
            ))}}
          </div>
        </div>
      </div>
    </section>
  );
}}
'''


def generate_blogs_component(items, header_comment="// WRITINGS", header_title="Blog"):
    """Generate Blogs component from items"""
    blog_items = []
    for item in items:
        blog_items.append({
            'title': item.get('title', ''),
            'excerpt': parse_styled_text(item.get('description', '')),
            'date': item.get('date', ''),
            'readTime': item.get('readTime', '5 min'),
            'image': item.get('image', ''),
            'category': item.get('category', 'ARTICLE'),
            'author': item.get('author', 'Author'),
            'authorAvatar': item.get('authorAvatar', '')
        })
    
    items_json = json.dumps(blog_items, indent=4)
    
    # Process header values for safe template insertion
    header_label = header_comment.replace('// ', '')
    
    return f'''import {{ ArrowRight }} from "lucide-react";
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
}}

export function Blogs() {{
  const posts: BlogPost[] = {items_json};

  return (
    <section id="blog" className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="mb-8 sm:mb-12 flex items-end justify-between flex-wrap gap-4">
          <PageHeader label="{header_label}" title="{header_title}" />
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


def generate_projects_component(items, header_comment="// PORTFOLIO", header_title="Featured Projects"):
    """Generate Projects component from items"""
    project_items = []
    for item in items:
        project_items.append({
            'title': item.get('title', ''),
            'description': parse_styled_text(item.get('description', '')),
            'image': item.get('image', ''),
            'tags': item.get('tags', []),
            'github': item.get('github', '#'),
            'demo': item.get('demo', '#')
        })
    
    items_json = json.dumps(project_items, indent=4)
    
    # Process header values for safe template insertion
    header_label = header_comment.replace('// ', '')
    
    return f'''import {{ PageHeader }} from "./shared/PageHeader";
import {{ ProjectCard }} from "./shared/ProjectCard";

interface Project {{
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}}

export function Projects() {{
  const projects: Project[] = {items_json};

  return (
    <section id="projects" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <PageHeader label="{header_label}" title="{header_title}" />

        {{/* Grid Layout */}}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {{projects.map((project, index) => (
            <div key={{index}} className="lg:col-span-1">
              <ProjectCard {{...project}} index={{index}} imageHeight="h-48 sm:h-64" />
            </div>
          ))}}
        </div>
      </div>
    </section>
  );
}}
'''


def generate_header_component(header_data):
    """Generate Header component from global.md data"""
    name = header_data.get('name', 'Your Name')
    logo = header_data.get('logo', 'YN')
    navigation = header_data.get('navigation', [])
    
    # Generate navigation items
    nav_items = []
    for nav in navigation:
        nav_items.append({
            'label': nav.get('label', ''),
            'href': nav.get('href', '#'),
            'isCTA': nav.get('isCTA', False)
        })
    
    nav_json = json.dumps(nav_items, indent=4)
    
    return f'''import {{ useState }} from "react";
import {{ Menu, X }} from "lucide-react";

export function Header() {{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {nav_json};

  const handleNavClick = () => {{
    setIsMenuOpen(false);
  }};

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {{/* Logo & Name */}}
          <a href="#/" className="flex items-center gap-2 sm:gap-4 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 border border-border flex items-center justify-center font-mono text-xs sm:text-sm">
              {logo}
            </div>
            <span className="font-mono text-sm sm:text-base">{name}</span>
          </a>

          {{/* Desktop Navigation */}}
          <nav className="hidden md:flex items-center gap-1">
            {{navItems.map((item) => (
              <a
                key={{item.label}}
                href={{item.href}}
                className={{`px-4 py-2 font-mono transition-colors border-l border-border first:border-l-0 ${{
                  item.isCTA
                    ? "bg-accent-orange text-accent-orange-foreground hover:opacity-80"
                    : "hover:bg-foreground hover:text-background"
                }}`}}
              >
                {{item.label}}
              </a>
            ))}}
          </nav>

          {{/* Mobile Menu Button */}}
          <button
            onClick={{() => setIsMenuOpen(!isMenuOpen)}}
            className="md:hidden w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            aria-label="Toggle menu"
          >
            {{isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}}
          </button>
        </div>

        {{/* Mobile Navigation */}}
        {{isMenuOpen && (
          <nav className="md:hidden border-t border-border">
            {{navItems.map((item) => (
              <a
                key={{item.label}}
                href={{item.href}}
                onClick={{handleNavClick}}
                className={{`block px-4 py-3 font-mono transition-colors border-b border-border last:border-b-0 ${{
                  item.isCTA
                    ? "bg-accent-orange text-accent-orange-foreground hover:opacity-80"
                    : "hover:bg-foreground hover:text-background"
                }}`}}
              >
                {{item.label}}
              </a>
            ))}}
          </nav>
        )}}
      </div>
    </header>
  );
}}
'''


def generate_footer_component(footer_data):
    """Generate Footer component from global.md data"""
    footer_sections = footer_data.get('sections', [])
    
    # Icon mapping for social links
    icon_map = {
        'Github': 'Github',
        'GitHub': 'Github', 
        'Linkedin': 'Linkedin',
        'LinkedIn': 'Linkedin',
        'Twitter': 'Twitter',
        'Mail': 'Mail',
        'Email': 'Mail'
    }
    
    # Generate the sections dynamically
    sections_jsx = []
    for section in footer_sections:
        section_name = section.get('name', 'Section')
        items = section.get('items', [])
        header_type = section.get('header_type', 'comment')
        header_comment = section.get('header_comment', '')
        header_title = section.get('header_title', section_name)
        
        # Determine header text based on type
        if header_type == 'comment' and header_comment:
            header_text = f"// {header_comment.upper()}"
        elif header_type == 'title' and header_title:
            header_text = header_title
        else:
            header_text = f"// {section_name.upper()}"
        
        # Generate items JSX based on item types
        items_jsx = []
        for item in items:
            item_type = item.get('type', 'text')
            label = item.get('label', '')
            value = item.get('value', '')
            
            if item_type == 'email':
                items_jsx.append(f'''
            <p className="text-muted-foreground text-sm sm:text-base mb-4">
              {label}
            </p>
            <a
              href="mailto:{value}"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>{value}</span>
            </a>''')
            elif item_type == 'link':
                items_jsx.append(f'''
            <a
              href="{value}"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
            >
              {label}
            </a>''')
            else:  # text type
                if value:
                    styled_label = parse_styled_text(label)
                    styled_value = parse_styled_text(value)
                    items_jsx.append(f'''
            <p className="text-muted-foreground text-sm sm:text-base">
              {styled_label} {styled_value}
            </p>''')
                else:
                    styled_label = parse_styled_text(label)
                    items_jsx.append(f'''
            <p className="text-muted-foreground text-sm sm:text-base">
              {styled_label}
            </p>''')
        
        # Handle social section specially for flex layout
        if section_name.lower() in ['social', 'connect']:
            social_items = [item for item in items if item.get('type') == 'social']
            if social_items:
                social_links_jsx = []
                for item in social_items:
                    icon_name = icon_map.get(item.get('label', ''), 'Mail')
                    social_links_jsx.append(f'''<a
                  href="{item.get('value', '#')}"
                  aria-label="{item.get('label', '')}"
                  className="w-10 h-10 flex items-center justify-center border border-border bg-background hover:bg-foreground hover:text-background transition-colors"
                >
                  <{icon_name} className="w-5 h-5" />
                </a>''')
                
                items_jsx = [f'''
            <div className="flex gap-3 sm:gap-4">
              {"".join(social_links_jsx)}
            </div>''']
        
        section_jsx = f'''
          <div className="bg-background p-6 sm:p-8 border-r border-b border-border md:[&:nth-child(3n)]:border-r-0 md:last:border-b-0">
            <p className="font-mono text-muted-foreground mb-4 text-xs sm:text-sm">{header_text}</p>
            {"".join(items_jsx)}
          </div>'''
        
        sections_jsx.append(section_jsx)
    
    # Calculate grid columns based on number of sections
    grid_cols = min(len(footer_sections), 4)  # Max 4 columns
    grid_class = f"grid-cols-1 md:grid-cols-{grid_cols}" if grid_cols > 1 else "grid-cols-1"
    
    return f'''import {{ Github, Linkedin, Twitter, Mail }} from "lucide-react";

export function Footer() {{
  return (
    <footer id="resume" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="border-2 border-border shadow-retro bg-background">
          <div className="grid {grid_class}">
            {"".join(sections_jsx)}
          </div>
        </div>
      </div>
    </footer>
  );
}}
'''


def main():
    # Read markdown file
    md_file = Path('home.md')
    if not md_file.exists():
        print("Error: home.md not found!")
        print("Creating example home.md...")
        create_example_md()
        return
    
    content = md_file.read_text()
    sections = parse_markdown(content)
    
    # Generate components based on sections
    for section in sections:
        if section['type'] == 'hero':
            hero_code = generate_hero_component(section['data'])
            Path('components/Hero.tsx').write_text(hero_code)
            print("✓ Generated Hero.tsx")
            
        elif section['type'] == 'section':
            name = section['name'].lower()
            
            if 'experience' in name or 'timeline' in name or 'career' in name or 'recent events' in name or 'events' in name:
                header_comment = section.get('header_comment') or '// EXPERIENCE'
                header_title = section.get('header_title') or 'Career Journey'
                timeline_code = generate_timeline_component(section['items'], header_comment, header_title)
                Path('components/Timeline.tsx').write_text(timeline_code)
                print("✓ Generated Timeline.tsx")
                
            elif 'blog' in name or 'article' in name or 'writing' in name:
                header_comment = section.get('header_comment') or '// WRITINGS'
                header_title = section.get('header_title') or 'Blog'
                blogs_code = generate_blogs_component(section['items'], header_comment, header_title)
                Path('components/Blogs.tsx').write_text(blogs_code)
                print("✓ Generated Blogs.tsx")
                
            elif 'project' in name or 'portfolio' in name or 'work' in name:
                header_comment = section.get('header_comment') or '// PORTFOLIO'
                header_title = section.get('header_title') or 'Featured Projects'
                projects_code = generate_projects_component(section['items'], header_comment, header_title)
                Path('components/Projects.tsx').write_text(projects_code)
                print("✓ Generated Projects.tsx")
    
    # Read and parse global.md for header and footer
    global_file = Path('global.md')
    if global_file.exists():
        global_content = global_file.read_text()
        global_sections = parse_global_markdown(global_content)
        
        # Generate Header component
        if 'header' in global_sections:
            header_data = global_sections['header']['data']
            header_code = generate_header_component(header_data)
            Path('components/Header.tsx').write_text(header_code)
            print("✓ Generated Header.tsx")
        
        # Generate Footer component
        if 'footer' in global_sections:
            footer_data = global_sections['footer']
            footer_code = generate_footer_component(footer_data)
            Path('components/Footer.tsx').write_text(footer_code)
            print("✓ Generated Footer.tsx")
    else:
        print("⚠ global.md not found - Header and Footer not regenerated")
    
    print("\n✅ Portfolio components generated successfully!")


def create_example_md():
    """Create an example home.md file"""
    example = '''---HERO---
name: Alex Johnson
role: Full Stack Developer & Product Designer
bio: Building exceptional digital experiences with modern web technologies. Specialized in React, TypeScript, and scalable system architecture.
photo: https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080
companies:
- Google | https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png
- Meta | https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg
- Amazon | https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg
- Microsoft | https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg
---

## Experience

### Senior Full Stack Developer
type: work
org: Google
period: 2022 - Present
Leading development of cloud-native applications and mentoring junior developers. Built scalable microservices handling millions of requests daily.

### Software Engineer
type: work
org: Meta
period: 2020 - 2022
Developed React-based user interfaces for social media platforms. Optimized performance for millions of concurrent users.

### M.S. Computer Science
type: education
org: Stanford University
period: 2016 - 2018
Focused on distributed systems and machine learning. Graduated with honors.

## Blog

### Building Scalable Microservices with Node.js
date: Oct 15, 2025
readTime: 8 min
category: BACKEND
image: https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080
Learn how to design and implement microservices architecture that can handle millions of requests with minimal latency.

### React Performance Optimization Techniques
date: Oct 5, 2025
readTime: 6 min
category: FRONTEND
image: https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080
Discover advanced patterns and techniques to make your React applications blazingly fast and responsive.

## Projects

### E-Commerce Platform
tags: React, Node.js, PostgreSQL, Stripe
image: https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080
github: #
demo: #
A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.

### AI Task Manager
tags: TypeScript, OpenAI, Next.js, Prisma
image: https://images.unsplash.com/photo-1628017973088-8feb5de8dddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080
github: #
demo: #
Smart task management application with AI-powered prioritization and natural language processing for task creation.
'''
    Path('home.md').write_text(example)
    print("Created example home.md file. Edit it and run the script again!")


if __name__ == '__main__':
    main()
