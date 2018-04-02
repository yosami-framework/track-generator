const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('webpack.config.js', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'webpack.config.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('module.exports = require(\'track-builder/lib/webpack\')')).notEquals(-1);
    });
  });
});
