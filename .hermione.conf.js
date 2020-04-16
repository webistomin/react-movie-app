module.exports = {
  baseUrl: 'http://localhost:3000',

  screenshotPath: 'tests/e2e/screenshots',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  },
  // plugins: {
  //   'html-reporter/hermione': {
  //     enabled: true,
  //     path: 'tests/hermione/hermione-reports',
  //     defaultView: 'all',
  //     errorPatterns: [
  //       'Parameter .* must be a string',
  //       {
  //         name: 'Cannot read property of undefined',
  //         pattern: 'Cannot read property .* of undefined'
  //       }
  //     ]
  //   },
  //   'hermione-custom-commands': true
  // }
};
