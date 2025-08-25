# Academic CV Website

A modern, professional academic website built with Jekyll and designed for GitHub Pages. Features a polished design with animations, dark/light mode toggle, and responsive layout perfect for showcasing academic work and research.

## 🎨 Features

### Design & User Experience
- **Modern, Professional Design** - Clean typography and elegant layout
- **Animated Hero Section** - Eye-catching profile photo with smooth reveal animations
- **Dark/Light Mode Toggle** - Automatic system preference detection with manual override
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Subtle scroll animations and hover effects
- **Accessibility First** - WCAG compliant with keyboard navigation support

### Color Palette
- **Space Cadet** (#2B2D42) - Deep backgrounds and accents
- **Marian Blue** (#1E3A8A) - Navigation and primary highlights  
- **True Blue** (#1666C0) - Links, buttons, and interactive elements
- **Jet** (#333333) - Body text and secondary elements
- **White Smoke** (#F5F5F5) - Light backgrounds and contrast

### Content Sections
- **Hero Landing** - Animated profile photo, name, title, and call-to-action buttons
- **Publications** - Academic papers with proper citation formatting
- **Projects** - Research projects and software applications
- **CV** - Embedded PDF viewer with download option
- **Contact** - Multiple contact methods and social profiles

### Technical Features
- **Fast Loading** - Optimized assets and efficient code
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Print Friendly** - Optimized print styles for CVs and publications
- **Progressive Enhancement** - Works without JavaScript
- **Modern Browser Support** - Chrome, Firefox, Safari, Edge

## 🚀 Quick Start

### 1. Clone and Setup
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
bundle install
```

### 2. Configuration
Edit `_config.yml` with your information:
```yaml
title: "Your Name"
name: "Your Full Name"
email: "your.email@university.edu"
institution: "Your University"
department: "Your Department"
position: "Your Position"
tagline: "Your Research Focus"
```

### 3. Add Your Content
- Replace `assets/images/profile.jpg` with your photo
- Upload your CV as `assets/cv.pdf`
- Update the content in `index.md`, `cv.md`, `publications.md`, etc.
- Add your publications to `_publications/`
- Add your projects to `_projects/`

### 4. Deploy to GitHub Pages
1. Create a new repository named `yourusername.github.io`
2. Push your code to the main branch
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io`

## 📁 Project Structure

```
.
├── _config.yml              # Site configuration
├── _includes/
│   └── nav.html             # Navigation component
├── _layouts/
│   ├── default.html         # Default page layout
│   ├── home.html           # Homepage layout
│   ├── publication.html     # Publication detail layout
│   ├── project.html        # Project detail layout
│   └── 404.html            # 404 error page
├── _publications/           # Publication markdown files
│   └── example-paper.md
├── _projects/              # Project markdown files
│   └── example-project.md
├── assets/
│   ├── images/
│   │   ├── profile.jpg     # Your profile photo
│   │   └── favicon.ico     # Site favicon
│   ├── cv.pdf             # Your CV in PDF format
│   ├── styles.css         # Main stylesheet
│   ├── theme-toggle.js    # Theme switching functionality
│   └── animations.js      # Animation and interaction scripts
├── index.md               # Homepage content
├── cv.md                  # CV page
├── publications.md        # Publications list
├── projects.md           # Projects list
├── contact.md            # Contact information
└── README.md             # This file
```

## 🎯 Customization

### Colors and Branding
The color palette is defined in CSS custom properties in `assets/styles.css`. Update the `:root` and `[data-theme="dark"]` sections to change colors:

```css
:root {
  --space-cadet: #2B2D42;
  --marian-blue: #1E3A8A;
  --true-blue: #1666C0;
  --jet: #333333;
  --white-smoke: #F5F5F5;
}
```

### Typography
Fonts are imported from Google Fonts. Update the import URL and CSS variables to change typography:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
:root {
  --font-serif: 'Your Serif Font', serif;
  --font-sans: 'Your Sans Font', sans-serif;
}
```

### Animations
Disable animations for users who prefer reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are automatically disabled */
}
```

## 📝 Content Management

### Adding Publications
Create markdown files in `_publications/` with frontmatter:

```yaml
---
title: "Your Paper Title"
authors: "Author Names"
venue: "Journal/Conference Name"
year: 2024
tags: ["AI", "Machine Learning"]
links:
  - name: "PDF"
    url: "/assets/papers/your-paper.pdf"
  - name: "DOI"
    url: "https://doi.org/your-doi"
---

Your publication abstract and content here...
```

### Adding Projects
Create markdown files in `_projects/` with frontmatter:

```yaml
---
title: "Project Name"
duration: "2023 - Present"
role: "Lead Developer"
technologies: ["Python", "React", "TensorFlow"]
links:
  - name: "GitHub"
    url: "https://github.com/yourusername/project"
  - name: "Demo"
    url: "https://your-demo-site.com"
---

Your project description here...
```

## 🛠️ Development

### Local Development
```bash
bundle exec jekyll serve
# Site available at http://localhost:4000
```

### Building for Production
```bash
bundle exec jekyll build
# Static files generated in _site/
```

### Testing
```bash
# Check for broken links
bundle exec htmlproofer ./_site

# Validate HTML
bundle exec jekyll doctor

# Check accessibility
# Use browser tools or axe-cli
```

## 📱 Browser Compatibility

- **Chrome** 80+ ✅
- **Firefox** 75+ ✅
- **Safari** 13+ ✅
- **Edge** 80+ ✅
- **Mobile Safari** iOS 13+ ✅
- **Chrome Mobile** Android 8+ ✅

## 🎨 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s

## 🔧 Troubleshooting

### Common Issues

**Site not loading on GitHub Pages:**
- Ensure repository is named `username.github.io`
- Check that GitHub Pages is enabled in settings
- Verify Jekyll builds successfully

**Images not displaying:**
- Check file paths are correct and case-sensitive
- Ensure images are in the `assets/images/` directory
- Verify image files are committed to repository

**Styles not applying:**
- Check CSS file paths in layout files
- Ensure `assets/styles.css` exists and is valid
- Clear browser cache

**Dark mode not working:**
- Verify JavaScript files are loading correctly
- Check browser console for errors
- Ensure theme toggle button exists in navigation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📬 Support

If you have questions or need help customizing your site:

1. Check the [GitHub Issues](../../issues) for existing solutions
2. Create a new issue with detailed description
3. Contact the maintainer via email

## 🙏 Acknowledgments

- **Jekyll** - Static site generator
- **GitHub Pages** - Free hosting
- **Google Fonts** - Typography
- **CSS Custom Properties** - Modern styling approach
- **Intersection Observer API** - Smooth scroll animations

---

**Built with ❤️ for the academic community**

*This template was designed to help researchers and academics create beautiful, professional websites to showcase their work. We hope it serves you well in your academic journey!*
