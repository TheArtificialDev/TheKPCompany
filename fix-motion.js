// Remove framer motion dependencies and replace with standard HTML elements
const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    const stats = await stat(res);
    if (stats.isDirectory()) {
      return getFiles(res);
    }
    if (path.extname(res) === '.tsx' || path.extname(res) === '.ts') {
      return res;
    }
    return null;
  }));
  return files.filter(Boolean).flat();
}

async function processFile(file) {
  let content = await readFile(file, 'utf8');
  
  // Remove framer motion imports
  content = content.replace(/import.*framer-motion.*$/gm, '');
  
  // Replace motion components with standard HTML elements
  const motionElements = [
    'motion.div', 'motion.button', 'motion.a', 'motion.h1', 'motion.h2', 'motion.h3', 'motion.p', 
    'motion.span', 'motion.article', 'motion.section', 'motion.header', 'motion.ul', 'motion.li'
  ];
  
  motionElements.forEach(element => {
    const standardElement = element.replace('motion.', '');
    const regexOpen = new RegExp(`<${element}\\s`, 'g');
    const regexClose = new RegExp(`</${element}>`, 'g');
    
    content = content.replace(regexOpen, `<${standardElement} `);
    content = content.replace(regexClose, `</${standardElement}>`);
  });
  
  // Remove framer motion props
  content = content.replace(/(initial|animate|whileHover|whileTap|whileInView|variants|transition|viewport)=\{[^}]*\}/g, '');
  
  await writeFile(file, content, 'utf8');
  console.log(`Processed: ${file}`);
}

async function main() {
  const srcDir = path.resolve(__dirname, 'src');
  const files = await getFiles(srcDir);
  
  for (const file of files) {
    await processFile(file);
  }
  
  console.log('All files processed successfully!');
}

main().catch(console.error);
