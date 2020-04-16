const assert = require('chai').assert;
const assertView = require('chai').assertView;

describe('github', function() {
  it('should find hermione', function() {
    return this.browser
      .url('https://github.com/gemini-testing/hermione')
      .assertView('plain', '#readme h1:first-of-type', { allowViewportOverflow: true });
  });
});
