# Quick Reference Guide

This guide provides quick instructions for common updates to your portfolio site.

## 🔄 Common Update Tasks

### Updating the Header/Footer

1. Edit `src/global.md`
2. Run `python src/build.py`
3. Deploy with `npm run deploy`

### Adding/Updating a Blog Post

1. Create or edit a markdown file in `src/assets/blogs/`
2. Run `python src/build_blogs.py`
3. Deploy with `npm run deploy`

### Adding/Updating a Project

1. Create or edit a markdown file in `src/assets/projects/`
2. Run `python src/build_projects.py`
3. Deploy with `npm run deploy`

### Updating Your Resume

1. Replace `src/assets/resume/Niraj_Kamal_Resume.pdf` with your new PDF
2. Deploy with `npm run deploy`

### Changing Homepage Content

1. Edit `src/home.md`
2. Run `python src/build.py`
3. Deploy with `npm run deploy`

## 🌐 Deployment Process

Complete deployment command sequence:

```bash
# Generate all components from markdown
python src/build.py
python src/build_blogs.py
python src/build_projects.py

# Deploy to GitHub Pages
npm run deploy
```

## 📂 Key File Locations

- **Header/Footer Config**: `src/global.md`
- **Homepage Content**: `src/home.md`
- **Blog Posts**: `src/assets/blogs/`
- **Projects**: `src/assets/projects/`
- **Resume PDF**: `src/assets/resume/Niraj_Kamal_Resume.pdf`
- **Profile Photo**: `src/assets/Niraj_Photo.png`

## 🎨 Style Customization

### Mobile Header Accordion

To toggle the orange style for the mobile accordion menu:

1. Edit `src/global.md`
2. Set `orangeAccordion: true` or `orangeAccordion: false`
3. Run `python src/build.py`
4. Deploy with `npm run deploy`

### Theme Colors

To change theme colors, edit the CSS variables in:
`src/styles/globals.css`