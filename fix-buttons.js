const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add w-full sm:w-auto to buttons
    content = content.replace(/className=\"bg-\[#d3b582\] (.*?)\"/g, 'className="bg-[#d3b582] w-full sm:w-auto whitespace-normal sm:whitespace-nowrap $1"');
    content = content.replace(/className=\"bg-\[#084d43\] (.*?)\"/g, 'className="bg-[#084d43] w-full sm:w-auto whitespace-normal sm:whitespace-nowrap $1"');
    
    // Cleanup duplicate classes
    content = content.replace(/whitespace-nowrap whitespace-normal/g, 'whitespace-normal sm:whitespace-nowrap');
    content = content.replace(/whitespace-normal sm:whitespace-nowrap whitespace-normal sm:whitespace-nowrap/g, 'whitespace-normal sm:whitespace-nowrap');
    content = content.replace(/w-full sm:w-auto w-full sm:w-auto/g, 'w-full sm:w-auto');
    
    fs.writeFileSync(filePath, content);
  }
});

console.log('Script completed');
