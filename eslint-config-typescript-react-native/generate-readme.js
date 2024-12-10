const fs = require('fs');
const path = require('path');

const packageJson = require('./package.json');

// get peer deps from package.json
const peerDeps = packageJson.peerDependencies
const peerDepsString = Object.entries(peerDeps).map(([key, value]) => `${key}@${value}`).join(' ');

// update README.md with peerDeps
const readmeTemplatePath = path.join(__dirname, 'README-template.md');
const readme = fs.readFileSync(readmeTemplatePath, 'utf8');

const readmePath = path.join(__dirname, 'README.md');
const updatedReadme = readme.replace('{{peerDeps}}', peerDepsString);

fs.writeFileSync(readmePath, updatedReadme);
console.log('README.md updated with peer dependencies ✅');