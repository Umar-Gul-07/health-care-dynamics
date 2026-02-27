const fs = require('fs');
const content = fs.readFileSync('d:/Projects/Health-care-dynamics/frontend/src/Pages/user/UserProfile.jsx', 'utf8');

console.log("Occurrences of UserSidebar in UserProfile:");
const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.includes('UserSidebar')) {
        console.log(`Line ${i + 1}: ${line}`);
    }
});
