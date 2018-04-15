const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('.babelrc', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', '.babelrc');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('["transform-react-jsx", {')).notEquals(-1);
      t.expect(content.indexOf('"pragma": "$"')).notEquals(-1);
    });
  });
});
