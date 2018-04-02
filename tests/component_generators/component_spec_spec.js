const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('Components::CompoenntSpec', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'tests', 'components', 'piyopiyo_component_spec.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../app/components/piyopiyo_component\');')).notEquals(-1);
      t.expect(content.indexOf('t.describe(\'PiyopiyoComponent\', () => {')).notEquals(-1);
      t.expect(content.indexOf('t.expect(subject().tag).equals(\'div\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fuga', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'tests', 'components', 'hoges', 'fuga_component_spec.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../../app/components/hoges/fuga_component\');')).notEquals(-1);
      t.expect(content.indexOf('t.describe(\'Hoges::FugaComponent\', () => {')).notEquals(-1);
      t.expect(content.indexOf('t.expect(subject().tag).equals(\'div\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fugas/foo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'tests', 'components', 'hoges', 'fugas', 'foo_component_spec.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../../../app/components/hoges/fugas/foo_component\');')).notEquals(-1);
      t.expect(content.indexOf('t.describe(\'Hoges::Fugas::FooComponent\', () => {')).notEquals(-1);
      t.expect(content.indexOf('t.expect(subject().tag).equals(\'div\');')).notEquals(-1);
    });
  });
});
