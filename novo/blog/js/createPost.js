// createPost.js
const fs = require('fs');
const path = require('path');

const [title, content] = process.argv.slice(2);

if (!title || !content) {
    console.error('Título e conteúdo são obrigatórios.');
    process.exit(1);
}

const filename = `${Date.now()}-${title.replace(/\s+/g, '-').toLowerCase()}.md`;
const filePath = path.join(__dirname, 'posts', filename);
const markdownContent = `# ${title}\n\n${content}`;

fs.writeFileSync(filePath, markdownContent);
console.log(`Post criado: ${filename}`);
