var Root = {
  path: null
};


/**
 * Set the root directory.
 * @param {String} the root directory path
 */
exports.setRoot = function (rootPath) {
  Root.path = rootPath;
};

exports.ezrequire = function (dir) {
  if (!Root.path) {
    throw new Error('Root directory not set');
  }

  return require(Root.path + dir);
};

