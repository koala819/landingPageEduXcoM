import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://eduroots.org';
const STATIC_PATHS = [
  '/',
  '/rgpd',
  '/mentions-legales',
  '/cgv',
  '/blog',
];
const POSTS_DIR = path.join(__dirname, '../src/pages/posts');

function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}

function getPostUrl(filePath) {
  // Ex: src/pages/posts/Actus_Tendances/01_mere.md => /blog/Actus_Tendances/01_mere
  const relPath = path.relative(POSTS_DIR, filePath);
  const url = relPath.replace(/\\/g, '/').replace(/\.md$/, '');
  return `/blog/${url}`;
}

function generateSitemap() {
  let urls = STATIC_PATHS.map(p => `  <url>\n    <loc>${BASE_URL}${p}</loc>\n  </url>`);

  const postFiles = getAllMarkdownFiles(POSTS_DIR);
  postFiles.forEach(file => {
    const postUrl = getPostUrl(file);
    urls.push(`  <url>\n    <loc>${BASE_URL}${postUrl}</loc>\n  </url>`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap, 'utf8');
  console.log('Sitemap généré avec succès !');
}

generateSitemap();