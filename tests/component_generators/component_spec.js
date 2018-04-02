const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('Components::Compoennt', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'components', 'piyopiyo_component.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./application_component\');')).notEquals(-1);
      t.expect(content.indexOf('class PiyopiyoComponent extends ApplicationComponent')).notEquals(-1);
      t.expect(content.indexOf('name(\'piyopiyo\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fuga', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'components', 'hoges', 'fuga_component.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../application_component\');')).notEquals(-1);
      t.expect(content.indexOf('class FugaComponent extends ApplicationComponent')).notEquals(-1);
      t.expect(content.indexOf('name(\'hoges/fuga\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fugas/foo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'components', 'hoges', 'fugas', 'foo_component.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../application_component\');')).notEquals(-1);
      t.expect(content.indexOf('class FooComponent extends ApplicationComponent')).notEquals(-1);
      t.expect(content.indexOf('name(\'hoges/fugas/foo\');')).notEquals(-1);
    });
  });
});
