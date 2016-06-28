define('myapp/app', ['exports', 'ember', 'myapp/resolver', 'ember-load-initializers', 'myapp/config/environment'], function (exports, _ember, _myappResolver, _emberLoadInitializers, _myappConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _myappConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _myappConfigEnvironment['default'].podModulePrefix,
    Resolver: _myappResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _myappConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});