const fs = require('fs');
const path = require('path');

function fixRouter(file) {
  let content = fs.readFileSync(file, 'utf8');
  if(!content.includes("'use client';")) {
    content = "'use client';\n" + content;
  }
  content = content.replace(/react-router-dom/g, 'next/navigation');
  content = content.replace(/\buseNavigate\b/g, 'useRouter');
  content = content.replace(/\buseLocation\b/g, 'usePathname');
  content = content.replace(/\bnavigate\(/g, 'router.push(');
  content = content.replace(/navigate = useRouter/g, 'router = useRouter');
  content = content.replace(/location = usePathname/g, 'pathname = usePathname');
  content = content.replace(/location\.pathname/g, 'pathname');
  fs.writeFileSync(file, content);
}

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

// 1. Move pages
const pagesDir = path.join('src', 'pages');
if (fs.existsSync(pagesDir)) {
  fs.readdirSync(pagesDir).forEach(pageName => {
    const pageDir = path.join(pagesDir, pageName);
    if (fs.statSync(pageDir).isDirectory()) {
      const pageFile = path.join(pageDir, `${pageName}.js`);
      if (fs.existsSync(pageFile)) {
        const destRouteDir = path.join('src', 'app', pageName.toLowerCase());
        if (!fs.existsSync(destRouteDir)) fs.mkdirSync(destRouteDir, { recursive: true });
        const destFile = path.join(destRouteDir, 'page.tsx');
        fs.renameSync(pageFile, destFile);
        fixRouter(destFile);
        fs.rmSync(pageDir, { recursive: true, force: true });
      }
    }
  });
  // Clean up any empty empty dirs in src/pages
  fs.rmSync(pagesDir, { recursive: true, force: true });
}

// 2. Rename components & apply "use client"
const compDir = path.join('src', 'components');
if (fs.existsSync(compDir)) {
  walkDir(compDir, (filePath) => {
    if (filePath.endsWith('.js')) {
      const newPath = filePath.replace(/\.js$/, '.tsx');
      fs.renameSync(filePath, newPath);
      fixRouter(newPath); 
    }
  });
}
