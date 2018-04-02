const t    = require('track-spec');
const fs   = require('fs');
const path = require('path');

t.describe('Controllers::View', () => {
  const loadFile = (() => fs.readFileSync(file));
  let file = null;

  t.describe('piyopiyo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'views', 'controllers', 'piyopiyo.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('<div class=\'controllers/piyopiyo\'>')).notEquals(-1);
    });
  });

  t.describe('hoges/fuga', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'views', 'controllers', 'hoges', 'fuga.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('<div class=\'controllers/hoges/fuga\'>')).notEquals(-1);
    });
  });

  t.describe('hoges/fugas/foo', () => {
    t.beforeEach(() => {
      file = path.resolve(__dirname, '../', '../', 'tmp', 'app', 'views', 'controllers', 'hoges', 'fugas', 'foo.js');
    });

    t.it('Generated', () => {
      const content = loadFile();
      t.expect(content.indexOf('<div class=\'controllers/hoges/fugas/foo\'>')).notEquals(-1);
    });
  });
});
