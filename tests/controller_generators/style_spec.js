const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('Controllers::Style', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('app.scss', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'assets', 'styles', 'app.scss');
    });

    t.it('Insert @import', () => {
      const content = loadFile();
      t.expect(content.indexOf('@import "app/assets/styles/controllers/piyopiyo.scss";')).notEquals(-1);
      t.expect(content.indexOf('@import "app/assets/styles/controllers/hoges/fuga.scss";')).notEquals(-1);
      t.expect(content.indexOf('@import "app/assets/styles/controllers/hoges/fugas/foo.scss";')).notEquals(-1);
    });
  });

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'assets', 'styles', 'controllers', 'piyopiyo.scss');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('.controllers\\/piyopiyo {')).notEquals(-1);
    });
  });

  t.describe('hoges/fuga', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'assets', 'styles', 'controllers', 'hoges', 'fuga.scss');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('.controllers\\/hoges\\/fuga {')).notEquals(-1);
    });
  });

  t.describe('hoges/fugas/foo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'assets', 'styles', 'controllers', 'hoges', 'fugas', 'foo.scss');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('.controllers\\/hoges\\/fugas\\/foo {')).notEquals(-1);
    });
  });
});
