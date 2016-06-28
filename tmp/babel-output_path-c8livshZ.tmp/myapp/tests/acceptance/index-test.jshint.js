define('myapp/tests/acceptance/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/index-test.js should pass jshint.');
  });
});