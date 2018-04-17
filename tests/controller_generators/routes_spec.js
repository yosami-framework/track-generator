const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('Controllers::Routes', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.beforeEach(() => {
    file = path.resolve(__dirname, '../', '../', 'tmp', 'config', 'routes.js');
  });

  t.it('Insert get', () => {
    const content = loadFile();
    t.expect(content.indexOf('get(\'fuga\', {to: \'hoges/fuga\', as: \'hoges_fuga\'});')).notEquals(-1);
    t.expect(content.indexOf('get(\'piyopiyo\', {to: \'piyopiyo\', as: \'piyopiyo\'});')).notEquals(-1);
    t.expect(content.indexOf('get(\'foo\', {to: \'hoges/fugas/foo\', as: \'hoges_fugas_foo\'});')).notEquals(-1);
  });
});
