const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('Controllers::ControllerSpec', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'tests', 'controllers', 'piyopiyo_controller_spec.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../app/controllers/piyopiyo_controller\');')).notEquals(-1);
      t.expect(content.indexOf('t.describe(\'PiyopiyoController\', () => {')).notEquals(-1);
      t.expect(content.indexOf('t.expect(subject().tag).equals(\'html\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fuga', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'tests', 'controllers', 'hoges', 'fuga_controller_spec.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../../app/controllers/hoges/fuga_controller\');')).notEquals(-1);
      t.expect(content.indexOf('t.describe(\'Hoges::FugaController\', () => {')).notEquals(-1);
      t.expect(content.indexOf('t.expect(subject().tag).equals(\'html\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fugas/foo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'tests', 'controllers', 'hoges', 'fugas', 'foo_controller_spec.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../../../app/controllers/hoges/fugas/foo_controller\');')).notEquals(-1);
      t.expect(content.indexOf('t.describe(\'Hoges::Fugas::FooController\', () => {')).notEquals(-1);
      t.expect(content.indexOf('t.expect(subject().tag).equals(\'html\');')).notEquals(-1);
    });
  });
});
