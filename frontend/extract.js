const fs = require('fs');

const html = fs.readFileSync('D:/Templates/hospital-dynamics/demo.egenslab.com/html/jobes/preview/index.html', 'utf8');

function extractHtml(className) {
    const startIndex = html.indexOf('<div class="' + className + '">');
    if (startIndex === -1) return 'NOT FOUND: ' + className;

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
    return html.substring(startIndex, endIndex);
}

const sections = [
    'home1-location-area mb-120',
    'home1-review-area mb-120',
    'home1-trusted-company mb-120',
    'home1-top-recruiters mb-120'
];

let results = sections.map(sec => extractHtml(sec)).join('\n\n\n');

// Convert HTML to JSX
let jsx = results
    .replace(/ class="/g, ' className="')
    .replace(/ tabindex="/g, ' tabIndex="')
    .replace(/<!--.*?-->/gs, '');

fs.writeFileSync('pristine_sections.txt', jsx);
console.log('Extracted to pristine_sections.txt');
