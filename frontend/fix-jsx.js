const fs = require('fs');

let content = fs.readFileSync('src/Pages/Home.jsx', 'utf8');

// replace <img ...> with <img ... />
content = content.replace(/<img(.*?)>/g, (match, attrs) => {
    if (attrs.endsWith('/')) return match;
    return '<img' + attrs + ' />';
});

// also fix <input ...> if any
content = content.replace(/<input(.*?)>/g, (match, attrs) => {
    if (attrs.endsWith('/')) return match;
    return '<input' + attrs + ' />';
});

fs.writeFileSync('src/Pages/Home.jsx', content);
console.log('Fixed JSX tags in Home.jsx');
