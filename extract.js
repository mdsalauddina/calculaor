import fs from 'fs';

const html = fs.readFileSync('index.html', 'utf-8');
const babelMatch = html.match(/<script type="text\/babel"[^>]*>([\s\S]*?)<\/script>/);

if (babelMatch) {
    let code = babelMatch[1];
    
    // Replace const { useState, useEffect, useMemo } = React;
    code = code.replace(/const \{ useState, useEffect, useMemo \} = React;/, 'import React, { useState, useEffect, useMemo } from "react";\nimport "./index.css";\n');
    
    // Remove the ReactDOM part at the end
    code = code.replace(/const root = ReactDOM\.createRoot\([\s\S]*$/, 'export default App;');
    
    fs.writeFileSync('src/App.tsx', code);
    console.log('src/App.tsx created successfully');
} else {
    console.log('No Babel script found in index.html');
}
