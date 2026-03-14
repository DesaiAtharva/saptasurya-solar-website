const fs = require('fs');
const path = require('path');

function fixImports(file) {
  let content = fs.readFileSync(file, 'utf8');
  // Replace ../../components with @/components
  content = content.replace(/\.\.\/\.\.\/components/g, '@/components');
  content = content.replace(/\.\.\/components/g, '@/components');
  // Context and theme
  content = content.replace(/\.\.\/\.\.\/context/g, '@/context');
  content = content.replace(/\.\.\/context/g, '@/context');
  content = content.replace(/\.\.\/\.\.\/theme/g, '@/theme');
  content = content.replace(/\.\.\/theme/g, '@/theme');
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

walkDir('src/app', (file) => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    fixImports(file);
  }
});
walkDir('src/components', (file) => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    fixImports(file);
  }
});
