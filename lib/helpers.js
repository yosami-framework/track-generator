const path = require('path');

/**
 * Define helpers.
 * @param {string} rootDir Application root directory.
 * @param {Plop}   plop    Plop object.
 */
module.exports = function(rootDir, plop) {
  plop.setHelper('rootDir', function() {
    return rootDir;
  });

  plop.setHelper('templateDir', function() {
    return path.resolve(__dirname, '../', 'templates');
  });

  plop.setHelper('topDir', function(name) {
    return name.split('/').slice(0, -1).map(() => '../').join('');
  });

  plop.setHelper('className', function(name) {
    const paths = name.split('/');
    return plop.getHelper('pascalCase')(paths[paths.length - 1]);
  });

  plop.setHelper('classFullName', function(name) {
    return name.split('/').map((path) => plop.getHelper('pascalCase')(path)).join('::');
  });

  plop.setHelper('fileName', function(name) {
    return name.split('/').map((path) => plop.getHelper('snakeCase')(path)).join('/');
  });

  plop.setHelper('cssSelector', function(name) {
    return name.replace('/', '\\/');
  });
};
