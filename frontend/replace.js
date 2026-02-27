const fs = require('fs');

let home = fs.readFileSync('src/Pages/Home.jsx', 'utf8');
const pristine = fs.readFileSync('pristine_sections.txt', 'utf8');

// The 4 sections to replace
const sections = [
    'home1-location-area mb-120',
    'home1-review-area mb-120',
    'home1-trusted-company mb-120',
    'home1-top-recruiters mb-120'
];

function getHtmlBlock(html, className) {
    const startIndex = html.indexOf('<div className="' + className + '">');
    if (startIndex === -1) return null;

    let depth = 0;
    let endIndex = startIndex;

    for (let i = startIndex; i < html.length; i++) {
        if (html.startsWith('<div', i)) depth++;
        if (html.startsWith('</div', i)) {
            depth--;
            if (depth === 0) {
                endIndex = i + '</div>'.length;
                break;
            }
        }
    }
    return { start: startIndex, end: endIndex, content: html.substring(startIndex, endIndex) };
}

for (const secClass of sections) {
    const bloatedBlock = getHtmlBlock(home, secClass);
    const pristineBlock = getHtmlBlock(pristine, secClass);

    if (bloatedBlock && pristineBlock) {
        console.log('Replacing ', secClass);
        home = home.substring(0, bloatedBlock.start) + pristineBlock.content + home.substring(bloatedBlock.end);
    } else {
        console.log('Failed to find ', secClass);
    }
}

fs.writeFileSync('src/Pages/Home.jsx', home);
console.log('Home.jsx updated with pristine sliders!');
