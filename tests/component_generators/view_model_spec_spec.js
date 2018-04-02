const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('Components::ViewModelSpec', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'tests', 'view_models', 'components', 'piyopiyo_spec.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../../app/view_models/components/piyopiyo\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fuga', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'tests', 'view_models', 'components', 'hoges', 'fuga_spec.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../../../app/view_models/components/hoges/fuga\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fugas/foo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'tests', 'view_models', 'components', 'hoges', 'fugas', 'foo_spec.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../../../../app/view_models/components/hoges/fugas/foo\');')).notEquals(-1);
    });
  });
});
