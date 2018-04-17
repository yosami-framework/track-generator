const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('Controllers::Controller', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'controllers', 'piyopiyo_controller.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./application_controller\');')).notEquals(-1);
      t.expect(content.indexOf('class PiyopiyoController extends ApplicationController')).notEquals(-1);
      t.expect(content.indexOf('name(\'piyopiyo\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fuga', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'controllers', 'hoges', 'fuga_controller.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../application_controller\');')).notEquals(-1);
      t.expect(content.indexOf('class FugaController extends ApplicationController')).notEquals(-1);
      t.expect(content.indexOf('name(\'hoges/fuga\');')).notEquals(-1);
    });
  });

  t.describe('hoges/fugas/foo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'controllers', 'hoges', 'fugas', 'foo_controller.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('require(\'./../../application_controller\');')).notEquals(-1);
      t.expect(content.indexOf('class FooController extends ApplicationController')).notEquals(-1);
      t.expect(content.indexOf('name(\'hoges/fugas/foo\');')).notEquals(-1);
    });
  });
});
