const fs = require('fs');

const filesToStrip = [
    'd:/Projects/Health-care-dynamics/frontend/src/Pages/user/UserDashboard.jsx',
    'd:/Projects/Health-care-dynamics/frontend/src/Pages/user/UserProfile.jsx',
    'd:/Projects/Health-care-dynamics/frontend/src/Pages/user/AppliedJobs.jsx',
    'd:/Projects/Health-care-dynamics/frontend/src/Pages/user/BookMarks.jsx'
];

filesToStrip.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Remove "import UserSidebar from './UserSidebar';"
    content = content.replace(/import UserSidebar from '\.\/UserSidebar';\r?\n?/g, '');

    // The top part to replace
    const topPattern1 = /<div className="dashboard-area[^>]*>\s*<div className="container">\s*<div className="row[^>]*>\s*<UserSidebar \/>\s*<div className="col-lg-9">/s;
    const topPattern2 = /<div className="dashboard-area[^>]*>\s*<div className="container">\s*<div className="row[^>]*>\s*\{\/\*\s*<UserSidebar \/>\s*\*\/\}\s*<div className="col-lg-9">/s;

    let match = content.match(topPattern1) || content.match(topPattern2);

    if (match) {
        content = content.replace(match[0], '');

        // The bottom part to replace
        // We know it ends with:
        //       </div>
        //     </div>
        //   </div>
        // </div>
        // 
        //     </div>
        //   )
        // }
        // We can use a regex to replace everything from the last 6 closing </div> up to the end
        const bottomPattern = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\)\s*\}/s;
        content = content.replace(bottomPattern, '</div>\n  );\n}');

        fs.writeFileSync(file, content);
        console.log(`Successfully stripped layout from ${file}`);
    } else {
        console.log(`Failed to find top pattern in ${file}`);
    }
});
