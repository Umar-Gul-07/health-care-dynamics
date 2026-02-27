const fs = require('fs');

const originalFiles = [
    'd:/Projects/Health-care-dynamics/frontend/src/Pages/user/UserDashboard.jsx',
    'd:/Projects/Health-care-dynamics/frontend/src/Pages/user/UserProfile.jsx',
    'd:/Projects/Health-care-dynamics/frontend/src/Pages/user/AppliedJobs.jsx',
    'd:/Projects/Health-care-dynamics/frontend/src/Pages/user/BookMarks.jsx'
];

let sidebarContent = '';

originalFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    const startPattern = '<div className="col-lg-3">\r\n        <div className="dashboard-sidebar">';
    const altStartPattern = '<div className="col-lg-3">\n        <div className="dashboard-sidebar">';

    let startIndex = content.indexOf(startPattern);
    let startLen = startPattern.length;
    if (startIndex === -1) {
        startIndex = content.indexOf(altStartPattern);
        startLen = altStartPattern.length;
    }

    if (startIndex !== -1) {
        // Find matching end div for col-lg-3
        // Since we know it's relatively well-formatted, let's just find the exact block end.
        // It ends with:
        const endPattern = '        </div>\r\n      </div>\r\n      <div className="col-lg-9">';
        const altEndPattern = '        </div>\n      </div>\n      <div className="col-lg-9">';

        let subEndIndex = content.indexOf(endPattern);
        let endLen = '        </div>\r\n      </div>\r\n'.length;
        if (subEndIndex === -1) {
            subEndIndex = content.indexOf(altEndPattern);
            endLen = '        </div>\n      </div>\n'.length;
        }

        const endIndex = subEndIndex + endLen;

        if (subEndIndex !== -1) {
            if (!sidebarContent && file.includes('UserDashboard')) {
                // Extract sidebar content only once
                sidebarContent = content.substring(startIndex, endIndex);

                // create UserSidebar.jsx
                let sidebarFileContent = `import React from 'react';\nimport { NavLink } from 'react-router-dom';\n\nconst UserSidebar = () => {\n  return (\n    ${sidebarContent}  );\n}\n\nexport default UserSidebar;\n`;

                // Replace anchor tags with NavLinks
                sidebarFileContent = sidebarFileContent
                    .replace(/<a className="active" href="dashboard\.html">/g, '<NavLink to="/user-dashboard">')
                    .replace(/<a href="dashboard\.html">/g, '<NavLink to="/user-dashboard">')
                    .replace(/<a href="user-profile">/g, '<NavLink to="/user-profile">')
                    .replace(/<a href="my-profile\.html">/g, '<NavLink to="/user-profile">')
                    .replace(/<a className="active" href="my-profile\.html">/g, '<NavLink to="/user-profile">')
                    .replace(/<a href="applied-job">/g, '<NavLink to="/applied-jobs">')
                    .replace(/<a href="applied-job\.html">/g, '<NavLink to="/applied-jobs">')
                    .replace(/<a className="active" href="applied-job\.html">/g, '<NavLink to="/applied-jobs">')
                    .replace(/<a href="bookmark">/g, '<NavLink to="/bookmark">')
                    .replace(/<a href="bookmark\.html">/g, '<NavLink to="/bookmark">')
                    .replace(/<a className="active" href="bookmark\.html">/g, '<NavLink to="/bookmark">')
                    .replace(/<a href="edit-profile\.html">/g, '<NavLink to="/edit-profile">')
                    .replace(/<a href="edit-profile-2\.html">/g, '<NavLink to="/edit-profile">')
                    .replace(/<a href="view-resume\.html">/g, '<NavLink to="/view-resume">')
                    .replace(/<a href="settings\.html">/g, '<NavLink to="/settings">')
                    .replace(/<\/a>/g, '</NavLink>');

                fs.writeFileSync('d:/Projects/Health-care-dynamics/frontend/src/Pages/user/UserSidebar.jsx', sidebarFileContent);
                console.log("Created UserSidebar.jsx");
            }

            // Replace the extracted sidebar content with the new UserSidebar component
            const newContent = content.substring(0, startIndex) + '<UserSidebar />\r\n' + content.substring(endIndex);

            // Add import statement at the top if not there
            let finalContent = newContent;
            if (!finalContent.includes("import UserSidebar")) {
                const importPattern = "import React from 'react'";
                finalContent = finalContent.replace(importPattern, "import React from 'react';\nimport UserSidebar from './UserSidebar';");
            }

            fs.writeFileSync(file, finalContent);
            console.log(`Refactored ${file}`);
        } else {
            console.log(`Could not find end pattern in ${file}`);
        }
    } else {
        console.log(`Could not find start pattern in ${file}`);
    }
});
