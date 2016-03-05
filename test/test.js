var assert = require('assert');

describe('Base', function() {
   describe('Unset global path', function () {
    it('Should throw error', function () {
      var ezReq = require('../');
      try {
        var moduel = ezReq.globalRequire('/my-module');
      } catch (e) {
        assert.ok(e);
      }
    });
  });

  describe('Set global path', function () {
    it('Set global path and get it', function () {
      var ezReq = require('../');
      ezReq.setGlobalDir(__dirname);
      var module = ezReq.globalRequire('/my-module');
      assert.strictEqual('aaa', module.a);
    });
  });

  describe('Set local path', function () {
    it('Set local path and get it', function () {
      var ezReq = require('../');
      ezReq.setLocalRoot('dir1', __dirname);
      var module = ezReq.localRequire('dir1', '/my-module');
      assert.strictEqual('aaa', module.a);
    });
  });

  describe('Unset local path', function () {
    it('Should throw error', function () {
      var ezReq = require('../');
      try {
        var module = ezReq.localRequire('dir2', '/my-module');
      } catch (e) {
        assert.ok(e);
      }
    });
  });

  describe('Set local path deeper', function () {
    it ('Set local path to test level1', function () {
      var ezReq = require('../');
      ezReq.setLocalRoot('level1', __dirname + '/test-level1');
      var module = ezReq.localRequire('level1', '/test-level2/my-module2');
      assert.strictEqual('foooo', module.foo);
    })
  });
});