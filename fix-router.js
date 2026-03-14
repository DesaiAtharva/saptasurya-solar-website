const fs = require('fs');

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

fixRouter('src/app/page.tsx');
fixRouter('src/components/Navbar/Navbar.tsx');
