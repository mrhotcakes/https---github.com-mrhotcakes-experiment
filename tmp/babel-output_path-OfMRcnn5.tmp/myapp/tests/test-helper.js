define('myapp/tests/test-helper', ['exports', 'myapp/tests/helpers/resolver', 'ember-qunit'], function (exports, _myappTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_myappTestsHelpersResolver['default']);
});