/**
 * Get plop function.
 * @param {string} rootDir Application root directory.
 * @return {function} plop function.
 */
module.exports = function(rootDir) {
  return function(plop) {
    require('./helpers')(rootDir, plop);
    require('./generators/application')(plop);
  };
};
