var Root = {
  globalDir: null,
  localDirs: []
};

var _= require('underscore');


/**
 * Set the root directory.
 * @param {String} the root directory path
 */
exports.setGlobalDir = function (path) {
  Root.globalDir = path;
};

/**
 * ezrequire function
 * @param {String} path the partial path from global dir to current file.
 */
exports.globalRequire = function (path) {
  if (!Root.globalDir) {
    throw new Error('Root directory not set');
  }

  return require(Root.path + dir);
};


/**
 * Set the local path, if the local path
 * existed, then reset it, if not, add it.
 * @param {String} path the local path
 */
exports.setLocalRoot = function (path) {

  if (_.contains(Root.localDirs, path)) {
    return;
  } else {
    Root.localDirs.push(path);
    return;
  }
}