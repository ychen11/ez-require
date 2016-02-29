var assert = require('assert');

describe('Base', function() {
  describe('Set Global Path', function () {
    it('Set global path and get it', function () {
      var ezReq = require('../');
      ezReq.setGlobalDir(__dirname);
      var module = ezReq.globalRequire('/my-module');
      assert.strictEqual('aaa', module.a);
    });
  });
});