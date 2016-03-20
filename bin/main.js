var Root = {
  globalDir: null,
  localDirs: {}
};


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
exports.globalRequire = function (dir) {
  if (!Root.globalDir) {
    throw new Error('Root directory not set');
  }

  return require(Root.globalDir + dir);
};


/**
 * Set the local path, if the local path
 * existed, then reset it, if not, add it.
 * @param {String} name the local path name
 * @param {String} path the local path
 */
exports.setLocalRoot = function (name, path) {

  Root.localDirs[name] = path;
};


/**
 * Require the moduel via the local path
 * @param {String} name the name of local path
 * @param {String} dir the module directory which to be required
 */
exports.localRequire = function (name, dir) {
  if (!Root.localDirs[name]) {
    throw new Error('Local directory not set: ' + name);
  }

  return require(Root.localDirs[name] + dir);
};

