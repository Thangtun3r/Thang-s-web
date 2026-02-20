# Thangtuner Portfolio

Modern portfolio website showcasing game development projects, research, music, and design work.

## 🚀 Tech Stack

- **Pure HTML5** - Semantic markup
- **Vanilla CSS3** - CSS Variables, Grid, Flexbox
- **Vanilla JavaScript** - No dependencies
- **Static Site** - Fast, SEO-friendly

## 📁 Project Structure

```
├── index.html              # Homepage (Games)
├── studies/                # Research projects
├── music/                  # Music portfolio
├── other-works/            # Design projects
├── about-me/               # About page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # Main JavaScript
├── wp-content/uploads/    # Images & assets
└── .cpanel.yml            # Deployment config
```

## 🎨 Design System

### Colors
- Primary: `#7b00ff` (Purple)
- Accent: `#ff5722` (Orange)
- Background: `#fffef0` (Cream)

### Typography
- Body: Roboto
- Headings: PT Serif
- Display: Inter

## 🛠️ Development

### Local Development
Simply open `index.html` in your browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js (if you have it)
npx serve

# PHP
php -S localhost:8000
```

### Making Changes
1. Edit HTML files directly
2. Modify `css/style.css` for styling
3. Update `js/main.js` for interactivity
4. Test in browser
5. Commit changes

## 📦 Deployment

Deploys automatically to cPanel via `.cpanel.yml` when pushed to Git.

## ✨ Features

- 📱 Fully responsive design
- 🎯 Sticky navigation with glass effect
- 🎨 Project cards with hover effects
- 📊 Tag system for categorization
- ⬆️ Back-to-top button
- 🍔 Mobile menu

## 🔧 Customization

### Adding New Projects
Edit the HTML to add new project cards:

```html
<a href="/your-project/" class="card">
  <div class="card-image">
    <img src="/path/to/image.png" alt="Project Name">
  </div>
  <div class="card-content">
    <h3 class="card-title">Project Name</h3>
    <p class="card-description">Project description</p>
    <div class="card-tags">
      <span class="tag">Tag 1</span>
      <span class="tag">Tag 2</span>
    </div>
  </div>
</a>
```

### Modifying Colors
Update CSS variables in `css/style.css`:

```css
:root {
  --color-primary: #7b00ff;
  --color-accent: #ff5722;
}
```

## 📄 License

© 2026 Vo Quang Thang. All rights reserved.

## 🌐 Links

- [Itch.io](https://thangtuner.itch.io/)
- [Portfolio](https://thangtuner.com/)
