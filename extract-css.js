import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf-8');
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);

if (styleMatch) {
    fs.writeFileSync('src/index.css', `@import "tailwindcss";\n` + styleMatch[1]);
    console.log('src/index.css created successfully');
} else {
    console.log('No style script found in index.html');
}
