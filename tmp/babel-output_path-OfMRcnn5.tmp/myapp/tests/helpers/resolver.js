define('myapp/tests/helpers/resolver', ['exports', 'myapp/resolver', 'myapp/config/environment'], function (exports, _myappResolver, _myappConfigEnvironment) {

  var resolver = _myappResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _myappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _myappConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});