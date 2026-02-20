/**
 * Build Script - Combines templates with page content
 * Run: node _templates/build-pages.js
 */

const fs = require('fs');
const path = require('path');

// Template paths
const TEMPLATES_DIR = path.join(__dirname);
const ROOT_DIR = path.join(__dirname, '..');

// Read templates
const layoutHead = fs.readFileSync(path.join(TEMPLATES_DIR, 'layout-head.html'), 'utf8');
const layoutHeader = fs.readFileSync(path.join(TEMPLATES_DIR, 'layout-header.html'), 'utf8');
const layoutFooter = fs.readFileSync(path.join(TEMPLATES_DIR, 'layout-footer.html'), 'utf8');

// Page configurations
const pages = [
  {
    source: path.join(ROOT_DIR, 'index.html'),
    title: 'You!🫵 Just Keep Making! - Thangtuner',
    activePath: '/',
    ogUrl: '/',
    ogTitle: 'You!🫵 Just Keep Making! - Thangtuner'
  },
  {
    source: path.join(ROOT_DIR, 'studies', 'index.html'),
    title: 'Studies',
    activePath: '/studies/',
    ogUrl: '/studies/',
    ogTitle: 'Studies'
  },
  // Add more pages here
];

function extractPageContent(html) {
  // Extract content between <main> and </main>
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (!mainMatch) {
    console.error('Could not find <main> content');
    return '';
  }
  return mainMatch[1];
}

function setActiveNavigation(headerHTML, activePath) {
  // Set aria-current="page" on active navigation items
  let updatedHeader = headerHTML;
  
  // Desktop nav
  updatedHeader = updatedHeader.replace(
    new RegExp(`(<a[^>]*href="${activePath}"[^>]*)>`, 'g'),
    '$1 aria-current="page">'
  );
  
  return updatedHeader;
}

function buildPage(config) {
  console.log(`Building: ${config.source}`);
  
  // Read the source file
  let sourceHTML = fs.readFileSync(config.source, 'utf8');
  
  // Extract page content
  const pageContent = extractPageContent(sourceHTML);
  
  // Customize head for this page
  let customHead = layoutHead
    .replace(/<title>.*?<\/title>/, `<title>${config.title}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${config.ogUrl}`)
    .replace(/(<link rel="shortlink" href=")[^"]*/, `$1/?p=433`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${config.ogUrl}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${config.ogTitle}`);
  
  // Set active navigation
  const customHeader = setActiveNavigation(layoutHeader, config.activePath);
  
  // Combine everything
  const finalHTML = customHead + '\n' + customHeader + '\n' + pageContent + '\n' + layoutFooter;
  
  // Write back to file
  fs.writeFileSync(config.source, finalHTML, 'utf8');
  console.log(`✓ Built: ${config.source}`);
}

// Build all pages
console.log('🔨 Building pages...\n');
pages.forEach(buildPage);
console.log('\n✅ All pages built successfully!');
