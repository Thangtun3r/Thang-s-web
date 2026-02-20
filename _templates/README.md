# Centralized Layout System

This folder contains the master layout templates that are used across all pages of the site.

## Files

- `layout-head.html` - Contains all `<head>` content including meta tags, stylesheets, and initial scripts
- `layout-header.html` - Contains the site header, navigation, and opening `<body>` and `<main>` tags
- `layout-footer.html` - Contains the footer, all scripts, and closing tags

## Usage

### Option 1: Manual Copy-Paste (Current Method)
When creating or updating pages, copy the content from these template files to maintain consistency.

### Option 2: JavaScript Dynamic Loading (Recommended)
Use the `layout-loader.js` script to automatically inject these templates:

```html
<!DOCTYPE html>
<html lang="en-US">
<!-- Head will be loaded here -->
<div id="layout-head-placeholder"></div>

<!-- Header will be loaded here -->
<div id="layout-header-placeholder"></div>

<!-- Your page content here -->
<section id="brxe-26b41d" class="brxe-section bricks-lazy-hidden">
  <div id="brxe-6e22b9" class="brxe-container brx-grid bricks-lazy-hidden">
    <!-- Your content cards here -->
  </div>
</section>

<!-- Footer will be loaded here -->
<div id="layout-footer-placeholder"></div>

<script src="/_templates/layout-loader.js"></script>
</html>
```

### Option 3: Build System (Future)
Consider setting up a static site generator like:
- Astro
- 11ty
- Hugo
- Or a simple Node.js build script

## Updating the Layout

When you need to make changes to the header, footer, or styles:

1. Edit the appropriate template file in this folder
2. Either manually update all pages OR run a build script to regenerate them
3. Test on one page first before rolling out to all pages

## Active Navigation Highlighting

To highlight the current page in navigation, add `aria-current="page"` to the appropriate link in each page's header.
