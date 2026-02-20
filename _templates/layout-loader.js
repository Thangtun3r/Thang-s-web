/**
 * Layout Loader - Dynamically loads header and footer templates
 * Usage: Add script tag at the end of your HTML body
 */

(async function() {
  'use strict';

  async function loadTemplate(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return await response.text();
    } catch (error) {
      console.error('Template loading error:', error);
      return '';
    }
  }

  function injectHTML(placeholderId, html) {
    const placeholder = document.getElementById(placeholderId);
    if (placeholder) {
      placeholder.outerHTML = html;
    }
  }

  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    
    // Desktop navigation
    document.querySelectorAll('#brxe-vxjvrr .brxe-text-link').forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath || (currentPath !== '/' && linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.setAttribute('aria-current', 'page');
      }
    });
    
    // Mobile navigation
    document.querySelectorAll('#brxe-sbglkb .brxe-text-link').forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath || (currentPath !== '/' && linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // Load templates
  const [headHTML, headerHTML, footerHTML] = await Promise.all([
    loadTemplate('/_templates/layout-head.html'),
    loadTemplate('/_templates/layout-header.html'),
    loadTemplate('/_templates/layout-footer.html')
  ]);

  // Inject templates
  // Note: layout-head should be handled differently as it contains <head> content
  // This is a simplified version - for production, you'd want server-side rendering
  injectHTML('layout-header-placeholder', headerHTML);
  injectHTML('layout-footer-placeholder', footerHTML);

  // Set active navigation
  setActiveNavLink();
})();
