const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('Components::Style', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'assets', 'styles', 'components', 'piyopiyo.scss');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('.components\\/piyopiyo {')).notEquals(-1);
    });
  });

  t.describe('hoges/fuga', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'assets', 'styles', 'components', 'hoges', 'fuga.scss');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('.components\\/hoges\\/fuga {')).notEquals(-1);
    });
  });

  t.describe('hoges/fugas/foo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'assets', 'styles', 'components', 'hoges', 'fugas', 'foo.scss');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('.components\\/hoges\\/fugas\\/foo {')).notEquals(-1);
    });
  });
});
