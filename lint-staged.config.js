module.exports = {
  'src/**/*.{js,jsx,json,md}': [
    'npm run lint:write',
    'npm run prettier:write',
    'npm run ec:write',
    'npx scriptlint',
    'git add',
  ],
};
