const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('package.json', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'package.json');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('"name": "test",')).notEquals(-1);
      t.expect(content.indexOf('"mithril":')).notEquals(-1);
      t.expect(content.indexOf('"track-packages":')).notEquals(-1);
      t.expect(content.indexOf('"track-server-cache-lru-cache":')).notEquals(-1);
      t.expect(content.indexOf('"track-server-middleware-fastify":')).notEquals(-1);
      t.expect(content.indexOf('"track-generator":')).notEquals(-1);
      t.expect(content.indexOf('"track-spec":')).notEquals(-1);
    });
  });
});
