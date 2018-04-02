const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('Components::ViewModel', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'view_models', 'components', 'piyopiyo.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('const ApplicationViewModel = require(\'./../application_view_model\');')).notEquals(-1);
      t.expect(content.indexOf('class Piyopiyo extends ApplicationViewModel {')).notEquals(-1);
      t.expect(content.indexOf('name(\'piyopiyo\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fuga', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'view_models', 'components', 'hoges', 'fuga.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('const ApplicationViewModel = require(\'./../../application_view_model\');')).notEquals(-1);
      t.expect(content.indexOf('class Fuga extends ApplicationViewModel {')).notEquals(-1);
      t.expect(content.indexOf('name(\'hoges/fuga\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fugas/foo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'view_models', 'components', 'hoges', 'fugas', 'foo.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('const ApplicationViewModel = require(\'./../../../application_view_model\');')).notEquals(-1);
      t.expect(content.indexOf('class Foo extends ApplicationViewModel {')).notEquals(-1);
      t.expect(content.indexOf('name(\'hoges/fugas/foo\');')).notEquals(-1);
    });
  });
});
