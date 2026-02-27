const fs = require('fs');
const content = fs.readFileSync('d:/Projects/Health-care-dynamics/frontend/src/Pages/user/UserProfile.jsx', 'utf8');

const regex = /<([A-Z][a-zA-Z0-9]*)/g;
let match;
while ((match = regex.exec(content)) !== null) {
    console.log("Found custom component:", match[1]);
}
